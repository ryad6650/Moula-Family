import { CandidatureForm } from "@/components/candidature-form";
import { RejoindreHeader } from "@/components/rejoindre-header";
import { DiscordSection } from "@/components/discord-section";

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
          <h2 className="font-heading text-3xl md:text-4xl tracking-wider mb-8 text-blanc">
            TU VEUX FAIRE PARTIE DE QUELQUE CHOSE DE VRAI ?
          </h2>
          <div className="space-y-4 text-blanc/50 leading-relaxed">
            <p>
              <span className="text-[#FF2D78] mr-2">—</span>
              De la motivation, de la régularité, et un vrai investissement dans le collectif
            </p>
            <p>
              <span className="text-[#FF2D78] mr-2">—</span>
              Un talent ou une passion que tu veux développer avec nous — contenu, montage, stream
            </p>
            <p>
              <span className="text-[#FF2D78] mr-2">—</span>
              L&apos;esprit famille : on avance ensemble, on se soutient, on se tire vers le haut
            </p>
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
