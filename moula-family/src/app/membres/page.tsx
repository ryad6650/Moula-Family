import { membres } from "@/data/membres";
import { MembreCard } from "@/components/membre-card";
import { MembresHeader } from "@/components/membres-header";

export const metadata = {
  title: "Membres — Famille Moula",
  description: "Découvre les membres de la Famille Moula.",
};

export default function MembresPage() {
  return (
    <section className="pt-32 pb-20 editorial-padding">
      <MembresHeader />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {membres.map((membre, i) => (
          <MembreCard key={membre.pseudo} membre={membre} index={i} />
        ))}
      </div>

      {/* Footer membres */}
      <div
        className="mt-16 pt-8 text-center"
        style={{ borderTop: "1px solid rgba(255,45,120,0.1)" }}
      >
        <span
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "18px",
            letterSpacing: "3px",
            color: "#FF2D78",
          }}
        >
          FAMILLE MOULA
        </span>
      </div>
    </section>
  );
}
