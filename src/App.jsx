import { useEffect, useRef, useState } from "react";
import { experience, profile, projects } from "./content";
import { waitForIntro } from "./ready";

const copy = {
  es: {
    skip: "Saltar al contenido",
    loading: "Preparando portfolio",
    enter: "Entrar",
    philosophy: (
      <>
        Ideas claras.
        <br />
        Software con intención.
      </>
    ),
    menu: "Menú",
    close: "Cerrar",
    home: "Inicio",
    work: "Proyectos",
    about: "Sobre mí",
    contact: "Contacto",
    introduction: "METRICA · Ingeniería con IA",
    discipline: "(Ingeniería, IA & producto)",
    headline: [
      "Construyo software.",
      "Doy forma a ideas.",
      "Dirijo Gouka Studio.",
    ],
    selected: (
      <>
        Una selección <br />
        de mi trabajo
      </>
    ),
    selection: "Trabajo seleccionado",
    projectsWorkedOn: "proyectos en los que he trabajado",
    selectedFrom: "de",
    explore: "Explorar trabajo",
    more: "Conoce mi trayectoria",
    index: "Índice de proyectos",
    navigation: "Navegación entre proyectos",
    back: "Volver al inicio",
    companyOverview: "El estudio",
    focus: "Enfoque",
    overview: "El proyecto",
    contribution: "Mi aportación",
    stack: "Tecnologías",
    visit: "Visitar web",
    prev: "Proyecto anterior",
    next: "Siguiente proyecto",
    profileNote: "Perfil profesional",
    practice: [
      ["Ingeniería", "Full stack · Angular / Spring Boot"],
      ["IA aplicada", "Ingeniería de software · METRICA"],
      ["Dirección", "Producto digital · Gouka Studio"],
    ],
    aboutHeading: (
      <>
        Criterio para pensar.
        <br />
        Oficio para construir.
      </>
    ),
    background: "Trayectoria",
    approach: "De la interfaz al sistema.",
    aboutText:
      "Conecto diseño de interfaces, arquitectura y desarrollo full stack. En mis productos trabajo con Angular y Spring Boot; en METRICA, con ingeniería asistida por IA; y en Gouka Studio dirijo el desarrollo de producto digital.",
    capabilities: "Áreas de trabajo",
    services: [
      "Interfaces & sistemas de diseño",
      "Arquitectura & desarrollo full stack",
      "Productos SaaS & automatización",
      "IA aplicada & herramientas editoriales",
    ],
    connect: "Una buena conversación es un buen comienzo.",
    contactHeading: (
      <>
        ¿Y si construimos
        <br />
        algo que importe?
      </>
    ),
    contactText:
      "Para un proyecto, una colaboración o una idea que todavía está tomando forma.",
    elsewhere: "También por aquí",
    copied: "Correo copiado",
    copy: "Copiar correo",
    copyFailed: "Puedes seleccionar y copiar el correo de arriba.",
  },
  en: {
    skip: "Skip to content",
    loading: "Preparing portfolio",
    enter: "Enter",
    philosophy: (
      <>
        Clear ideas.
        <br />
        Intentional software.
      </>
    ),
    menu: "Menu",
    close: "Close",
    home: "Home",
    work: "Projects",
    about: "About",
    contact: "Contact",
    introduction: "METRICA · AI engineering",
    discipline: "(Engineering, AI & product)",
    headline: ["I build software.", "I shape ideas.", "I lead Gouka Studio."],
    selected: (
      <>
        A selection <br />
        of my work
      </>
    ),
    selection: "Selected work",
    projectsWorkedOn: "projects I've worked on",
    selectedFrom: "of",
    explore: "Explore work",
    more: "Explore my background",
    index: "Project index",
    navigation: "Project navigation",
    back: "Back to home",
    companyOverview: "The studio",
    focus: "Focus",
    overview: "The project",
    contribution: "My contribution",
    stack: "Technologies",
    visit: "Visit website",
    prev: "Previous project",
    next: "Next project",
    profileNote: "Professional profile",
    practice: [
      ["Engineering", "Full stack · Angular / Spring Boot"],
      ["Applied AI", "Software engineering · METRICA"],
      ["Leadership", "Digital product · Gouka Studio"],
    ],
    aboutHeading: (
      <>
        Thoughtful decisions.
        <br />
        Careful execution.
      </>
    ),
    background: "Experience",
    approach: "From interface to system.",
    aboutText:
      "I connect interface design, architecture and full-stack development. My products use Angular and Spring Boot; at METRICA I work with AI-assisted engineering; and at Gouka Studio I lead digital product development.",
    capabilities: "Areas of work",
    services: [
      "Interfaces & design systems",
      "Architecture & full-stack development",
      "SaaS products & automation",
      "Applied AI & editorial tools",
    ],
    connect: "A good conversation is a good place to start.",
    contactHeading: (
      <>
        What if we build
        <br />
        something that matters?
      </>
    ),
    contactText:
      "For a project, a collaboration or an idea that is still taking shape.",
    elsewhere: "Elsewhere",
    copied: "Email copied",
    copy: "Copy email",
    copyFailed: "You can select and copy the email address above.",
  },
};

