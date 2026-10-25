
import Reveal from "./Reveal";

const cardStyle = {
  background: "rgba(255,255,255,0.06)",
  borderColor: "rgba(225,188,124,0.25)",
  color: "rgb(225,188,124)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
  fontFamily: '"Times New Roman", serif',
};

function ContactCard({ href, label, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex w-full items-center gap-3 rounded-xl border px-4 py-2.5 shadow-xl backdrop-blur-xl transition-all duration-300 hover:scale-[1.02]" style={cardStyle}>
      {children}
      <span dir="auto">{label}</span>
    </a>
  );
}

export default function Footer() {
  return (
    <>
      <Reveal as="footer" className="relative flex flex-col items-center px-6 md:px-10 pb-4 text-center z-10">
        <span
          className="whitespace-pre-line flex flex-col items-center gap-1 text-sm md:text-lg font-medium mx-auto md:max-w-[560px]"
          style={{ color: "rgb(225, 188, 124)", fontFamily: '"Times New Roman", serif', lineHeight: 1.6 }}
        >
          <span dir="auto">Tashrifingiz biz uchun katta baxt.</span>
        </span>
      </Reveal>

      <Reveal className="my-2 w-full max-w-[432px] md:max-w-[600px] px-6 text-center z-20">
        <img
          alt="Gold Divider"
          loading="lazy"
          width="600"
          height="10"
          className="w-full mx-auto transition-transform duration-200 hover:scale-105"
          src="/images/royal-red/gold-divider.webp"
        />
      </Reveal>

      <Reveal className="relative z-10 flex w-full flex-col items-center gap-4 px-6 pt-4 pb-20">
        <h3
          className="text-sm md:text-base uppercase tracking-[0.15em] font-semibold text-center px-2 [text-wrap:balance]"
          style={{ color: "rgb(225,188,124)", fontFamily: '"Fz Qellia", "Cormorant Garamond", "Times New Roman", serif' }}
        >
          <span dir="auto">
            Toy uchun onlayn taklifnomalar <span className="block md:inline">yaratamiz</span>
          </span>
        </h3>

        <div className="flex w-full max-w-[280px] flex-col gap-2.5">
          <ContactCard href="tel:+998990300505" label="+998 99 030 05 05">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 shrink-0">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </ContactCard>
          <ContactCard href="https://t.me/Miragzamovm99" label="@Miragzamovm99">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 shrink-0">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
          </ContactCard>
          <ContactCard href="https://instagram.com/octa.weddinguz" label="@octa.weddinguz">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 shrink-0">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </ContactCard>
        </div>
      </Reveal>
    </>
  );
}
