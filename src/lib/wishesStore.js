import mqtt from "mqtt";

const BROKER = import.meta.env.VITE_MQTT_URL || "wss://broker.emqx.io:8084/mqtt";
const TOPIC =
  import.meta.env.VITE_MQTT_TOPIC ||
  "chorlove/wedding/muhammad-xadicha-2026/wishes/v1";

const OUTBOX_KEY = "wishes_outbox_v1";

let client = null;
let connected = false;
let retryTimer = null;

export const wishesLive = true;

function readOutbox() {
  try {
    const raw = localStorage.getItem(OUTBOX_KEY);
    const list = raw ? JSON.parse(raw) : null;
    return Array.isArray(list) ? list : null;
  } catch {
    return null;
  }
}

function writeOutbox(list) {
  try {
    if (list) localStorage.setItem(OUTBOX_KEY, JSON.stringify(list));
    else localStorage.removeItem(OUTBOX_KEY);
  } catch {
    /* storage unavailable — skip, wishes still work in-memory */
  }
}

const outboxEquals = (a, b) => JSON.stringify(a) === JSON.stringify(b);

function scheduleRetry() {
  if (retryTimer) return;
  retryTimer = setTimeout(() => {
    retryTimer = null;
    flushOutbox();
  }, 3000);
}

// Send the pending list once the connection is up; drop the outbox only after
// a confirmed publish of exactly that list.
function flushOutbox() {
  if (!client || !connected) {
    scheduleRetry();
    return;
  }
  const outbox = readOutbox();
  if (!outbox) return;
  const payload = JSON.stringify({ wishes: outbox });
  client.publish(TOPIC, payload, { retain: true, qos: 1 }, (err) => {
    if (err) {
      scheduleRetry();
      return;
    }
    if (outboxEquals(readOutbox(), outbox)) writeOutbox(null);
  });
}

export function subscribeWishes(onData) {
  if (client) {
    try {
      client.end(true);
    } catch {
      /* ignore */
    }
  }

  client = mqtt.connect(BROKER, {
    clientId: `wish_${Math.random().toString(16).slice(2, 10)}`,
    clean: true,
    reconnectPeriod: 5000,
    connectTimeout: 8000,
    keepalive: 30,
  });

  client.on("connect", () => {
    connected = true;
    try {
      client.subscribe(TOPIC, { qos: 1 });
    } catch {
      /* ignore */
    }
    flushOutbox();
  });

  client.on("close", () => {
    connected = false;
  });

  client.on("message", (_topic, buf) => {
    try {
      const data = JSON.parse(buf.toString());
      const list = Array.isArray(data) ? data : data.wishes;
      if (Array.isArray(list)) onData(list);
    } catch {
      /* ignore malformed */
    }
  });

  return () => {
    try {
      client.end(true);
    } catch {
      /* ignore */
    }
    client = null;
    connected = false;
  };
}

// Fulfulling immediately on purpose: the wish is stored durably in the outbox
// and will be delivered (with automatic retries) once the connection is ready,
// so the UI never waits on the broker.
export function publishWishes(wishes) {
  writeOutbox(wishes);
  flushOutbox();
  return Promise.resolve();
}