function readRoute() {
  const [view, project] = window.location.hash.slice(1).split("/");
  return {
    view: ["work", "about", "contact"].includes(view) ? view : "home",
    project: projects.some((item) => item.id === project)
      ? project
      : projects[0].id,
  };
}

function readLanguage() {
  try {
    return localStorage.getItem("portfolio-language") === "en" ? "en" : "es";
  } catch {
    return "es";
  }
}

function App() {
  const [language, setLanguage] = useState(readLanguage);
  const [route, setRoute] = useState(readRoute);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copyState, setCopyState] = useState("");
  const [intro, setIntro] = useState(() =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "done"
      : "loading",
  );
  const menuRef = useRef(null);
  const mainRef = useRef(null);
  const copyTimer = useRef(null);
  const previousView = useRef(route.view);
  const c = copy[language];
  const activeIndex = projects.findIndex((item) => item.id === route.project);
  const activeProject = projects[activeIndex];
  const companySelected = activeProject.kind === "company";
  const totalWorks = String(projects.length).padStart(2, "0");
  const loading = intro === "loading";

  useEffect(() => {
    if (intro === "done") return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const skipMotion = () => {
      if (preference.matches) setIntro("done");
    };
    preference.addEventListener("change", skipMotion);
    if (intro === "leaving") {
      if (document.activeElement?.closest(".intro-screen"))
        mainRef.current?.focus();
      const timer = window.setTimeout(() => setIntro("done"), 480);
      return () => {
        window.clearTimeout(timer);
        preference.removeEventListener("change", skipMotion);
      };
    }
    let cancelled = false;
    waitForIntro(document).then(() => {
      if (!cancelled) setIntro("leaving");
    });
    return () => {
      cancelled = true;
      preference.removeEventListener("change", skipMotion);
    };
  }, [intro]);

  useEffect(() => {
    document.body.classList.toggle("intro-is-loading", intro === "loading");
    return () => document.body.classList.remove("intro-is-loading");
  }, [intro]);

  useEffect(() => {
    if (
      loading ||
      !window.IntersectionObserver ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const targets = [...mainRef.current.querySelectorAll(".scroll-reveal")];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (!isIntersecting) return;
          target.classList.remove("reveal-pending");
          target.classList.add("is-revealed");
          observer.unobserve(target);
        });
      },
      { threshold: 0.08 },
    );
    targets.forEach((target) => {
      if (target.getBoundingClientRect().top < window.innerHeight) return;
      target.classList.add("reveal-pending");
      observer.observe(target);
    });
    return () => {
      observer.disconnect();
      targets.forEach((target) =>
        target.classList.remove("reveal-pending", "is-revealed"),
      );
    };
  }, [route.view, loading]);

  useEffect(() => {
    const onHashChange = () => {
      const next = readRoute();
      setRoute(next);
      if (previousView.current !== next.view) {
        window.scrollTo({ top: 0, behavior: "instant" });
        mainRef.current?.focus({ preventScroll: true });
      }
      previousView.current = next.view;
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = `${route.view === "home" ? "Alejandro Nieto" : `${copy[language][route.view]} — Alejandro Nieto`} · Software & Product`;
    try {
      localStorage.setItem("portfolio-language", language);
    } catch {
      /* Storage is optional. */
    }
  }, [language, route.view]);

  useEffect(() => {
    document.body.classList.toggle("menu-is-open", menuOpen);
    return () => document.body.classList.remove("menu-is-open");
  }, [menuOpen]);

  useEffect(() => () => window.clearTimeout(copyTimer.current), []);

  function openMenu() {
    menuRef.current.showModal();
    setMenuOpen(true);
  }
  function closeMenu() {
    menuRef.current.close();
    setMenuOpen(false);
  }

  async function copyEmail() {
    window.clearTimeout(copyTimer.current);
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyState("copied");
    } catch {
      setCopyState("copyFailed");
    }
    copyTimer.current = window.setTimeout(() => setCopyState(""), 4000);
  }

  return (
    <>
      {intro !== "done" && (
        <div
          className={`intro-screen ${intro === "leaving" ? "is-leaving" : ""}`}
          aria-hidden={intro === "leaving" ? true : undefined}
        >
          <div className="intro-header">
            <span>Portfolio / {new Date().getFullYear()}</span>
            <span>Software & Product</span>
          </div>
          <h1 className="intro-name" aria-label={profile.name}>
            <span aria-hidden="true">Alejandro</span>
            <span aria-hidden="true">Nieto.</span>
          </h1>
          <div className="intro-footer">
            <span role="status">
              {c.loading}
              <span className="loading-mark" aria-hidden="true">
                {" "}
                ↗
              </span>
            </span>
            <button
              className="text-link"
              onClick={() => setIntro("leaving")}
              tabIndex={intro === "leaving" ? -1 : 0}
            >
              {c.enter} <span aria-hidden="true">↗</span>
            </button>
          </div>
          <div className="intro-rule" aria-hidden="true" />
        </div>
      )}
      <div
        className={
          intro === "loading" ? "site-content is-loading" : "site-content"
        }
        inert={intro === "loading" ? "" : undefined}
        aria-busy={intro === "loading"}
      >
        <a
          className="skip-link"
          href="#main"
          onClick={(event) => {
            event.preventDefault();
            mainRef.current?.focus();
          }}
        >
          {c.skip}
        </a>
        <div className={`portfolio-sheet view-${route.view}`}>
          <header className="site-header">
            <a
              className="identity"
              href="#home"
              aria-label={`${profile.name} — ${c.home}`}
            >
              {profile.name}
              <br />
              <span>Full Stack Engineer</span>
              <span className="identity-studio">CEO · Gouka Studio</span>
            </a>
            <p className="header-statement">{c.philosophy}</p>
            <div className="header-controls">
              <button
                className="language-switch"
                onClick={() => setLanguage(language === "es" ? "en" : "es")}
                aria-label={
                  language === "es" ? "Switch to English" : "Cambiar a español"
                }
              >
                <span className={language === "es" ? "is-current" : ""}>
                  ES
                </span>
                <span className="language-divider">/</span>
                <span className={language === "en" ? "is-current" : ""}>
                  EN
                </span>
              </button>
              <button
                className="menu-toggle"
                onClick={openMenu}
                aria-haspopup="dialog"
                aria-expanded={menuOpen}
                aria-controls="navigation"
              >
                {c.menu}
                <span className="menu-symbol" aria-hidden="true">
                  +
                </span>
              </button>
            </div>
          </header>
          <main id="main" ref={mainRef} tabIndex={-1}>
            {route.view === "home" && (
              <section
                className="home-page page-enter"
                aria-labelledby="hero-heading"
              >
                <div className="hero-layout">
                  <div className="hero-margin">
                    <span>{c.introduction}</span>
                    <a className="text-link" href="#about">
                      {c.about} <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                  <div className="hero-main">
                    <p className="hero-kicker">{c.discipline}</p>
                    <h1 id="hero-heading">
                      {c.headline.map((line, i) => (
                        <span key={line} className={`hero-line line-${i}`}>
                          {line}
                        </span>
                      ))}
                    </h1>
                  </div>
                </div>
                <div className="home-bottom">
                  <div className="home-notes">
                    <p>{c.selected}</p>
                    <p className="work-counter">
                      <strong>{profile.projectCount}</strong>
                      <span>{c.projectsWorkedOn}</span>
                    </p>
                    <a className="text-link" href="#about">
                      {c.more} <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                  <div className="project-index">
                    <nav aria-label={c.selection}>
                      {projects.map((project, i) => (
                        <a
                          className="index-row"
                          href={`#work/${project.id}`}
                          key={project.id}
                        >
                          <span className="index-number">0{i + 1}</span>
                          <span>{project.title}</span>
                          <span className="index-category">
                            {project.category[language].split(" · ")[0]}
                          </span>
                          <span className="index-arrow" aria-hidden="true">
                            ↗
                          </span>
                        </a>
                      ))}
                    </nav>
                    <a href="#work" className="solid-link">
                      {c.explore}
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                  <div className="practice-note" aria-label={c.profileNote}>
                    {c.practice.map(([label, detail]) => (
                      <p key={label}>
                        <span>{label}</span>
                        <span>{detail}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </section>
            )}
            {route.view === "work" && (
              <section
                className="work-page page-enter"
                aria-labelledby="work-heading"
              >
                <div className="page-toolbar">
                  <h1 id="work-heading">
                    {c.selection}
                    <span className="small-count">
                      ({totalWorks} {c.selectedFrom} {profile.projectCount})
                    </span>
                  </h1>
                  <a className="text-link" href="#home">
                    <span aria-hidden="true">←</span> {c.back}
                  </a>
                </div>
                <div className="gallery-layout">
                  <nav className="gallery-index" aria-label={c.index}>
                    {projects.map((project, i) => (
                      <a
                        key={project.id}
                        href={`#work/${project.id}`}
                        className={`thumbnail-link ${project.id === route.project ? "is-active" : ""}`}
                        aria-current={
                          project.id === route.project ? "true" : undefined
                        }
                        aria-label={`0${i + 1} — ${project.title}`}
                      >
                        <span className="project-number">0{i + 1}</span>
                        <span>{project.title}</span>
                        <span className="project-index-arrow" aria-hidden="true">↗</span>
                      </a>
                    ))}
                  </nav>
                  <div className="gallery-detail" id="project-detail">
                    <header className="project-heading" key={activeProject.id}>
                      <div className="project-heading-top">
                        <span>0{activeIndex + 1} / {totalWorks}</span>
                        <span>{activeProject.status[language]}</span>
                      </div>
                      <h2>{activeProject.title}</h2>
                      <p>{activeProject.category[language]}</p>
                    </header>
                    <div
                      className="project-story scroll-reveal"
                      aria-live="polite"
                      aria-atomic="true"
                    >
                      <div>
                        <h3>
                          {companySelected ? c.companyOverview : c.overview}
                        </h3>
                        <p>{activeProject.description[language]}</p>
                      </div>
                      <div>
                        <h3>{c.contribution}</h3>
                        <p>{activeProject.contribution[language]}</p>
                      </div>
                      <div className="project-stack">
                        <h3>{companySelected ? c.focus : c.stack}</h3>
                        <p>
                          {(companySelected
                            ? activeProject.focus[language]
                            : activeProject.stack
                          ).join(" / ")}
                        </p>
                        {activeProject.href && (
                          <a
                            className="text-link"
                            href={activeProject.href}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {c.visit} <span aria-hidden="true">↗</span>
                          </a>
                        )}
                      </div>
                    </div>
                    <nav className="project-navigation" aria-label={c.navigation}>
                      <a
                        href={`#work/${projects[(activeIndex - 1 + projects.length) % projects.length].id}`}
                        aria-label={c.prev}
                      >
                        <span aria-hidden="true">←</span> {c.prev}
                      </a>
                      <a
                        href={`#work/${projects[(activeIndex + 1) % projects.length].id}`}
                        aria-label={c.next}
                      >
                        {c.next} <span aria-hidden="true">→</span>
                      </a>
                    </nav>
                  </div>
                </div>
              </section>
            )}
            {route.view === "about" && (
              <section
                className="about-page page-enter"
                aria-labelledby="about-heading"
              >
                <div className="page-toolbar">
                  <span>
                    {c.about} <span className="small-count">(02)</span>
                  </span>
                  <a className="text-link" href="#home">
                    <span aria-hidden="true">←</span> {c.back}
                  </a>
                </div>
                <div className="about-intro editorial-row">
                  <div className="section-label">
                    {profile.name}
                    <br />
                    Full Stack Engineer & CEO
                  </div>
                  <div>
                    <h1 id="about-heading">{c.aboutHeading}</h1>
                    <p className="bio-lead">{profile.bio[language]}</p>
                  </div>
                </div>
                <div className="editorial-row experience-section scroll-reveal">
                  <h2 className="section-label">{c.background}</h2>
                  <div className="experience-list">
                    {experience.map((job) => (
                      <article key={job.company} className="experience-item">
                        <p className="experience-year">
                          {job.period[language]}
                        </p>
                        <h3 className="experience-company">{job.company}</h3>
                        <div className="experience-focus">
                          <p>{job.role}</p>
                          <p>{job.summary[language]}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
                <div className="editorial-row approach-section scroll-reveal">
                  <h2 className="section-label">{c.approach}</h2>
                  <div className="approach-columns">
                    <p>{c.aboutText}</p>
                    <div>
                      <h3>{c.capabilities}</h3>
                      <ul className="capabilities">
                        {c.services.map((service) => (
                          <li key={service}>{service}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <a className="about-contact scroll-reveal" href="#contact">
                  {c.connect}
                  <span aria-hidden="true">↗</span>
                </a>
              </section>
            )}
            {route.view === "contact" && (
              <section
                className="contact-page page-enter"
                aria-labelledby="contact-heading"
              >
                <div className="page-toolbar">
                  <span>
                    {c.contact} <span className="small-count">(03)</span>
                  </span>
                  <a className="text-link" href="#home">
                    <span aria-hidden="true">←</span> {c.back}
                  </a>
                </div>
                <div className="contact-body editorial-row">
                  <p className="section-label">{c.connect}</p>
                  <div>
                    <h1 id="contact-heading">{c.contactHeading}</h1>
                    <p className="contact-description">{c.contactText}</p>
                    <a
                      className="contact-email"
                      href={`mailto:${profile.email}`}
                    >
                      {profile.email}
                      <span aria-hidden="true">↗</span>
                    </a>
                    <div className="copy-line">
                      <button className="text-link" onClick={copyEmail}>
                        {c.copy} <span aria-hidden="true">⧉</span>
                      </button>
                      <span role="status">{copyState && c[copyState]}</span>
                    </div>
                  </div>
                </div>
                <div className="contact-bottom editorial-row scroll-reveal">
                  <span className="section-label">{c.elsewhere}</span>
                  <div className="contact-links">
                    <a href={profile.linkedin} target="_blank" rel="noreferrer">
                      LinkedIn <span aria-hidden="true">↗</span>
                    </a>
                    <a href={profile.github} target="_blank" rel="noreferrer">
                      GitHub <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>
              </section>
            )}
          </main>
          <footer className="site-footer">
            <span>© {new Date().getFullYear()} Alejandro Nieto</span>
            <nav
              aria-label={
                language === "es" ? "Navegación del pie" : "Footer navigation"
              }
            >
              {["home", "work", "about", "contact"].map((view) => (
                <a
                  href={`#${view}`}
                  aria-current={route.view === view ? "page" : undefined}
                  key={view}
                >
                  {c[view]}
                </a>
              ))}
            </nav>
          </footer>
        </div>
        <dialog
          ref={menuRef}
          id="navigation"
          className="navigation-dialog"
          aria-label={c.menu}
          onClose={() => setMenuOpen(false)}
          onClick={(event) => {
            if (event.target === event.currentTarget) closeMenu();
          }}
        >
          <div className="navigation-inner">
            <div className="navigation-header">
              <span>
                {profile.name}
                <br />
                Software & Product
              </span>
              <button className="menu-toggle" onClick={closeMenu}>
                {c.close}
                <span className="menu-symbol" aria-hidden="true">
                  ×
                </span>
              </button>
            </div>
            <nav className="main-navigation" aria-label={c.menu}>
              {["home", "work", "about", "contact"].map((view, i) => (
                <a
                  key={view}
                  href={`#${view}`}
                  onClick={closeMenu}
                  aria-current={route.view === view ? "page" : undefined}
                >
                  <span className="nav-number">0{i + 1}</span>
                  <span>{c[view]}</span>
                  <span className="nav-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              ))}
            </nav>
            <div className="navigation-footer">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default App;
