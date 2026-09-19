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
    <section id="servicos" className="bg-nicola-surface py-24 sm:py-28">
      <div className="container-nicola">
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-nicola-orange-dark">
              Como atuamos
            </span>

            <h2 className="mt-4 max-w-2xl text-balance text-4xl font-bold leading-tight tracking-[-0.035em] text-nicola-navy sm:text-5xl">
              Expertise que acompanha toda a sua jornada
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-8 text-slate-600 lg:justify-self-end">
            Da estratégia à sustentação, trabalhamos ao lado da sua equipe
            para construir operações mais seguras, eficientes e preparadas
            para evoluir.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <article
                key={service.title}
                className="group relative flex min-h-80 flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-nicola-orange/40 hover:shadow-nicola sm:p-8"
              >
                <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-nicola-orange/0 blur-2xl transition duration-500 group-hover:bg-nicola-orange/15" />

                <div className="relative flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-nicola-navy text-nicola-orange transition duration-300 group-hover:bg-nicola-orange group-hover:text-nicola-navy">
                    <Icon size={27} strokeWidth={1.8} />
                  </div>

                  <span className="text-sm font-bold text-slate-300">
                    {service.number}
                  </span>
                </div>

                <div className="relative mt-auto pt-12">
                  <h3 className="text-2xl font-bold tracking-tight text-nicola-navy">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <a
                    href="#contato"
                    aria-label={`Saiba mais sobre ${service.title}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-nicola-orange-dark transition group-hover:gap-3"
                  >
                    Saiba mais
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-[2rem] bg-nicola-orange px-7 py-8 sm:flex-row sm:px-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-nicola-navy/60">
              Precisa de uma solução específica?
            </p>

            <h3 className="mt-2 text-2xl font-bold text-nicola-navy">
              Desenvolvemos uma abordagem para o seu cenário.
            </h3>
          </div>

          <a
            href="#contato"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-nicola-navy px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-nicola-dark"
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