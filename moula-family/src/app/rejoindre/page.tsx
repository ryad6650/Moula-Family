import { CandidatureForm } from "@/components/candidature-form";
import { RejoindreHeader } from "@/components/rejoindre-header";
import { DiscordSection } from "@/components/discord-section";
import Image from "next/image";

export const metadata = {
  title: "Rejoindre — Famille Moula",
  description: "Envoie ta candidature pour rejoindre la Famille Moula.",
};

export default function RejoindrePage() {
  return (
    <section className="pt-32 pb-20 editorial-padding">
      <RejoindreHeader />

      <div className="flex flex-col lg:flex-row gap-16">
        {/* Bloc éditorial à gauche */}
        <div className="lg:w-[40%]">
          <h2 className="font-heading text-3xl md:text-4xl tracking-wider mb-8 uppercase">
            TU VEUX FAIRE PARTIE DE QUELQUE CHOSE DE VRAI ?
          </h2>
          <div className="space-y-4 leading-relaxed" style={{ color: "rgba(245, 240, 235, 0.5)" }}>
            <p>
              <span className="mr-2" style={{ color: "#FF6B35" }}>&mdash;</span>
              De la motivation, de la régularité, et un vrai investissement dans le collectif
            </p>
            <p>
              <span className="mr-2" style={{ color: "#FF6B35" }}>&mdash;</span>
              Un talent ou une passion que tu veux développer avec nous — contenu, montage, stream
            </p>
            <p>
              <span className="mr-2" style={{ color: "#FF6B35" }}>&mdash;</span>
              L&apos;esprit famille : on avance ensemble, on se soutient, on se tire vers le haut
            </p>
          </div>

          {/* Photo Los Santos */}
          <div
            className="mt-10 relative overflow-hidden"
            style={{
              aspectRatio: "16/9",
              border: "1px solid rgba(255, 107, 53, 0.15)",
            }}
          >
            <Image
              src="/los-santos.jpg"
              alt="Vue de Paris"
              fill
              className="object-cover"
              style={{ filter: "saturate(1.2) contrast(1.05)" }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(180deg, transparent 60%, rgba(10, 10, 18, 0.8) 100%)" }}
            />
            <span
              className="absolute bottom-3 left-3 z-10 px-3 py-1 font-heading text-[10px] tracking-[3px] uppercase"
              style={{
                background: "rgba(10, 10, 18, 0.7)",
                color: "#F7C948",
                border: "1px solid rgba(247, 201, 72, 0.2)",
              }}
            >
              Montmartre, Paris
            </span>
          </div>
        </div>

        {/* Formulaire à droite */}
        <div className="lg:w-[60%]">
          <CandidatureForm />
        </div>
      </div>

      <DiscordSection />
    </section>
  );
}
