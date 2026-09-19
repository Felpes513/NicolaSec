import { Mail, MapPin, Phone } from "lucide-react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import logo from "../../assets/nicolasec-logo.jpeg";

const navigation = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre nós", href: "#sobre" },
  { label: "Tecnologias", href: "#parceiros" },
  { label: "Contato", href: "#contato" },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#030817] text-white">
      <div className="container-nicola py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_1fr]">
          <div>
            <a href="#" className="inline-flex items-center gap-3">
              <img
                src={logo}
                alt="NicolaSec"
                className="h-12 w-12 rounded-xl object-cover"
              />

              <span className="text-xl font-bold">
                Nicola<span className="text-nicola-orange">Sec</span>
              </span>
            </a>

            <p className="mt-5 max-w-md leading-7 text-slate-400">
              Consultoria especializada em gestão de identidades, acessos
              privilegiados, governança, riscos e conformidade.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="https://br.linkedin.com/company/nicolasec"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn da NicolaSec"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-nicola-orange hover:bg-nicola-orange hover:text-nicola-navy"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="https://www.instagram.com/nicola.sec/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram da NicolaSec"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-nicola-orange hover:bg-nicola-orange hover:text-nicola-navy"
              >
                <FaInstagram size={19} />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-nicola-orange">
              Navegação
            </h2>

            <nav className="mt-6 flex flex-col gap-4">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="w-fit text-sm text-slate-400 transition hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-nicola-orange">
              Contato
            </h2>

            <div className="mt-6 space-y-5">
              <a
                href="mailto:contato@nicolasec.com.br"
                className="flex items-start gap-3 text-sm text-slate-400 transition hover:text-white"
              >
                <Mail
                  size={18}
                  className="mt-0.5 shrink-0 text-nicola-orange"
                />
                contato@nicolasec.com.br
              </a>

              <a
                href="tel:+5511934550221"
                className="flex items-start gap-3 text-sm text-slate-400 transition hover:text-white"
              >
                <Phone
                  size={18}
                  className="mt-0.5 shrink-0 text-nicola-orange"
                />
                +55 11 93455-0221
              </a>

              <div className="flex items-start gap-3 text-sm leading-6 text-slate-400">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-nicola-orange"
                />

                <span>
                  R. Cláudio Soares, 72 — cj. 518
                  <br />
                  Pinheiros, São Paulo — SP
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} NicolaSec. Todos os direitos reservados.</p>

          <p>Segurança, identidade e confiança.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
