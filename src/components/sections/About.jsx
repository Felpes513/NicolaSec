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
      className="relative overflow-hidden bg-nicola-surface py-24 sm:py-28"
    >
      <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-nicola-orange/10 blur-3xl" />

      <div className="container-nicola relative">
        <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-nicola-orange-dark">
              Experts em identidades
            </span>

            <h2 className="mt-4 text-balance text-4xl font-bold leading-tight tracking-[-0.035em] text-nicola-navy sm:text-5xl">
              Segurança construída por quem entende de pessoas, acessos e
              negócios
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              A NicolaSec é uma consultoria especializada em Segurança da
              Informação que ajuda organizações a combinar conformidade,
              agilidade e inovação.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              Trabalhamos lado a lado com nossos clientes para transformar
              desafios complexos de identidade em operações mais seguras,
              automatizadas e confiáveis.
            </p>

            <div className="mt-9 space-y-5">
              {values.map((value) => {
                const Icon = value.icon

                return (
                  <div key={value.title} className="flex items-start gap-4">
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
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-nicola-navy px-7 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-nicola-orange hover:text-nicola-navy"
            >
              Conheça a NicolaSec
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-nicola-orange/20 to-slate-300/30 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2.25rem] bg-nicola-navy p-6 shadow-nicola sm:p-8">
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border-[45px] border-nicola-orange/10" />
              <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full border-[45px] border-white/[0.03]" />

              <div className="relative border-b border-white/10 pb-7">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-nicola-orange">
                  NicolaSec Experts
                </p>

                <h3 className="mt-3 max-w-md text-2xl font-bold leading-tight text-white sm:text-3xl">
                  Especialização que conecta estratégia e execução
                </h3>
              </div>

              <div className="relative mt-7 grid gap-4 sm:grid-cols-2">
                {indicators.map((indicator) => {
                  const Icon = indicator.icon

                  return (
                    <div
                      key={indicator.value}
                      className="min-h-48 rounded-2xl border border-white/10 bg-white/[0.05] p-5 transition duration-300 hover:-translate-y-1 hover:border-nicola-orange/30 hover:bg-white/[0.08]"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-nicola-orange/15 text-nicola-orange">
                        <Icon size={21} />
                      </div>

                      <strong className="mt-7 block text-xl text-white">
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