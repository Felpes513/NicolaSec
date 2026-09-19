import { ArrowUpRight, CheckCircle2 } from 'lucide-react'

import broadcomLogo from '../../assets/tecnologias/Broadcom-logo.png'
import midpointLogo from '../../assets/tecnologias/EvolveumMidpoint-logo.png'
import sailpointLogo from '../../assets/tecnologias/Sailpoint-logo.jpg'

const technologies = [
  {
    name: 'Evolveum midPoint',
    category: 'Identity Governance & Administration',
    description:
      'Plataforma flexível para governança de identidades, automação do ciclo de vida e integração de acessos.',
    logo: midpointLogo,
    highlights: [
      'Gestão do ciclo de vida',
      'Provisionamento',
      'Governança de acessos',
    ],
    featured: true,
  },
  {
    name: 'SailPoint',
    category: 'Identity Security',
    description:
      'Tecnologia voltada à segurança e governança de identidades em ambientes corporativos complexos.',
    logo: sailpointLogo,
    highlights: [
      'Visibilidade de acessos',
      'Automação',
      'Políticas de identidade',
    ],
    featured: false,
  },
  {
    name: 'Broadcom',
    category: 'Enterprise Security',
    description:
      'Soluções corporativas para proteção de identidades, acessos críticos e operações de segurança.',
    logo: broadcomLogo,
    highlights: [
      'Segurança corporativa',
      'Controle de acessos',
      'Operações críticas',
    ],
    featured: false,
  },
]

function Technologies() {
  return (
    <section
      id="parceiros"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28"
    >
      {/* Elemento decorativo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-[36rem] max-w-full -translate-x-1/2 rounded-full bg-nicola-orange/5 blur-3xl sm:h-80 sm:w-200"
      />

      <div className="container-nicola relative">
        {/* Cabeçalho */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-nicola-orange-dark">
            Tecnologias
          </span>

          <h2 className="mt-4 text-balance text-3xl font-bold leading-tight tracking-[-0.035em] text-nicola-navy sm:text-4xl lg:text-5xl">
            Tecnologia de mercado com implementação especializada
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Trabalhamos com plataformas reconhecidas para construir soluções de
            identidade adequadas à realidade, aos processos e aos objetivos de
            cada organização.
          </p>
        </div>

        {/* Cards de tecnologias */}
        <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-2 xl:mt-14 xl:grid-cols-3 xl:gap-6">
          {technologies.map((technology) => (
            <article
              key={technology.name}
              className={[
                'group relative flex flex-col overflow-hidden rounded-3xl',
                'border bg-white transition duration-300',
                'hover:-translate-y-2 hover:shadow-nicola',
                technology.featured
                  ? 'border-nicola-orange/50'
                  : 'border-slate-200 hover:border-nicola-orange/40',
              ].join(' ')}
            >
              {technology.featured && (
                <div className="absolute right-4 top-4 z-10 rounded-full bg-nicola-orange px-3 py-1.5 text-[0.65rem] font-bold text-nicola-navy shadow-sm sm:right-5 sm:top-5 sm:text-xs">
                  Parceiro oficial
                </div>
              )}

              {/* Área do logo */}
              <div className="flex h-40 items-center justify-center border-b border-slate-100 bg-slate-50 p-8 sm:h-48 sm:p-10">
                <img
                  src={technology.logo}
                  alt={`Logo ${technology.name}`}
                  className="max-h-20 max-w-[11rem] object-contain mix-blend-multiply transition duration-300 group-hover:scale-105 sm:max-h-24 sm:max-w-52"
                  loading="lazy"
                />
              </div>

              {/* Conteúdo */}
              <div className="flex flex-1 flex-col p-6 sm:p-7 lg:p-8">
                <p className="text-[0.65rem] font-bold uppercase leading-5 tracking-[0.14em] text-nicola-orange-dark sm:text-xs sm:tracking-[0.16em]">
                  {technology.category}
                </p>

                <h3 className="mt-3 text-xl font-bold tracking-tight text-nicola-navy sm:text-2xl">
                  {technology.name}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                  {technology.description}
                </p>

                <div className="mt-6 space-y-3 sm:mt-7">
                  {technology.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-3 text-sm font-medium text-slate-600"
                    >
                      <CheckCircle2
                        size={17}
                        className="shrink-0 text-nicola-orange-dark"
                      />

                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contato"
                  className="mt-auto flex min-h-12 items-center gap-2 border-t border-slate-100 pt-6 text-sm font-bold text-nicola-navy transition group-hover:text-nicola-orange-dark"
                >
                  Solicitar uma avaliação
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* CTA final */}
        <div className="mt-10 grid overflow-hidden rounded-3xl bg-nicola-navy sm:mt-12 lg:grid-cols-[1fr_auto] lg:rounded-4xl xl:mt-14">
          <div className="p-6 text-center sm:p-8 lg:p-10 lg:text-left">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-nicola-orange sm:text-sm sm:tracking-[0.18em]">
              Estratégia antes da tecnologia
            </p>

            <h3 className="mx-auto mt-3 max-w-3xl text-xl font-bold leading-tight text-white sm:text-2xl lg:mx-0 lg:text-3xl">
              Ajudamos sua empresa a escolher e implementar a solução adequada
              para cada desafio de identidade.
            </h3>
          </div>

          <a
            href="#contato"
            className="flex min-h-16 w-full items-center justify-center gap-2 bg-nicola-orange px-6 py-5 text-center font-bold text-nicola-navy transition hover:bg-nicola-orange-light lg:min-h-full lg:w-auto lg:min-w-64 lg:px-8"
          >
            Falar com nossa equipe
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Technologies