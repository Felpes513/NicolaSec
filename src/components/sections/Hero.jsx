import { ArrowRight, Check } from "lucide-react";
import logo from "../../assets/nicolasec-logo.jpeg";
import IdentityOrchestrationVisual from "../ui/IdentityOrchestrationVisual";

const benefits = [
  "Governança de identidades",
  "Proteção de acessos privilegiados",
  "Conformidade e automação",
];

function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-nicola-surface"
    >
      {/* Elementos decorativos de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-24 h-80 w-80 rounded-full bg-nicola-orange/10 blur-3xl sm:h-96 sm:w-96"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-24 h-96 w-96 rounded-full bg-slate-300/30 blur-3xl sm:-right-28 sm:top-10 sm:h-136 sm:w-136"
      />

      {/* Marca-d'água com o logo */}
      <img
        src={logo}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-1/2 hidden w-152 -translate-y-1/2 opacity-[0.04] mix-blend-multiply lg:block"
      />

      <div className="container-nicola relative grid items-center gap-10 py-12 sm:gap-14 sm:py-16 lg:min-h-[calc(100vh-5rem)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-24">
        {/* Conteúdo textual */}
        <div className="relative z-10 text-center lg:text-left">
          {/* Selo */}
          <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-nicola-orange/25 bg-white px-3 py-2 shadow-sm sm:mb-7 sm:px-4">
            <span className="h-2 w-2 shrink-0 rounded-full bg-nicola-orange" />

            <span className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-nicola-graphite sm:text-xs sm:tracking-[0.18em]">
              Especialistas em segurança de identidades
            </span>
          </div>

          {/* Título */}
          <h1 className="mx-auto max-w-4xl text-balance text-[2.65rem] font-bold leading-[1.03] tracking-[-0.045em] text-nicola-navy sm:text-6xl lg:mx-0 lg:text-7xl">
            Identidade segura.

            <span className="block text-nicola-orange">
              Negócios mais ágeis.
            </span>
          </h1>

          {/* Descrição */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:mt-7 sm:text-lg sm:leading-8 lg:mx-0">
            Conectamos pessoas, acessos e tecnologias para reduzir riscos,
            fortalecer a governança e proteger o que realmente importa para sua
            organização.
          </p>

          {/* Botões */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:mt-9 lg:justify-start">
            <a
              href="#contato"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-nicola-orange px-6 py-4 font-semibold text-nicola-navy transition duration-300 hover:-translate-y-0.5 hover:bg-nicola-orange-light sm:w-auto sm:px-7"
            >
              Fale com um especialista
              <ArrowRight size={18} />
            </a>

            <a
              href="#solucoes"
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-4 font-semibold text-nicola-navy transition duration-300 hover:-translate-y-0.5 hover:border-nicola-orange hover:text-nicola-orange-dark sm:w-auto sm:px-7"
            >
              Conheça nossas soluções
            </a>
          </div>

          {/* Benefícios */}
          <div className="mx-auto mt-9 flex max-w-md flex-col items-start gap-3 text-left lg:mx-0 lg:mt-10">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-3 text-sm font-medium text-slate-600 sm:text-base lg:text-sm"
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
        <div className="relative mx-auto mt-2 flex w-full max-w-136 items-center justify-center sm:max-w-152 lg:mt-0 lg:max-w-160">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-[18%] rounded-full bg-nicola-orange/15 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-[25%] rounded-full bg-white/80 blur-2xl"
          />

          <div className="relative w-full">
            <IdentityOrchestrationVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
