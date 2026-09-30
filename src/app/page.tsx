"use client";

import Image from "next/image";
import { useEffect } from "react";
import styles from "./page.module.css";

const publications = [
  {
    number: "01",
    year: "2025",
    category: "BCI / HCI / ACCESSIBILITY",
    title:
      "Inclusive Gaming Through Brain-Computer Interfaces: The Mind Mastery Experience",
    authors: "O. Odunze · E. Ballou · A. Kanu · A. Kelly · E. Void",
    venue: "Human-Computer Interaction & Emerging Technologies 195, 363",
    details:
      "Brain-computer interfaces · Accessible gaming · Human-computer interaction",
  },
  {
    number: "02",
    year: "2025",
    category: "AI / HCI / INTELLIGENT TUTORING",
    title:
      "Revolutionizing Culturally Relevant Math Education Through AI and Co-Designing Strategies",
    authors:
      "Naja A. Mack · Clyde W. Tandjong · Michael B. Adeleke · Elijah Ballou · Amyra Harry · Jaunel Panton",
    venue:
      "Extended Abstracts of the CHI Conference on Human Factors in Computing Systems (CHI EA '25) · Yokohama, Japan",
    details:
      "MathWiz · Artificial Intelligence · Adaptive Learning · Culturally Responsive Learning",
    doi: "https://doi.org/10.1145/3706599.3719835",
  },
  {
    number: "03",
    year: "2025",
    category: "COMPUTING EDUCATION / HCI",
    title: "PyPro: Think in Code. Grow in Logic!",
    authors: "E. Ballou · O. Odunze · M. Adeleke · N.A. Mack",
    venue: "Human-Computer Interaction & Emerging Technologies 195, 324",
    details:
      "Computing education · Interactive learning · Human-computer interaction",
  },
  {
    number: "04",
    year: "2024",
    category: "COMPUTING EDUCATION / STEM",
    title: "Breaking Stereotypes and Feeding the STEM Pipeline",
    authors:
      "N.A. Mack · M.B. Adeleke · E. Ballou · D. Davis · V. Ingram · K. Cox",
    venue:
      "Proceedings of the 55th ACM Technical Symposium on Computer Science Education",
    details:
      "STEM education · Computing education · Broadening participation",
  },
  {
    number: "05",
    year: "2024",
    category: "COMPUTING EDUCATION / OUTREACH",
    title:
      "CodeBears: Key Insights Gained from a Summer Coding Camp Empowering Underrepresented Youth",
    authors:
      "N.A. Mack · M.B. Adeleke · V. Ingram · E. Ballou · J.K. Briggs-Belt · A. Jordan",
    venue: "2024 Black Issues in Computing Education (BICE), 80–86",
    details:
      "Coding education · Youth outreach · Broadening participation",
  },
  {
    number: "06",
    year: "2023",
    category: "VIRTUAL REALITY / HCI",
    title:
      "Dreadphobia: Evaluating the Usability of a Virtual Reality Application in Support of Mental Health",
    authors: "S. Meekins · E. Ballou · N.A. Mack",
    venue:
      "International Conference on Human-Computer Interaction, 397–402",
    details:
      "Virtual reality · Usability · Human-computer interaction",
  },
];

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    const elements = document.querySelectorAll(`.${styles.reveal}`);

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className={styles.page}>
      {/* ================= HEADER ================= */}

      <header className={styles.header}>
        <a href="#home" className={styles.brand}>
          <h1>ELIJAH BALLOU</h1>
          <p>DEVELOPER &amp; RESEARCHER</p>
        </a>

        <nav className={styles.navigation}>
          <a href="#about">ABOUT</a>
          <a href="#work">WORK</a>
          <a href="#publication">PUBLICATIONS</a>
          <a href="#resume">RESUME</a>
          <a href="#connect">CONNECT</a>
        </nav>
      </header>

      {/* ================= HERO ================= */}

      <section id="home" className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>CODE. CURIOSITY. CONNECTION.</p>

          <h2>
            BUILT TO BE
            <br />
            <span>EXPERIENCED.</span>
          </h2>

          <p className={styles.heroDescription}>
            COMPUTER SCIENCE, XR, AND INTELLIGENT SYSTEMS
            <br />
            DESIGNED AROUND HUMAN EXPERIENCE.
          </p>

          <div className={styles.expertise}>
            <span>XR DEVELOPMENT</span>
            <span>HCI RESEARCH</span>
            <span>BCI</span>
            <span>GAME DEVELOPMENT</span>
          </div>

          <a href="#work" className={styles.primaryButton}>
            EXPLORE MY WORK
            <span className={styles.buttonArrow}>↓</span>
          </a>
        </div>

        <div className={styles.heroImage}>
          <Image
            src="/images/elijah-portrait.png"
            alt="Elijah Ballou"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 45vw"
            className={styles.portrait}
          />

          <div className={styles.imageLabel}>
            <span>01</span>

            <p>
              DEVELOPER
              <br />
              RESEARCHER
              <br />
              CREATOR
            </p>
          </div>
        </div>
      </section>

      {/* ================= APPROACH ================= */}

      <section className={styles.statement}>
        <div className={`${styles.statementInner} ${styles.reveal}`}>
          <p className={styles.sectionLabel}>01 / APPROACH</p>

          <h2>
            TECHNICAL DEPTH.
            <br />
            <span>HUMAN PURPOSE.</span>
          </h2>

          <p className={styles.statementText}>
            I build technology that goes beyond functionality. My work explores
            how immersive computing, brain-computer interfaces, intelligent
            systems, and human-centered design can create experiences that
            people understand, remember, and connect with.
          </p>
        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section id="about" className={styles.about}>
        <div className={`${styles.sectionHeading} ${styles.reveal}`}>
          <p className={styles.sectionLabel}>02 / ABOUT</p>

          <h2>
            DEVELOPER.
            <br />
            RESEARCHER.
            <br />
            <span>EXPLORER.</span>
          </h2>
        </div>

        <div className={`${styles.aboutContent} ${styles.reveal}`}>
          <div className={styles.aboutIntro}>
            <p>
              I&apos;m Elijah Ballou, a computer science developer and
              researcher focused on building immersive, intelligent, and
              human-centered interactive experiences.
            </p>
          </div>

          <div className={styles.aboutDetails}>
            <p>
              My work sits at the intersection of software development,
              extended reality, brain-computer interfaces, human-computer
              interaction, game development, and intelligent technologies.
            </p>

            <p>
              I&apos;m especially interested in experiences where technology
              disappears into the interaction, allowing people to focus on what
              they are learning, feeling, exploring, or accomplishing.
            </p>

            <div className={styles.skills}>
              <div>
                <span>01</span>
                <h3>PROGRAMMING</h3>
                <p>Python / C# / JavaScript</p>
              </div>

              <div>
                <span>02</span>
                <h3>WEB DEVELOPMENT</h3>
                <p>HTML / CSS / React / Node.js / JSON / MongoDB</p>
              </div>

              <div>
                <span>03</span>
                <h3>XR &amp; GAME DEVELOPMENT</h3>
                <p>Unity 3D / Roblox Studio / Extended Reality</p>
              </div>

              <div>
                <span>04</span>
                <h3>DEVELOPMENT TOOLS</h3>
                <p>Git / GitHub / Visual Studio Code</p>
              </div>

              <div>
                <span>05</span>
                <h3>DESIGN &amp; CREATION</h3>
                <p>Blender / Canva</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SELECTED WORK ================= */}

      <section id="work" className={styles.work}>
        <div className={`${styles.workHeader} ${styles.reveal}`}>
          <div>
            <p className={styles.sectionLabel}>03 / SELECTED WORK</p>

            <h2>
              RESEARCH BUILT
              <br />
              <span>TO BE EXPERIENCED.</span>
            </h2>
          </div>

          <p className={styles.workIntro}>
            Selected projects exploring brain-computer interfaces, accessible
            gaming, immersive computing, intelligent interaction, and
            human-centered technology.
          </p>
        </div>

        <div className={styles.projectGrid}>
          {/* MIND MASTERY */}

          <article
            className={`${styles.projectCard} ${styles.mindMasteryCard} ${styles.reveal}`}
          >
            <div className={styles.brainGrid} />
            <div className={styles.brainGlow} />

            <div className={styles.brainSignal}>
              {Array.from({ length: 24 }).map((_, index) => (
                <span key={index} />
              ))}
            </div>

            <div className={styles.neuralNodes}>
              {Array.from({ length: 8 }).map((_, index) => (
                <span key={index} />
              ))}
            </div>

            <div className={styles.projectContent}>
              <div className={styles.projectNumber}>01</div>

              <p className={styles.projectType}>
                BCI / ACCESSIBLE GAMING / HCI
              </p>

              <h3 className={styles.mindMasteryTitle}>MIND MASTERY</h3>

              <p className={styles.projectRole}>CO-LEAD DEVELOPER</p>

              <p className={styles.projectDescription}>
                A hands-free brain-computer interface game designed to make
                interactive gaming more accessible. Built in Unity with the
                Muse 2 EEG headset, Mind Mastery transforms brain activity,
                intentional blinks, and gyroscopic head movement into real-time
                gameplay controls.
              </p>

              <div className={styles.projectTags}>
                <span>UNITY</span>
                <span>C#</span>
                <span>PYTHON</span>
                <span>MUSE 2</span>
                <span>EEG</span>
                <span>BCI</span>
              </div>

              <div className={styles.projectArrow}>→</div>
            </div>
          </article>

          {/* NIGHT LIGHT */}

          <article
            className={`${styles.projectCard} ${styles.nightLightCard} ${styles.reveal}`}
          >
            <div className={styles.nightLightNoise} />
            <div className={styles.nightLightVignette} />

            <div className={styles.projectContent}>
              <div className={styles.projectNumber}>02</div>

              <p className={styles.projectType}>
                HORROR / GAME DEVELOPMENT / ENEMY AI
              </p>

              <h3 className={styles.nightLightTitle}>NIGHT LIGHT</h3>

              <p className={styles.projectRole}>LEAD DEVELOPER</p>

              <p className={styles.projectDescription}>
                A first-person horror experience centered on survival,
                environmental tension, and dynamic enemy behavior. The
                experience combines player tracking, evolving monster
                mechanics, environmental audio, and controller-based
                interaction.
              </p>

              <div className={styles.projectTags}>
                <span>GAME DEVELOPMENT</span>
                <span>ENEMY AI</span>
                <span>FIRST-PERSON</span>
                <span>INTERACTION</span>
              </div>

              <div className={styles.projectArrow}>→</div>
            </div>
          </article>

          {/* ORBIT XR */}

          <article
            className={`${styles.projectCard} ${styles.orbitCard} ${styles.reveal}`}
          >
            <div className={styles.projectContent}>
              <div className={styles.projectNumber}>03</div>

              <p className={styles.projectType}>XR / TRAINING / RESEARCH</p>

              <h3>ORBIT XR</h3>

              <p className={styles.projectRole}>LEAD DEVELOPER</p>

              <p className={styles.projectDescription}>
                An XR situational-awareness training experience exploring
                immersive simulation, interaction design, decision-making, and
                human performance within realistic training environments.
              </p>

              <div className={styles.projectTags}>
                <span>XR</span>
                <span>UNITY</span>
                <span>C#</span>
                <span>HCI</span>
                <span>SIMULATION</span>
              </div>

              <div className={styles.projectArrow}>→</div>
            </div>
          </article>
        </div>
      </section>

      {/* ================= PUBLICATIONS ================= */}

      <section id="publication" className={styles.publications}>
        <div className={`${styles.publicationHeading} ${styles.reveal}`}>
          <p className={styles.sectionLabel}>04 / PUBLICATIONS</p>

          <div className={styles.publicationHeaderLayout}>
            <h2>
              PUBLISHED
              <br />
              <span>RESEARCH.</span>
            </h2>

            <p className={styles.publicationIntro}>
              My research explores human-computer interaction,
              brain-computer interfaces, artificial intelligence, virtual
              reality, accessible technology, and computing education — with a
              focus on creating interactive systems that respond to real human
              needs.
            </p>
          </div>
        </div>

        <div className={styles.publicationList}>
          {publications.map((publication) => {
            const content = (
              <>
                <div className={styles.pubIndex}>{publication.number}</div>

                <div className={styles.pubContent}>
                  <div className={styles.pubTop}>
                    <span className={styles.pubYear}>{publication.year}</span>

                    <span className={styles.pubType}>
                      {publication.category}
                    </span>
                  </div>

                  <h3>{publication.title}</h3>

                  <p className={styles.pubAuthors}>{publication.authors}</p>

                  <p className={styles.pubVenue}>{publication.venue}</p>

                  <p className={styles.pubDetails}>{publication.details}</p>
                </div>

                <span className={styles.pubArrow}>→</span>
              </>
            );

            if (publication.doi) {
              return (
                <a
                  key={publication.number}
                  href={publication.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.publicationItem} ${styles.publicationLink} ${styles.reveal}`}
                >
                  {content}
                </a>
              );
            }

            return (
              <article
                key={publication.number}
                className={`${styles.publicationItem} ${styles.reveal}`}
              >
                {content}
              </article>
            );
          })}
        </div>
      </section>

      {/* ================= RESUME ================= */}

      <section id="resume" className={styles.resume}>
        <div className={`${styles.resumeInner} ${styles.reveal}`}>
          <div className={styles.resumeHeading}>
            <p className={styles.sectionLabel}>05 / RESUME</p>

            <h2>
              EXPERIENCE.
              <br />
              SKILLS.
              <br />
              <span>IMPACT.</span>
            </h2>

            <p className={styles.resumeIntro}>
              Explore my professional and academic experience across software
              development, research, XR, human-computer interaction, game
              development, and emerging interactive technologies.
            </p>
          </div>

          <div className={styles.resumeCard}>
            <div className={styles.resumeCardTop}>
              <div>
                <span className={styles.resumeFileType}>PDF / RESUME</span>

                <h3>ELIJAH BALLOU</h3>

                <p>Developer &amp; Researcher</p>
              </div>

              <span className={styles.resumeDocumentNumber}>01</span>
            </div>

            <div className={styles.resumeDivider} />

            <div className={styles.resumeInfo}>
              <div>
                <span>FOCUS</span>
                <p>Software · XR · HCI · Game Development · BCI</p>
              </div>

              <div>
                <span>FORMAT</span>
                <p>PDF Document</p>
              </div>
            </div>

            <div className={styles.resumeAreas}>
              <span>SOFTWARE DEVELOPMENT</span>
              <span>XR DEVELOPMENT</span>
              <span>HCI RESEARCH</span>
              <span>GAME DEVELOPMENT</span>
              <span>BCI</span>
            </div>

            <div className={styles.resumeActions}>
              <a
                href="/documents/Elijah_Ballou_Resume_CV_updated.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.resumePrimaryButton}
              >
                VIEW RESUME
                <span>→</span>
              </a>

              <a
                href="/documents/Elijah_Ballou_Resume_CV_updated.pdf"
                download
                className={styles.resumeSecondaryButton}
              >
                DOWNLOAD PDF
                <span>↓</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONNECT ================= */}

      <section id="connect" className={styles.contact}>
        <div className={`${styles.contactInner} ${styles.reveal}`}>
          <div className={styles.contactHeader}>
            <p className={styles.sectionLabel}>06 / CONNECT</p>

            <p className={styles.contactAvailability}>
              OPEN TO COLLABORATION
            </p>
          </div>

          <div className={styles.contactLayout}>
            <div className={styles.contactMessage}>
              <h2>
                LET&apos;S CREATE
                <br />
                WHAT&apos;S
                <br />
                <span>NEXT.</span>
              </h2>

              <p className={styles.contactText}>
                I&apos;m interested in opportunities involving software
                development, XR, game development, human-computer interaction,
                research, and emerging interactive technologies.
              </p>
            </div>

            <div className={styles.contactLinks}>
              <a
                href="mailto:elbal1@morgan.edu"
                className={styles.contactLink}
              >
                <div>
                  <span className={styles.contactLinkLabel}>EMAIL</span>
                  <strong>elbal1@morgan.edu</strong>
                </div>

                <span className={styles.contactArrow}>→</span>
              </a>

              <a
                href="https://www.linkedin.com/in/elijah-ballou"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                <div>
                  <span className={styles.contactLinkLabel}>LINKEDIN</span>
                  <strong>Connect professionally</strong>
                </div>

                <span className={styles.contactArrow}>→</span>
              </a>

              <a
                href="https://github.com/ElijahBallou"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                <div>
                  <span className={styles.contactLinkLabel}>GITHUB</span>
                  <strong>Explore my code</strong>
                </div>

                <span className={styles.contactArrow}>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerIdentity}>
            <h2>ELIJAH BALLOU</h2>

            <p className={styles.footerRole}>
              DEVELOPER &amp; RESEARCHER
            </p>

            <p className={styles.footerFocus}>
              XR <span>•</span>
              HCI <span>•</span>
              GAME DEVELOPMENT <span>•</span>
              BCI
            </p>
          </div>

          <div className={styles.footerGroup}>
            <p className={styles.footerLabel}>NAVIGATION</p>

            <div className={styles.footerLinks}>
              <a href="#about">ABOUT</a>
              <a href="#work">WORK</a>
              <a href="#publication">PUBLICATIONS</a>
              <a href="#resume">RESUME</a>
              <a href="#connect">CONNECT</a>
            </div>
          </div>

          <div className={styles.footerGroup}>
            <p className={styles.footerLabel}>CONNECT</p>

            <div className={styles.footerSocials}>
              <a href="mailto:elbal1@morgan.edu">
                EMAIL <span>→</span>
              </a>

              <a
                href="https://www.linkedin.com/in/elijah-ballou"
                target="_blank"
                rel="noopener noreferrer"
              >
                LINKEDIN <span>→</span>
              </a>

              <a
                href="https://github.com/ElijahBallou"
                target="_blank"
                rel="noopener noreferrer"
              >
                GITHUB <span>→</span>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© 2026 ELIJAH BALLOU</p>

          <p className={styles.footerBuilt}>
            DESIGNED &amp; DEVELOPED BY ELIJAH BALLOU
          </p>

          <a href="#home" className={styles.backToTop}>
            BACK TO TOP <span>↑</span>
          </a>
        </div>
      </footer>
    </main>
  );
}