import { useState } from 'react'
import {
  ArrowRight,
  CheckCircle2,
  Fingerprint,
  KeyRound,
  Scale,
  ShieldCheck,
} from 'lucide-react'

const solutions = [
  {
    id: 'iam',
    acronym: 'IAM',
    title: 'Identity and Access Management',
    headline: 'A identidade certa com o acesso certo, no momento certo.',
    description:
      'Centralize o ciclo de vida das identidades, automatize acessos e aumente a visibilidade sobre quem pode acessar cada recurso da organização.',
    icon: Fingerprint,
    features: [
      'Gestão de identidades e perfis',
      'Provisionamento automatizado de acessos',
      'Workflows de solicitação e aprovação',
      'Integração entre RH e acessos lógicos',
    ],
    indicators: [
      'Ciclo de vida',
      'Provisionamento',
      'Revisões',
      'Autosserviço',
    ],
  },
  {
    id: 'pam',
    acronym: 'PAM',
    title: 'Privileged Access Management',
    headline: 'Controle e proteja os acessos mais críticos da empresa.',
    description:
      'Reduza os riscos associados a contas privilegiadas com autenticação robusta, controle de sessões e gestão segura de credenciais.',
    icon: KeyRound,
    features: [
      'Gestão de senhas privilegiadas',
      'Monitoramento de sessões críticas',
      'Autenticação multifator',
      'Proteção de contas administrativas',
    ],
    indicators: [
      'Credenciais',
      'Sessões',
      'MFA',
      'Auditoria',
    ],
  },
  {
    id: 'grc',
    acronym: 'GRC',
    title: 'Governance, Risk and Compliance',
    headline: 'Governança e conformidade integradas à operação.',
    description:
      'Estruture políticas, controles e processos que reduzam riscos, atendam requisitos regulatórios e fortaleçam a tomada de decisão.',
    icon: Scale,
    features: [
      'Segregação de funções — SoD',
      'Adequação à LGPD e ISO 27001',
      'Auditoria e conformidade',
      'Redução de riscos operacionais',
    ],
    indicators: [
      'Governança',
      'Riscos',
      'Compliance',
      'Controles',
    ],
  },
]

function Solutions() {
  const [activeSolution, setActiveSolution] = useState('iam')

  const selectedSolution =
    solutions.find((solution) => solution.id === activeSolution) ?? solutions[0]

  const SelectedIcon = selectedSolution.icon

  return (
    <section
      id="solucoes"
      className="relative overflow-hidden bg-nicola-navy py-24 text-white sm:py-28"
    >
      <div className="absolute -left-52 top-24 h-96 w-96 rounded-full bg-nicola-orange/10 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="container-nicola relative">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-nicola-orange">
            Nossas soluções
          </span>

          <h2 className="mt-4 text-balance text-4xl font-bold leading-tight tracking-[-0.035em] sm:text-5xl">
            Segurança centrada em identidades
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            Unimos tecnologia, processos e conhecimento especializado para
            proteger cada identidade e cada acesso da sua organização.
          </p>
        </div>

        <div
          className="mt-12 grid gap-3 sm:grid-cols-3"
          role="tablist"
          aria-label="Soluções da NicolaSec"
        >
          {solutions.map((solution) => {
            const Icon = solution.icon
            const isActive = activeSolution === solution.id

            return (
              <button
                key={solution.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveSolution(solution.id)}
                className={`flex items-center gap-4 rounded-2xl border p-5 text-left transition duration-300 ${
                  isActive
                    ? 'border-nicola-orange bg-nicola-orange text-nicola-navy'
                    : 'border-white/10 bg-white/[0.04] text-white hover:border-white/25 hover:bg-white/[0.07]'
                }`}
              >
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                    isActive
                      ? 'bg-nicola-navy text-nicola-orange'
                      : 'bg-white/10 text-nicola-orange'
                  }`}
                >
                  <Icon size={24} />
                </span>

                <span>
                  <strong className="block text-lg">{solution.acronym}</strong>

                  <span
                    className={`mt-1 block text-xs ${
                      isActive ? 'text-nicola-navy/70' : 'text-slate-400'
                    }`}
                  >
                    {solution.title}
                  </span>
                </span>
              </button>
            )
          })}
        </div>

        <div className="mt-6 grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-7 sm:p-10 lg:p-14">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-nicola-orange/15 text-nicola-orange">
              <SelectedIcon size={29} />
            </div>

            <p className="mt-7 text-sm font-bold uppercase tracking-[0.18em] text-nicola-orange">
              {selectedSolution.title}
            </p>

            <h3 className="mt-4 max-w-xl text-3xl font-bold leading-tight tracking-[-0.025em] sm:text-4xl">
              {selectedSolution.headline}
            </h3>

            <p className="mt-5 max-w-xl leading-7 text-slate-400">
              {selectedSolution.description}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {selectedSolution.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 text-sm text-slate-200"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-nicola-orange"
                  />

                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="#contato"
              className="mt-9 inline-flex items-center gap-2 font-semibold text-nicola-orange transition hover:gap-3"
            >
              Conversar com um especialista
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="relative flex min-h-[30rem] items-center justify-center overflow-hidden border-t border-white/10 bg-[#080f25] p-8 lg:border-l lg:border-t-0">
            <div className="absolute h-80 w-80 rounded-full border border-nicola-orange/10" />
            <div className="absolute h-60 w-60 rounded-full border border-nicola-orange/20" />
            <div className="absolute h-40 w-40 rounded-full bg-nicola-orange/10 blur-xl" />

            <div className="absolute left-1/2 top-1/2 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-nicola-orange/30 to-transparent" />

            <div className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full border border-nicola-orange/40 bg-nicola-orange text-nicola-navy shadow-[0_0_80px_rgba(255,159,47,0.25)]">
              <SelectedIcon size={52} strokeWidth={1.6} />
            </div>

            {selectedSolution.indicators.map((indicator, index) => {
              const positions = [
                'left-6 top-10 sm:left-12',
                'right-6 top-20 sm:right-12',
                'bottom-12 left-7 sm:left-14',
                'bottom-8 right-6 sm:right-12',
              ]

              return (
                <div
                  key={indicator}
                  className={`absolute ${positions[index]} flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.07] px-4 py-3 text-sm font-medium text-slate-200 backdrop-blur-md`}
                >
                  <ShieldCheck size={17} className="text-nicola-orange" />
                  {indicator}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solutions