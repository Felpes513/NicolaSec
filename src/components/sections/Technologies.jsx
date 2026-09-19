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
      className="relative overflow-hidden bg-white py-24 sm:py-28"
    >
      <div className="absolute left-1/2 top-0 h-80 w-[50rem] -translate-x-1/2 rounded-full bg-nicola-orange/5 blur-3xl" />

      <div className="container-nicola relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-nicola-orange-dark">
            Tecnologias
          </span>

          <h2 className="mt-4 text-balance text-4xl font-bold tracking-[-0.035em] text-nicola-navy sm:text-5xl">
            Tecnologia de mercado com implementação especializada
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Trabalhamos com plataformas reconhecidas para construir soluções
            de identidade adequadas à realidade, aos processos e aos objetivos
            de cada organização.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {technologies.map((technology) => (
            <article
              key={technology.name}
              className={`group relative flex flex-col overflow-hidden rounded-[2rem] border bg-white transition duration-300 hover:-translate-y-2 hover:shadow-nicola ${
                technology.featured
                  ? 'border-nicola-orange/50'
                  : 'border-slate-200 hover:border-nicola-orange/40'
              }`}
            >
              {technology.featured && (
                <div className="absolute right-5 top-5 z-10 rounded-full bg-nicola-orange px-3 py-1.5 text-xs font-bold text-nicola-navy">
                  Parceiro oficial
                </div>
              )}

              <div className="flex h-48 items-center justify-center border-b border-slate-100 bg-slate-50 p-10">
                <img
                  src={technology.logo}
                  alt={`Logo ${technology.name}`}
                  className="max-h-24 max-w-[13rem] object-contain mix-blend-multiply transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-1 flex-col p-7 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-nicola-orange-dark">
                  {technology.category}
                </p>

                <h3 className="mt-3 text-2xl font-bold tracking-tight text-nicola-navy">
                  {technology.name}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {technology.description}
                </p>

                <div className="mt-7 space-y-3">
                  {technology.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-3 text-sm font-medium text-slate-600"
                    >
                      <CheckCircle2
                        size={17}
                        className="shrink-0 text-nicola-orange-dark"
                      />

                      {highlight}
                    </div>
                  ))}
                </div>

                <a
                  href="#contato"
                  className="mt-8 inline-flex items-center gap-2 border-t border-slate-100 pt-6 text-sm font-bold text-nicola-navy transition group-hover:text-nicola-orange-dark"
                >
                  Solicitar uma avaliação
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 grid overflow-hidden rounded-[2rem] bg-nicola-navy lg:grid-cols-[1fr_auto]">
          <div className="p-8 sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-nicola-orange">
              Estratégia antes da tecnologia
            </p>

            <h3 className="mt-3 max-w-3xl text-2xl font-bold leading-tight text-white sm:text-3xl">
              Ajudamos sua empresa a escolher e implementar a solução adequada
              para cada desafio de identidade.
            </h3>
          </div>

          <a
            href="#contato"
            className="flex items-center justify-center gap-2 bg-nicola-orange px-8 py-6 font-bold text-nicola-navy transition hover:bg-nicola-orange-light lg:min-w-64"
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