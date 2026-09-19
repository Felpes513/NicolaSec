import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/nicolasec-logo.jpeg";

const navigation = [
  {
    label: "Soluções",
    sectionId: "solucoes",
  },
  {
    label: "Serviços",
    sectionId: "servicos",
  },
  {
    label: "Parceiros",
    sectionId: "parceiros",
  },
  {
    label: "Sobre nós",
    sectionId: "sobre",
  },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const scrollFrame = useRef(null);

  useEffect(() => {
    const sectionIds = [...navigation.map((item) => item.sectionId), "contato"];

    const sections = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (firstEntry, secondEntry) =>
              secondEntry.intersectionRatio - firstEntry.intersectionRatio,
          );

        const currentSection = visibleSections[0];

        if (currentSection) {
          setActiveSection(currentSection.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
      if (scrollFrame.current !== null) {
        window.cancelAnimationFrame(scrollFrame.current);
      }
    };
  }, []);

  function handleNavigation(event, sectionId) {
    event.preventDefault();
    setActiveSection(sectionId);
    setMenuOpen(false);

    if (scrollFrame.current !== null) {
      window.cancelAnimationFrame(scrollFrame.current);
    }

    const section = document.getElementById(sectionId);
    if (!section) return;

    window.history.pushState(null, "", `#${sectionId}`);

    const start = window.scrollY;
    const headerHeight = 80;
    const destination = Math.max(
      0,
      Math.min(
        section.getBoundingClientRect().top + start - headerHeight,
        document.documentElement.scrollHeight - window.innerHeight,
      ),
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.scrollTo({ top: destination, behavior: "instant" });
      scrollFrame.current = null;
      return;
    }

    const distance = destination - start;
    const duration = Math.min(1600, Math.max(900, Math.abs(distance) * 0.4));
    let startTime;

    function animate(time) {
      startTime ??= time;
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      window.scrollTo({ top: start + distance * eased, behavior: "instant" });

      if (progress < 1) {
        scrollFrame.current = window.requestAnimationFrame(animate);
      } else {
        scrollFrame.current = null;
      }
    }

    scrollFrame.current = window.requestAnimationFrame(animate);
  }

  function getDesktopLinkClasses(sectionId) {
    const isActive = activeSection === sectionId;

    return [
      "relative py-2 text-sm font-semibold transition-colors duration-300",
      "after:absolute after:bottom-0 after:left-0 after:h-0.5",
      "after:w-full after:origin-center after:rounded-full",
      "after:bg-nicola-orange after:transition-transform",
      "after:duration-300",
      isActive
        ? "text-nicola-orange after:scale-x-100"
        : "text-slate-600 after:scale-x-0 hover:text-nicola-orange hover:after:scale-x-100",
    ].join(" ");
  }

  function getMobileLinkClasses(sectionId) {
    const isActive = activeSection === sectionId;

    return [
      "flex items-center justify-between rounded-xl px-4 py-3",
      "text-base font-semibold transition-colors",
      isActive
        ? "bg-nicola-orange/10 text-nicola-orange-dark"
        : "text-slate-600 hover:bg-slate-50 hover:text-nicola-orange-dark",
    ].join(" ");
  }

  const contactIsActive = activeSection === "contato";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
      <div className="container-nicola flex h-20 items-center justify-between">
        {/* Logo */}
        <a
          href="#inicio"
          className="flex items-center gap-3"
          aria-label="Ir para o início"
          onClick={() => {
            setActiveSection("");
            setMenuOpen(false);
          }}
        >
          <img
            src={logo}
            alt=""
            className="h-12 w-12 rounded-xl object-contain"
          />

          <span className="text-xl font-bold tracking-tight text-nicola-navy">
            Nicola
            <span className="text-nicola-orange">Sec</span>
          </span>
        </a>

        {/* Navegação desktop */}
        <nav
          className="hidden items-center gap-10 lg:flex"
          aria-label="Navegação principal"
        >
          {navigation.map((item) => (
            <a
              key={item.sectionId}
              href={`#${item.sectionId}`}
              className={getDesktopLinkClasses(item.sectionId)}
              aria-current={
                activeSection === item.sectionId ? "location" : undefined
              }
              onClick={(event) => handleNavigation(event, item.sectionId)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <a
          href="#contato"
          onClick={(event) => handleNavigation(event, "contato")}
          className={[
            "hidden items-center justify-center rounded-full px-7 py-3.5",
            "text-sm font-semibold transition duration-300 lg:inline-flex",
            contactIsActive
              ? "bg-nicola-orange text-nicola-navy shadow-lg shadow-nicola-orange/20"
              : "bg-nicola-navy text-white hover:-translate-y-0.5 hover:bg-nicola-orange hover:text-nicola-navy",
          ].join(" ")}
          aria-current={contactIsActive ? "location" : undefined}
        >
          Fale com um especialista
        </a>

        {/* Botão do menu mobile */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-nicola-navy transition hover:border-nicola-orange hover:text-nicola-orange lg:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((currentState) => !currentState)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {/* Navegação mobile */}
      <div
        id="mobile-navigation"
        className={[
          "overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 lg:hidden",
          menuOpen
            ? "max-h-128 opacity-100"
            : "pointer-events-none max-h-0 border-transparent opacity-0",
        ].join(" ")}
      >
        <nav
          className="container-nicola flex flex-col gap-1 py-4"
          aria-label="Navegação mobile"
        >
          {navigation.map((item) => (
            <a
              key={item.sectionId}
              href={`#${item.sectionId}`}
              className={getMobileLinkClasses(item.sectionId)}
              aria-current={
                activeSection === item.sectionId ? "location" : undefined
              }
              onClick={(event) => handleNavigation(event, item.sectionId)}
            >
              {item.label}

              {activeSection === item.sectionId && (
                <span className="h-2 w-2 rounded-full bg-nicola-orange" />
              )}
            </a>
          ))}

          <a
            href="#contato"
            onClick={(event) => handleNavigation(event, "contato")}
            className={[
              "mt-3 flex items-center justify-center rounded-full px-6 py-3.5",
              "font-semibold transition-colors",
              contactIsActive
                ? "bg-nicola-orange text-nicola-navy"
                : "bg-nicola-navy text-white",
            ].join(" ")}
          >
            Fale com um especialista
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
