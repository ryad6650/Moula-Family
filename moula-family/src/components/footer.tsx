import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255, 107, 53, 0.1)" }}>
      <div className="editorial-padding py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <Image
            src="/logo-moula.svg"
            alt="Famille Moula"
            width={400}
            height={200}
            style={{ height: "48px", width: "auto" }}
          />
          <div className="flex items-center gap-8">
            <Link
              href="/membres"
              className="text-[12px] tracking-[1.5px] uppercase transition-colors"
              style={{ color: "rgba(245, 240, 235, 0.5)" }}
            >
              Membres
            </Link>
            <Link
              href="/rejoindre"
              className="text-[12px] tracking-[1.5px] uppercase transition-colors"
              style={{ color: "rgba(245, 240, 235, 0.5)" }}
            >
              Rejoindre
            </Link>
          </div>
          <p className="text-[11px] tracking-[1px]" style={{ color: "rgba(245, 240, 235, 0.2)" }}>
            © {new Date().getFullYear()} Famille Moula — Le Grand Paname
          </p>
        </div>
      </div>
    </footer>
  );
}
