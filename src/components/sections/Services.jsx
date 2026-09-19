import {
  ArrowUpRight,
  Blocks,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  LifeBuoy,
  RefreshCw,
} from 'lucide-react'

const services = [
  {
    title: 'Consultoria',
    description:
      'Diagnóstico especializado para definir objetivos, prioridades e uma estratégia de segurança alinhada ao negócio.',
    icon: BriefcaseBusiness,
    number: '01',
  },
  {
    title: 'Implementação',
    description:
      'Implementação, configuração e integração de soluções com foco em segurança, compliance e retorno sobre o investimento.',
    icon: Blocks,
    number: '02',
  },
  {
    title: 'Atualizações',
    description:
      'Planejamento e execução de atualizações para versões modernas, com transições eficientes e menor impacto operacional.',
    icon: RefreshCw,
    number: '03',
  },
  {
    title: 'Treinamento e capacitação',
    description:
      'Treinamentos técnicos com laboratórios e cenários práticos para preparar equipes e ampliar sua autonomia.',
    icon: GraduationCap,
    number: '04',
  },
  {
    title: 'Sustentação',
    description:
      'Suporte contínuo e proativo para reduzir riscos, manter a disponibilidade e maximizar o valor das soluções.',
    icon: LifeBuoy,
    number: '05',
  },
  {
    title: 'Desenvolvimento e APIs',
    description:
      'Desenvolvimento de conectores, APIs e integrações sob medida para conectar identidades à infraestrutura.',
    icon: Code2,
    number: '06',
  },
]

function Services() {
  return (
    <section
      id="servicos"
      className="overflow-hidden bg-nicola-surface py-16 sm:py-20 lg:py-28"
    >
      <div className="container-nicola">
        {/* Cabeçalho */}
        <div className="grid items-end gap-6 text-center lg:grid-cols-2 lg:gap-8 lg:text-left">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-nicola-orange-dark">
              Como atuamos
            </span>

            <h2 className="mx-auto mt-4 max-w-2xl text-balance text-3xl font-bold leading-tight tracking-[-0.035em] text-nicola-navy sm:text-4xl lg:mx-0 lg:text-5xl">
              Expertise que acompanha toda a sua jornada
            </h2>
          </div>

          <p className="mx-auto max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 lg:mx-0 lg:justify-self-end">
            Da estratégia à sustentação, trabalhamos ao lado da sua equipe para
            construir operações mais seguras, eficientes e preparadas para
            evoluir.
          </p>
        </div>

        {/* Cards de serviços */}
        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:mt-14 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <article
                key={service.title}
                className="group relative flex min-h-72 flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-2 hover:border-nicola-orange/40 hover:shadow-nicola sm:min-h-80 sm:p-7 lg:p-8"
              >
                {/* Brilho decorativo */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-nicola-orange/0 blur-2xl transition duration-500 group-hover:bg-nicola-orange/15"
                />

                {/* Ícone e numeração */}
                <div className="relative flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-nicola-navy text-nicola-orange transition duration-300 group-hover:bg-nicola-orange group-hover:text-nicola-navy sm:h-14 sm:w-14">
                    <Icon size={25} strokeWidth={1.8} />
                  </div>

                  <span className="text-sm font-bold text-slate-300">
                    {service.number}
                  </span>
                </div>

                {/* Conteúdo */}
                <div className="relative mt-auto pt-9 sm:pt-12">
                  <h3 className="text-xl font-bold tracking-tight text-nicola-navy sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-7">
                    {service.description}
                  </p>

                  <a
                    href="#contato"
                    aria-label={`Saiba mais sobre ${service.title}`}
                    className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-nicola-orange-dark transition group-hover:gap-3 sm:mt-6"
                  >
                    Saiba mais
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </article>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-3xl bg-nicola-orange px-6 py-8 text-center sm:mt-12 sm:px-8 lg:flex-row lg:rounded-4xl lg:px-10 lg:text-left">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-nicola-navy/60 sm:text-sm sm:tracking-[0.18em]">
              Precisa de uma solução específica?
            </p>

            <h3 className="mx-auto mt-2 max-w-2xl text-xl font-bold leading-tight text-nicola-navy sm:text-2xl lg:mx-0">
              Desenvolvemos uma abordagem para o seu cenário.
            </h3>
          </div>

          <a
            href="#contato"
            className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-nicola-navy px-6 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-nicola-dark sm:w-auto"
          >
            Falar com a NicolaSec
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services
