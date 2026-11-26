"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";
import styles from "./page.module.css";

const RESUME_URL = "/documents/Elijah_Ballou_Resume_CV_2026.pdf";
const LINKEDIN_URL = "https://www.linkedin.com/in/elijah-ballou-a0574914b/";
const GITHUB_URL = "https://github.com/ElijahBallou";
const EMAIL = "elbal1@morgan.edu";

/* ---------------------------------------------------------------
   Publications, APA 7th edition.
   `source` is split so the container title can be italicised:
   [text before, italic title, text after].
---------------------------------------------------------------- */

type Publication = {
  year: string;
  topic: string;
  authors: string;
  title: string;
  source: [string, string, string];
  doi: string;
};

const publications: Publication[] = [
  {
    year: "2025",
    topic: "Brain-computer interfaces · Accessible gaming",
    authors:
      "Odunze, O., Ballou, E., Kanu, A., Kelly, A., Void, E., & Mack, N. A.",
    title:
      "Inclusive gaming through brain-computer interfaces: The Mind Mastery experience.",
    source: [
      "In T. Z. Ahram, W. Karwowski, & P.-L. Rau (Eds.), ",
      "Human-computer interaction & emerging technologies",
      " (Vol. 195). AHFE International.",
    ],
    doi: "https://doi.org/10.54941/ahfe1006255",
  },
  {
    year: "2025",
    topic: "Programming education · AI tutoring",
    authors: "Ballou, E., Odunze, O., Adeleke, M., & Mack, N. A.",
    title: "PyPro: Think in code. Grow in logic!",
    source: [
      "In T. Z. Ahram, W. Karwowski, & P.-L. Rau (Eds.), ",
      "Human-computer interaction & emerging technologies",
      " (Vol. 195). AHFE International.",
    ],
    doi: "https://doi.org/10.54941/ahfe1006251",
  },
  {
    year: "2025",
    topic: "AI in education · Co-design",
    authors:
      "Mack, N. A., Tandjong, C. W., Adeleke, M. B., Ballou, E., Harry, A., & Panton, J.",
    title:
      "Revolutionizing culturally relevant math education through AI and co-designing strategies.",
    source: [
      "In ",
      "Proceedings of the Extended Abstracts of the CHI Conference on Human Factors in Computing Systems",
      " (pp. 1–6). Association for Computing Machinery.",
    ],
    doi: "https://doi.org/10.1145/3706599.3719835",
  },
  {
    year: "2024",
    topic: "Computer science education · Broadening participation",
    authors:
      "Mack, N. A., Adeleke, M. B., Ballou, E., Davis, D., Ingram, V., & Cox, K.",
    title: "Breaking stereotypes and feeding the STEM pipeline.",
    source: [
      "In B. Stephenson, J. A. Stone, L. Battestilli, S. A. Rebelsky, & L. Shoop (Eds.), ",
      "Proceedings of the 55th ACM Technical Symposium on Computer Science Education",
      " (Vol. 1, pp. 771–777). Association for Computing Machinery.",
    ],
    doi: "https://doi.org/10.1145/3626252.3630793",
  },
  {
    year: "2024",
    topic: "Computing education · Robotics",
    authors:
      "Mack, N. A., Adeleke, M. B., Ingram, V., Ballou, E., Briggs-Belt, J. K., & Jordan, A.",
    title:
      "CodeBears: Key insights gained from a summer coding camp empowering underrepresented youth.",
    source: [
      "In ",
      "2024 Black Issues in Computing Education (BICE)",
      " (pp. 80–86). IEEE.",
    ],
    doi: "https://doi.org/10.1109/BICE60192.2024.00021",
  },
  {
    year: "2024",
    topic: "Virtual reality · Mental health",
    authors: "Meekins, S., Ballou, E., & Mack, N. A.",
    title:
      "Dreadphobia: Evaluating the usability of a virtual reality application in support of mental health.",
    source: [
      "In C. Stephanidis, M. Antona, S. Ntoa, & G. Salvendy (Eds.), ",
      "HCI International 2023 – Late breaking posters",
      " (Communications in Computer and Information Science, Vol. 1957, pp. 397–402). Springer Nature Switzerland.",
    ],
    doi: "https://doi.org/10.1007/978-3-031-49212-9_49",
  },
];

