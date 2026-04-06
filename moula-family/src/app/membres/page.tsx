import { membres } from "@/data/membres";
import { MembreCard } from "@/components/membre-card";
import { MembresHeader } from "@/components/membres-header";
import Link from "next/link";

export const metadata = {
  title: "Membres — Famille Moula",
  description: "Découvre les membres de la Famille Moula.",
};

export default function MembresPage() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 editorial-padding">
      {/* Background image GTA */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/los-santos.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "rgba(0, 0, 0, 0.85)" }}
      />

      <div className="relative z-10">
        <MembresHeader />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {membres.map((membre, i) => (
            <MembreCard key={membre.pseudo} membre={membre} index={i} />
          ))}
        </div>

        {/* CTA Rejoindre */}
        <div
          className="mt-16 text-center"
          style={{
            background: "rgba(255, 107, 0, 0.05)",
            border: "1px solid rgba(255, 107, 0, 0.15)",
            padding: "48px",
          }}
        >
          <h2
            className="font-heading uppercase"
            style={{ fontSize: "40px", color: "#ffffff", letterSpacing: "2px" }}
          >
            TU VEUX NOUS REJOINDRE ?
          </h2>
          <p
            className="mt-3 mx-auto max-w-md"
            style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.5)" }}
          >
            Soumets ta candidature et tente ta chance pour intégrer la Famille Moula.
          </p>
          <Link
            href="/rejoindre"
            className="inline-flex items-center gap-2.5 mt-6 px-9 py-4 font-heading text-[15px] tracking-[3px] uppercase no-underline transition-all duration-300 hover:brightness-110"
            style={{
              background: "linear-gradient(135deg, #FF6B35, #F7C948)",
              color: "#000000",
            }}
          >
            Rejoindre la famille
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>

        {/* Footer membres */}
        <div
          className="mt-16 pt-8 text-center"
          style={{ borderTop: "1px solid rgba(255, 107, 53, 0.1)" }}
        >
          <span
            className="font-heading text-[18px] tracking-[3px]"
            style={{ color: "#FF6B35" }}
          >
            FAMILLE MOULA
          </span>
        </div>
      </div>
    </section>
  );
}
