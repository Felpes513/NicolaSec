import { ArrowRight, Check } from 'lucide-react'
import logo from '../../assets/nicolasec-logo.jpeg'
import IdentityOrchestrationVisual from '../ui/IdentityOrchestrationVisual'

const benefits = [
  'Governança de identidades',
  'Proteção de acessos privilegiados',
  'Conformidade e automação',
]

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-nicola-surface">
      {/* Elementos decorativos de fundo */}
      <div
        aria-hidden="true"
        className="absolute -left-40 top-24 h-96 w-96 rounded-full bg-nicola-orange/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-28 top-10 h-[34rem] w-[34rem] rounded-full bg-slate-300/40 blur-3xl"
      />

      {/* Marca-d'água com o logo */}
      <img
        src={logo}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-1/2 hidden w-[38rem] -translate-y-1/2 opacity-[0.04] mix-blend-multiply lg:block"
      />

      <div className="container-nicola relative grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-24">
        {/* Conteúdo textual */}
        <div className="relative z-10">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-nicola-orange/25 bg-white px-4 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-nicola-orange" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-nicola-graphite">
              Especialistas em segurança de identidades
            </span>
          </div>

          <h1 className="max-w-4xl text-balance text-5xl font-bold leading-[1.03] tracking-[-0.045em] text-nicola-navy sm:text-6xl lg:text-7xl">
            Identidade segura.

            <span className="block text-nicola-orange">
              Negócios mais ágeis.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            Conectamos pessoas, acessos e tecnologias para reduzir riscos,
            fortalecer a governança e proteger o que realmente importa para
            sua organização.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-nicola-orange px-7 py-4 font-semibold text-nicola-navy transition hover:-translate-y-0.5 hover:bg-nicola-orange-light"
            >
              Fale com um especialista
              <ArrowRight size={18} />
            </a>

            <a
              href="#solucoes"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-4 font-semibold text-nicola-navy transition hover:-translate-y-0.5 hover:border-nicola-orange hover:text-nicola-orange-dark"
            >
              Conheça nossas soluções
            </a>
          </div>

          <div className="mt-10 flex flex-col gap-3">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-3 text-sm font-medium text-slate-600"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-nicola-orange/15 text-nicola-orange-dark">
                  <Check size={14} strokeWidth={3} />
                </span>

                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Ilustração animada */}
        <div className="relative mx-auto flex w-full max-w-[640px] items-center justify-center">
          <div
            aria-hidden="true"
            className="absolute inset-[15%] rounded-full bg-nicola-orange/15 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute inset-[22%] rounded-full bg-white/80 blur-2xl"
          />

          <div className="relative w-full">
            <IdentityOrchestrationVisual />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero