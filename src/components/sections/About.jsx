import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Handshake,
  MapPin,
  Network,
  ShieldCheck,
  UsersRound,
} from 'lucide-react'

const values = [
  {
    title: 'Conhecimento especializado',
    description:
      'Profissionais com experiência em projetos de identidade, segurança e governança.',
    icon: BadgeCheck,
  },
  {
    title: 'Atuação próxima',
    description:
      'Colaboração contínua com as equipes técnicas e áreas de negócio.',
    icon: Handshake,
  },
  {
    title: 'Visão ponta a ponta',
    description:
      'Da estratégia e implementação até sustentação, evolução e capacitação.',
    icon: Network,
  },
]

const indicators = [
  {
    value: 'Desde 2019',
    label: 'Construindo ambientes digitais mais seguros',
    icon: CalendarDays,
  },
  {
    value: 'IAM · PAM · GRC',
    label: 'Especialização em identidades e governança',
    icon: ShieldCheck,
  },
  {
    value: 'São Paulo',
    label: 'Atuação em projetos corporativos',
    icon: MapPin,
  },
  {
    value: 'Ponta a ponta',
    label: 'Estratégia, implementação e sustentação',
    icon: UsersRound,
  },
]

function About() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-nicola-surface py-16 sm:py-20 lg:py-28"
    >
      {/* Elemento decorativo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-nicola-orange/10 blur-3xl sm:h-96 sm:w-96"
      />

      <div className="container-nicola relative">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* Conteúdo textual */}
          <div className="text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-nicola-orange-dark">
              Experts em identidades
            </span>

            <h2 className="mx-auto mt-4 max-w-3xl text-balance text-3xl font-bold leading-tight tracking-[-0.035em] text-nicola-navy sm:text-4xl lg:mx-0 lg:text-5xl">
              Segurança construída por quem entende de pessoas, acessos e
              negócios
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8 lg:mx-0">
              A NicolaSec é uma consultoria especializada em Segurança da
              Informação que ajuda organizações a combinar conformidade,
              agilidade e inovação.
            </p>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base lg:mx-0">
              Trabalhamos lado a lado com nossos clientes para transformar
              desafios complexos de identidade em operações mais seguras,
              automatizadas e confiáveis.
            </p>

            {/* Valores */}
            <div className="mx-auto mt-8 max-w-xl space-y-5 text-left sm:mt-9 lg:mx-0">
              {values.map((value) => {
                const Icon = value.icon

                return (
                  <div
                    key={value.title}
                    className="flex items-start gap-4 rounded-2xl border border-transparent p-2 transition duration-300 hover:border-nicola-orange/20 hover:bg-white"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-nicola-orange/15 text-nicola-orange-dark">
                      <Icon size={21} />
                    </div>

                    <div>
                      <h3 className="font-bold text-nicola-navy">
                        {value.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {value.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            <a
              href="#contato"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-nicola-navy px-7 py-4 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-nicola-orange hover:text-nicola-navy sm:mt-9 sm:w-auto"
            >
              Conheça a NicolaSec
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Painel de indicadores */}
          <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-nicola-orange/20 to-slate-300/30 blur-2xl sm:-inset-6 sm:rounded-[3rem]"
            />

            <div className="relative overflow-hidden rounded-3xl bg-nicola-navy p-5 shadow-nicola sm:rounded-[2.25rem] sm:p-8">
              {/* Círculos decorativos */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border-[40px] border-nicola-orange/10 sm:h-72 sm:w-72 sm:border-[45px]"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full border-[40px] border-white/[0.03] sm:h-72 sm:w-72 sm:border-[45px]"
              />

              {/* Cabeçalho do painel */}
              <div className="relative border-b border-white/10 pb-6 text-center sm:pb-7 sm:text-left">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-nicola-orange sm:tracking-[0.2em]">
                  NicolaSec Experts
                </p>

                <h3 className="mx-auto mt-3 max-w-md text-xl font-bold leading-tight text-white sm:mx-0 sm:text-3xl">
                  Especialização que conecta estratégia e execução
                </h3>
              </div>

              {/* Indicadores */}
              <div className="relative mt-6 grid gap-3 sm:mt-7 sm:grid-cols-2 sm:gap-4">
                {indicators.map((indicator) => {
                  const Icon = indicator.icon

                  return (
                    <div
                      key={indicator.value}
                      className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 transition duration-300 hover:-translate-y-1 hover:border-nicola-orange/30 hover:bg-white/[0.08] sm:min-h-48"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-nicola-orange/15 text-nicola-orange">
                        <Icon size={21} />
                      </div>

                      <strong className="mt-6 block text-lg text-white sm:mt-7 sm:text-xl">
                        {indicator.value}
                      </strong>

                      <span className="mt-2 block text-sm leading-6 text-slate-400">
                        {indicator.label}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About