const OWN_NAME = "Ballou, E.";

function Authors({ text }: { text: string }) {
  const parts = text.split(OWN_NAME);
  return (
    <>
      {parts.map((part, index) => (
        <span key={index}>
          {part}
          {index < parts.length - 1 && <strong>{OWN_NAME}</strong>}
        </span>
      ))}
    </>
  );
}

/* ---------------------------------------------------------------
   Hero signal field: layered EEG-style waves that lean toward
   the pointer. Draws a single still frame when the visitor
   prefers reduced motion.
---------------------------------------------------------------- */

function SignalField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let frame = 0;
    let animation = 0;
    const pointer = { x: 0.62, y: 0.5, active: 0 };
    const target = { x: 0.62, y: 0.5, active: 0 };

    const waves = [
      { color: "22, 136, 255", alpha: 0.55, amp: 0.07, freq: 2.2, speed: 0.012, offset: 0.34 },
      { color: "95, 227, 210", alpha: 0.45, amp: 0.05, freq: 3.4, speed: 0.018, offset: 0.46 },
      { color: "22, 136, 255", alpha: 0.28, amp: 0.09, freq: 1.4, speed: 0.008, offset: 0.58 },
      { color: "160, 182, 255", alpha: 0.22, amp: 0.04, freq: 5.1, speed: 0.024, offset: 0.7 },
      { color: "95, 227, 210", alpha: 0.18, amp: 0.06, freq: 2.8, speed: 0.014, offset: 0.82 },
    ];

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const draw = () => {
      pointer.x += (target.x - pointer.x) * 0.06;
      pointer.y += (target.y - pointer.y) * 0.06;
      pointer.active += (target.active - pointer.active) * 0.05;

      context.clearRect(0, 0, width, height);

      waves.forEach((wave, waveIndex) => {
        context.beginPath();
        const baseY = wave.offset * height;

        for (let x = 0; x <= width; x += 4) {
          const t = x / width;
          const distance = Math.abs(t - pointer.x);
          const focus = Math.exp(-distance * distance * 18) * pointer.active;
          const spike =
            Math.sin(t * 60 + frame * wave.speed * 9 + waveIndex) *
            focus *
            0.035;
          const y =
            baseY +
            (Math.sin(t * Math.PI * wave.freq + frame * wave.speed) * wave.amp +
              Math.sin(t * Math.PI * wave.freq * 2.7 - frame * wave.speed * 1.6) *
                wave.amp *
                0.35 +
              spike) *
              height *
              (1 + focus * 1.4) +
            (pointer.y - 0.5) * focus * height * 0.18;

          if (x === 0) context.moveTo(x, y);
          else context.lineTo(x, y);
        }

        context.strokeStyle = `rgba(${wave.color}, ${wave.alpha})`;
        context.lineWidth = waveIndex === 0 ? 1.6 : 1.1;
        context.stroke();
      });

      frame += 1;
      if (!reduceMotion) animation = requestAnimationFrame(draw);
    };

    const onMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      target.x = (event.clientX - rect.left) / rect.width;
      target.y = (event.clientY - rect.top) / rect.height;
      target.active =
        event.clientY >= rect.top && event.clientY <= rect.bottom ? 1 : 0;
    };

    const onLeave = () => {
      target.active = 0;
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    if (!reduceMotion) {
      window.addEventListener("pointermove", onMove);
      document.addEventListener("pointerleave", onLeave);
    }

    return () => {
      cancelAnimationFrame(animation);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.signalField} aria-hidden="true" />;
}

/* ---------------------------------------------------------------
   Project rooms
---------------------------------------------------------------- */

