import Link from "next/link";
import { LogoFull } from "./logo";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-noir">
      <div className="editorial-padding py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <LogoFull className="opacity-80" />
          <div className="flex items-center gap-8">
            <Link
              href="/membres"
              className="text-[12px] tracking-[1.5px] text-blanc/40 hover:text-blanc transition-colors"
            >
              Membres
            </Link>
            <Link
              href="/rejoindre"
              className="text-[12px] tracking-[1.5px] text-blanc/40 hover:text-blanc transition-colors"
            >
              Rejoindre
            </Link>
          </div>
          <p className="text-[11px] tracking-[1px] text-blanc/20">
            © {new Date().getFullYear()} Famille Moula
          </p>
        </div>
      </div>
    </footer>
  );
}
