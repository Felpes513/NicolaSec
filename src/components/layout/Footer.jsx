import { Mail, MapPin, Phone } from 'lucide-react'
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
import logo from '../../assets/nicolasec-logo.jpeg'

const navigation = [
  {
    label: 'Soluções',
    href: '#solucoes',
  },
  {
    label: 'Serviços',
    href: '#servicos',
  },
  {
    label: 'Parceiros',
    href: '#parceiros',
  },
  {
    label: 'Sobre nós',
    href: '#sobre',
  },
  {
    label: 'Contato',
    href: '#contato',
  },
]

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="overflow-hidden border-t border-white/10 bg-[#030817] text-white">
      <div className="container-nicola py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-[1.3fr_0.7fr_1fr]">
          {/* Marca */}
          <div className="text-center sm:col-span-2 sm:text-left lg:col-span-1">
            <a
              href="#inicio"
              className="inline-flex items-center gap-3"
              aria-label="Voltar ao início"
            >
              <img
                src={logo}
                alt=""
                className="h-12 w-12 rounded-xl object-cover"
              />

              <span className="text-xl font-bold">
                Nicola
                <span className="text-nicola-orange">Sec</span>
              </span>
            </a>

            <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-slate-400 sm:mx-0 sm:text-base">
              Consultoria especializada em gestão de identidades, acessos
              privilegiados, governança, riscos e conformidade.
            </p>

            <div className="mt-6 flex justify-center gap-3 sm:justify-start">
              <a
                href="https://br.linkedin.com/company/nicolasec"
                target="_blank"
                rel="noreferrer"
                aria-label="Abrir LinkedIn da NicolaSec"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-slate-400 transition duration-300 hover:-translate-y-0.5 hover:border-nicola-orange hover:bg-nicola-orange hover:text-nicola-navy"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="https://www.instagram.com/nicola.sec/"
                target="_blank"
                rel="noreferrer"
                aria-label="Abrir Instagram da NicolaSec"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-slate-400 transition duration-300 hover:-translate-y-0.5 hover:border-nicola-orange hover:bg-nicola-orange hover:text-nicola-navy"
              >
                <FaInstagram size={19} />
              </a>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-nicola-orange">
              Navegação
            </h2>

            <nav
              className="mt-6 grid grid-cols-2 gap-x-5 gap-y-4 sm:flex sm:flex-col"
              aria-label="Navegação do rodapé"
            >
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

          {/* Contato */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-nicola-orange">
              Contato
            </h2>

            <address className="mt-6 space-y-5 not-italic">
              <a
                href="mailto:contato@nicolasec.com.br"
                className="flex min-w-0 items-start gap-3 text-sm text-slate-400 transition hover:text-white"
              >
                <Mail
                  size={18}
                  className="mt-0.5 shrink-0 text-nicola-orange"
                />

                <span className="min-w-0 break-all">
                  contato@nicolasec.com.br
                </span>
              </a>

              <a
                href="tel:+5511934550221"
                className="flex items-start gap-3 text-sm text-slate-400 transition hover:text-white"
              >
                <Phone
                  size={18}
                  className="mt-0.5 shrink-0 text-nicola-orange"
                />

                <span>+55 11 93455-0221</span>
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
            </address>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="mt-12 flex flex-col items-center gap-3 border-t border-white/10 pt-7 text-center text-xs leading-5 text-slate-500 sm:mt-14 sm:flex-row sm:justify-between sm:text-left">
          <p>© {currentYear} NicolaSec. Todos os direitos reservados.</p>

          <p>Segurança, identidade e confiança.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
