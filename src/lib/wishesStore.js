import mqtt from "mqtt";

const BROKER = import.meta.env.VITE_MQTT_URL || "wss://broker.emqx.io:8084/mqtt";
const TOPIC =
  import.meta.env.VITE_MQTT_TOPIC ||
  "chorlove/wedding/odilxon-odinaxon-2026/wishes/v1";

let client = null;

export const wishesLive = true;

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

  client.on("connect", () => client.subscribe(TOPIC, { qos: 1 }));

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
  };
}

export function publishWishes(wishes) {
  if (!client || !client.connected) {
    return Promise.reject(new Error("MQTT is not connected"));
  }
  return new Promise((resolve, reject) => {
    client.publish(
      TOPIC,
      JSON.stringify({ wishes }),
      { retain: true, qos: 1 },
      (err) => (err ? reject(err) : resolve())
    );
  });
}
