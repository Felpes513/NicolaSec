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
    indicators: ['Credenciais', 'Sessões', 'MFA', 'Auditoria'],
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
    indicators: ['Governança', 'Riscos', 'Compliance', 'Controles'],
  },
]

function Solutions() {
  const [activeSolution, setActiveSolution] = useState('iam')

  const selectedSolution =
    solutions.find((solution) => solution.id === activeSolution) ?? solutions[0]

  const SelectedIcon = selectedSolution.icon

  function handleKeyboardNavigation(event, currentIndex) {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') {
      return
    }

    event.preventDefault()

    const direction = event.key === 'ArrowRight' ? 1 : -1
    const nextIndex =
      (currentIndex + direction + solutions.length) % solutions.length

    const nextSolution = solutions[nextIndex]

    setActiveSolution(nextSolution.id)

    document
      .getElementById(`solution-tab-${nextSolution.id}`)
      ?.focus()
  }

  return (
    <section
      id="solucoes"
      className="relative overflow-hidden bg-nicola-navy py-16 text-white sm:py-20 lg:py-28"
    >
      {/* Elementos decorativos */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-52 top-24 h-80 w-80 rounded-full bg-nicola-orange/10 blur-3xl sm:h-96 sm:w-96"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl sm:h-96 sm:w-96"
      />

      <div className="container-nicola relative">
        {/* Cabeçalho */}
        <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-nicola-orange">
            Nossas soluções
          </span>

          <h2 className="mt-4 text-balance text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl lg:text-5xl">
            Segurança centrada em identidades
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8 lg:mx-0">
            Unimos tecnologia, processos e conhecimento especializado para
            proteger cada identidade e cada acesso da sua organização.
          </p>
        </div>

        {/* Abas */}
        <div className="-mx-4 mt-10 overflow-x-auto px-4 pb-3 sm:mx-0 sm:mt-12 sm:overflow-visible sm:px-0 sm:pb-0">
          <div
            className="flex min-w-max snap-x snap-mandatory gap-3 sm:grid sm:min-w-0 sm:grid-cols-3"
            role="tablist"
            aria-label="Soluções da NicolaSec"
          >
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              const isActive = activeSolution === solution.id

              return (
                <button
                  key={solution.id}
                  id={`solution-tab-${solution.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="solution-panel"
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveSolution(solution.id)}
                  onKeyDown={(event) =>
                    handleKeyboardNavigation(event, index)
                  }
                  className={[
                    'flex min-w-68 snap-start items-center gap-4',
                    'rounded-2xl border p-4 text-left',
                    'transition duration-300 sm:min-w-0 sm:p-5',
                    isActive
                      ? 'border-nicola-orange bg-nicola-orange text-nicola-navy'
                      : 'border-white/10 bg-white/4 text-white hover:border-white/25 hover:bg-white/[0.07]',
                  ].join(' ')}
                >
                  <span
                    className={[
                      'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl sm:h-12 sm:w-12',
                      isActive
                        ? 'bg-nicola-navy text-nicola-orange'
                        : 'bg-white/10 text-nicola-orange',
                    ].join(' ')}
                  >
                    <Icon size={23} />
                  </span>

                  <span className="min-w-0">
                    <strong className="block text-base sm:text-lg">
                      {solution.acronym}
                    </strong>

                    <span
                      className={[
                        'mt-1 block text-xs leading-5',
                        isActive
                          ? 'text-nicola-navy/70'
                          : 'text-slate-400',
                      ].join(' ')}
                    >
                      {solution.title}
                    </span>
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Conteúdo da solução selecionada */}
        <div
          id="solution-panel"
          role="tabpanel"
          aria-labelledby={`solution-tab-${selectedSolution.id}`}
          className="mt-5 grid overflow-hidden rounded-3xl border border-white/10 bg-white/4 sm:mt-6 sm:rounded-4xl lg:grid-cols-[1.05fr_0.95fr]"
        >
          {/* Informações */}
          <div
            key={selectedSolution.id}
            className="p-6 sm:p-10 lg:p-14"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-nicola-orange/15 text-nicola-orange sm:h-14 sm:w-14">
              <SelectedIcon size={27} />
            </div>

            <p className="mt-6 text-xs font-bold uppercase leading-5 tracking-[0.14em] text-nicola-orange sm:mt-7 sm:text-sm sm:tracking-[0.18em]">
              {selectedSolution.title}
            </p>

            <h3 className="mt-4 max-w-xl text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
              {selectedSolution.headline}
            </h3>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              {selectedSolution.description}
            </p>

            <div className="mt-7 grid gap-4 sm:mt-8 sm:grid-cols-2">
              {selectedSolution.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 text-sm leading-6 text-slate-200"
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
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border border-nicola-orange/30 px-5 py-3.5 font-semibold text-nicola-orange transition duration-300 hover:border-nicola-orange hover:bg-nicola-orange hover:text-nicola-navy sm:mt-9 sm:w-auto"
            >
              Conversar com um especialista
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Painel visual */}
          <div className="relative flex min-h-92 items-center justify-center overflow-hidden border-t border-white/10 bg-[#080f25] p-5 sm:min-h-108 sm:p-8 lg:min-h-120 lg:border-l lg:border-t-0">
            <div
              aria-hidden="true"
              className="absolute h-64 w-64 rounded-full border border-nicola-orange/10 sm:h-80 sm:w-80"
            />

            <div
              aria-hidden="true"
              className="absolute h-48 w-48 rounded-full border border-nicola-orange/20 sm:h-60 sm:w-60"
            />

            <div
              aria-hidden="true"
              className="absolute h-36 w-36 rounded-full bg-nicola-orange/10 blur-xl sm:h-40 sm:w-40"
            />

            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-px w-[75%] -translate-x-1/2 bg-linear-to-r from-transparent via-nicola-orange/30 to-transparent"
            />

            <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border border-nicola-orange/40 bg-nicola-orange text-nicola-navy shadow-[0_0_80px_rgba(255,159,47,0.25)] sm:h-32 sm:w-32">
              <SelectedIcon
                size={44}
                strokeWidth={1.6}
                className="sm:h-13 sm:w-13"
              />
            </div>

            {selectedSolution.indicators.map((indicator, index) => {
              const positions = [
                'left-4 top-6 sm:left-12 sm:top-10',
                'right-4 top-16 sm:right-12 sm:top-20',
                'bottom-16 left-4 sm:bottom-12 sm:left-14',
                'bottom-6 right-4 sm:bottom-8 sm:right-12',
              ]

              return (
                <div
                  key={indicator}
                  className={[
                    'absolute',
                    positions[index],
                    'flex max-w-36 items-center gap-2 rounded-xl',
                    'border border-white/10 bg-white/[0.07]',
                    'px-3 py-2 text-xs font-medium text-slate-200',
                    'backdrop-blur-md sm:max-w-none sm:px-4 sm:py-3 sm:text-sm',
                  ].join(' ')}
                >
                  <ShieldCheck
                    size={16}
                    className="shrink-0 text-nicola-orange"
                  />

                  <span>{indicator}</span>
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