function Tags({ items }: { items: string[] }) {
  return (
    <ul className={styles.tags} aria-label="Tools and topics">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function ProjectText({
  kicker,
  title,
  role,
  children,
  tags,
  link,
}: {
  kicker: string;
  title: string;
  role: string;
  children: ReactNode;
  tags: string[];
  link?: { href: string; label: string };
}) {
  return (
    <div className={styles.projectText}>
      <p className={styles.projectKicker}>{kicker}</p>
      <h3 className={styles.projectTitle}>{title}</h3>
      <p className={styles.projectRole}>{role}</p>
      <p className={styles.projectDescription}>{children}</p>
      <Tags items={tags} />
      {link && (
        <a
          className={styles.projectLink}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.label}
        </a>
      )}
    </div>
  );
}

function MindMasteryVisual() {
  // Four EEG channels named after the Muse 2 electrode sites.
  const channels = ["TP9", "AF7", "AF8", "TP10"];
  return (
    <div className={styles.eegVisual} aria-hidden="true">
      {channels.map((channel, index) => (
        <div className={styles.eegChannel} key={channel}>
          <span>{channel}</span>
          <svg viewBox="0 0 400 40" preserveAspectRatio="none">
            <path
              d={buildTrace(index)}
              style={{ animationDelay: `${index * -1.3}s` } as CSSProperties}
            />
          </svg>
        </div>
      ))}
      <p className={styles.eegReadout}>
        Blink detected <span>→ jump</span>
      </p>
    </div>
  );
}

function buildTrace(seed: number) {
  // Periodic over 400 units so the scrolling loop is seamless.
  const tau = (Math.PI * 2) / 400;
  let path = "";
  for (let x = 0; x <= 800; x += 5) {
    const phase = x * tau;
    const spike = Math.exp(-Math.pow(((x + seed * 90) % 200) - 100, 2) / 18) * -13;
    const y =
      20 +
      Math.sin(phase * 3 + seed) * 5 +
      Math.sin(phase * 11 + seed * 2.1) * 2.5 +
      spike;
    path += `${x === 0 ? "M" : " L"}${x} ${y.toFixed(1)}`;
  }
  return path;
}

function NightLightVisual() {
  const ref = useRef<HTMLDivElement>(null);

  const move = (event: ReactPointerEvent<HTMLDivElement>) => {
    const element = ref.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    element.style.setProperty("--lx", `${event.clientX - rect.left}px`);
    element.style.setProperty("--ly", `${event.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      className={styles.nightVisual}
      onPointerMove={move}
      aria-hidden="true"
    >
      <div className={styles.nightScene}>
        <span className={styles.nightDoor} />
        <span className={styles.nightEyes}>
          <i />
          <i />
        </span>
        <span className={styles.nightFloor} />
      </div>
      <div className={styles.nightDark} />
      <p className={styles.nightHint}>Move your light</p>
    </div>
  );
}

const pyproLines = [
  { code: "def greet(name):", tone: "kw" },
  { code: '    return f"Hi, {name}!"', tone: "str" },
  { code: "", tone: "" },
  { code: 'print(greet("Maya"))', tone: "fn" },
];

function PyProVisual() {
  return (
    <div className={styles.pyproVisual} aria-hidden="true">
      <div className={styles.pyproWindow}>
        <div className={styles.pyproBar}>
          <i />
          <i />
          <i />
          <span>lesson_04.py</span>
        </div>
        <pre className={styles.pyproCode}>
          {pyproLines.map((line, index) => (
            <span
              key={index}
              className={line.tone ? styles[`tone_${line.tone}`] : undefined}
              style={{ animationDelay: `${0.4 + index * 0.5}s` } as CSSProperties}
            >
              {line.code || " "}
            </span>
          ))}
        </pre>
        <p className={styles.pyproOutput}>Hi, Maya!</p>
      </div>
      <div className={styles.pyproTutor}>
        <strong>AI tutor</strong>
        Nice. Now try returning the greeting in all caps.
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------
   Page
---------------------------------------------------------------- */

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? window.scrollY / max : 0;
      progressRef.current?.style.setProperty("--progress", ratio.toString());
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { href: "#work", label: "Work" },
    { href: "#publications", label: "Publications" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className={styles.page}>
      <a href="#main" className={styles.skipLink}>
        Skip to content
      </a>

      <div ref={progressRef} className={styles.progress} aria-hidden="true" />

      <header
        className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}
      >
        <a href="#top" className={styles.brand} aria-label="Elijah Ballou, home">
          Elijah Ballou
        </a>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        <nav
          id="site-nav"
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
          aria-label="Main"
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.navResume}
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </a>
        </nav>
      </header>

      <main id="main">
        {/* ============ HERO ============ */}
        <section id="top" className={styles.hero}>
          <SignalField />

          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <p className={styles.heroIntro}>
                Developer and researcher at Morgan State University
              </p>

              <h1 className={styles.heroTitle}>
                I build interfaces you can feel,
                <span className={styles.heroTitleLine}>
                  from brain signals to virtual worlds.
                </span>
              </h1>

              <p className={styles.heroLede}>
                I design and study interactive systems across brain-computer
                interfaces, extended reality, games, and AI for learning, with
                six peer-reviewed publications in HCI and computing education.
              </p>

              <div className={styles.heroActions}>
                <a href="#work" className={styles.buttonPrimary}>
                  See my work
                </a>
                <a href="#publications" className={styles.buttonGhost}>
                  Read the research
                </a>
              </div>
            </div>

            <figure className={styles.heroPortrait}>
              <div className={styles.portraitFrame}>
                <Image
                  src="/images/elijah-portrait.png"
                  alt="Portrait of Elijah Ballou"
                  fill
                  priority
                  sizes="(max-width: 900px) 80vw, 34vw"
                  className={styles.portraitImage}
                />
              </div>
              <figcaption>
                <span className={styles.liveDot} aria-hidden="true" />
                Based in Baltimore, Maryland
              </figcaption>
            </figure>
          </div>

          <ul className={styles.focusStrip} aria-label="Focus areas">
            <li>Brain-computer interfaces</li>
            <li>Extended reality</li>
            <li>Human-computer interaction</li>
            <li>Game development</li>
            <li>AI in education</li>
          </ul>
        </section>

        {/* ============ WORK ============ */}
        <section id="work" className={styles.work} aria-labelledby="work-title">
          <div className={styles.sectionHead}>
            <h2 id="work-title" className={styles.sectionTitle}>
              Selected work
            </h2>
            <p className={styles.sectionLede}>
              Three projects, three kinds of interaction: thinking, surviving,
              and learning to code. Hover or touch each one to try it.
            </p>
          </div>

          <article className={`${styles.room} ${styles.roomMind}`}>
            <MindMasteryVisual />
            <ProjectText
              kicker="Brain-computer interface game"
              title="Mind Mastery"
              role="Co-lead developer"
              tags={["Unity", "C#", "Python", "Muse 2 EEG", "Accessibility"]}
              link={{
                href: "https://doi.org/10.54941/ahfe1006255",
                label: "Read the AHFE 2025 paper",
              }}
            >
              A hands-free game that makes play accessible. Built in Unity with
              the Muse 2 EEG headset, Mind Mastery turns brain activity,
              intentional blinks, and head movement into real-time controls.
            </ProjectText>
          </article>

          <article className={`${styles.room} ${styles.roomNight}`}>
            <ProjectText
              kicker="First-person horror game"
              title="Night Light"
              role="Lead developer"
              tags={["Unity", "Enemy AI", "Spatial audio", "Controller input"]}
            >
              A survival horror experience built on tension: a monster that
              tracks the player and adapts, environmental audio that tells you
              where it is, and a light you can never fully trust.
            </ProjectText>
            <NightLightVisual />
          </article>

          <article className={`${styles.room} ${styles.roomPy}`}>
            <PyProVisual />
            <ProjectText
              kicker="AI-supported programming education"
              title="PyPro"
              role="Lead author and designer"
              tags={[
                "Python",
                "Conversational AI tutor",
                "Adaptive learning",
                "Gamification",
                "Accessibility",
              ]}
              link={{
                href: "https://doi.org/10.54941/ahfe1006251",
                label: "Read the AHFE 2025 paper",
              }}
            >
              A learning platform that teaches middle school students Python
              through adaptive lesson paths, a conversational AI tutor, and
              game-style challenges, designed accessibility-first so more
              students can build confidence in computer science.
            </ProjectText>
          </article>
        </section>

        {/* ============ PUBLICATIONS ============ */}
        <section
          id="publications"
          className={styles.publications}
          aria-labelledby="pub-title"
        >
          <div className={styles.pubInner}>
            <div className={styles.pubHead}>
              <h2 id="pub-title" className={styles.sectionTitle}>
                Publications
              </h2>
              <p className={styles.sectionLede}>
                Peer-reviewed work in human-computer interaction, brain-computer
                interfaces, virtual reality, and computing education. Listed
                newest first, in APA 7th edition format.
              </p>
            </div>

            <ol className={styles.pubList}>
              {publications.map((pub) => (
                <li key={pub.doi} className={styles.pubItem}>
                  <div className={styles.pubMeta}>
                    <span className={styles.pubYear}>{pub.year}</span>
                    <span className={styles.pubTopic}>{pub.topic}</span>
                  </div>
                  <p className={styles.reference}>
                    <Authors text={pub.authors} /> ({pub.year}). {pub.title}{" "}
                    {pub.source[0]}
                    <em>{pub.source[1]}</em>
                    {pub.source[2]}{" "}
                    <a href={pub.doi} target="_blank" rel="noopener noreferrer">
                      {pub.doi}
                    </a>
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ============ ABOUT ============ */}
        <section id="about" className={styles.about} aria-labelledby="about-title">
          <div className={styles.aboutGrid}>
            <div>
              <h2 id="about-title" className={styles.sectionTitle}>
                About
              </h2>
              <p className={styles.aboutLead}>
                I&apos;m Elijah Ballou, a computer science developer and
                researcher. I want technology to disappear into the
                interaction, so people can focus on what they&apos;re learning,
                feeling, or exploring.
              </p>
              <p className={styles.aboutBody}>
                My work sits where software engineering meets human-centered
                research: EEG-driven games, immersive XR, AI tutors, and
                programs that bring more young people into computing. I also
                teach and mentor as a teaching assistant for game design and
                development.
              </p>
            </div>

            <dl className={styles.skillList}>
              <div>
                <dt>Languages</dt>
                <dd>Python, C#, JavaScript</dd>
              </div>
              <div>
                <dt>XR and games</dt>
                <dd>Unity 3D, Roblox Studio, extended reality</dd>
              </div>
              <div>
                <dt>Web</dt>
                <dd>HTML, CSS, React, Node.js, MongoDB</dd>
              </div>
              <div>
                <dt>Research</dt>
                <dd>BCI, usability studies, co-design, HCI</dd>
              </div>
              <div>
                <dt>Tools</dt>
                <dd>Git, GitHub, VS Code, Blender, Canva</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* ============ CONTACT ============ */}
        <section id="contact" className={styles.contact} aria-labelledby="contact-title">
          <div className={styles.contactInner}>
            <h2 id="contact-title" className={styles.contactTitle}>
              Let&apos;s build what&apos;s next.
            </h2>
            <p className={styles.contactText}>
              I&apos;m open to research collaborations, internships, and roles
              in software, XR, game development, and HCI.
            </p>

            <div className={styles.contactActions}>
              <a href={`mailto:${EMAIL}`} className={styles.buttonPrimary}>
                Email me
              </a>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.buttonGhost}
              >
                View resume
              </a>
              <a
                href={RESUME_URL}
                download="Elijah_Ballou_Resume_CV_2026.pdf"
                className={styles.buttonGhost}
              >
                Download resume (PDF)
              </a>
            </div>

            <ul className={styles.contactLinks}>
              <li>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </li>
              <li>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© 2026 Elijah Ballou</p>
        <a href="#top">Back to top</a>
      </footer>
    </div>
  );
}
