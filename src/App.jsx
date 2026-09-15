import "./App.css";

function App() {
  const skills = [
    "React",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express.js",
    "Python",
    "SQL",
    "Git & GitHub",
    "REST APIs",
    "HTML5",
    "CSS3",
    "Figma",
  ];

const projects = [

    {
    title: "Child Health Development Record System",
    description:
      "A digital child health platform that helps manage child development records, milestones and health information, with an AI-powered assistant designed to provide intelligent support and guidance.",
    tech: [
      "React",
      "TypeScript",
      "Firebase",
      "Firestore",
      "OpenAI API",
      "Expo",
    ],
    github: "https://github.com/nmedussuriya/CHDR-MobileApp",
    demo: "null",
  },
  {
    title: "Project Approval System",
    description:
      "An enterprise-style project management and approval platform designed to streamline project submissions, supervisor allocation, approvals and academic project management.",
    tech: [
      "ASP.NET Core",
      "C#",
      "SQL Server",
      "Entity Framework Core",
      "ASP.NET Identity",
    ],
    github: "https://github.com/nmedussuriya/Project-Approval-System-",
    demo: "null",
  },

  {
    title: "Utility Management System",
    description:
      "A cloud-based utility management platform developed to efficiently manage customers, utility connections, tariffs, billing and payments through secure authentication and role-based access control.",
    tech: [
      "PHP",
      "HTML",
      "CSS",
      "Microsoft SQL Server",
      "Azure App Service",
      "Azure SQL"
    ],
    github: "https://github.com/nmedussuriya/UtilitySystem",
    demo:
      "https://utilitysystem-fwh4h2f2ahencucf.centralindia-01.azurewebsites.net/",
  },

  {
    title: "Smart School Bag",
    description:
      "An IoT-enabled smart school bag that combines RFID technology, mobile application development and real-time cloud data to help students manage required school items and schedules.",
    tech: [
      "React Native",
      "ESP32",
      "RFID",
      "Firebase",
      "Arduino C++",
      "IoT",
    ],
    github: "https://github.com/nmedussuriya/SmartSchoolBag",
    demo: "null",
  },
  {
    title: "AI Music Analysis",
    description:
      "A machine learning project that analyzes music data and explores relationships between different audio features.",
    tech: ["Python", "Pandas", "Scikit-learn"],
    github: "#",
      demo: "#",
    },
  ];

  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo">
            N<span>.</span>
          </a>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>

          <a href="#contact" className="nav-button">
            Let's Talk
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-content">

          <div className="hero-text">
            <p className="eyebrow">
              SOFTWARE ENGINEERING STUDENT
            </p>

            <h1>
              Building digital
              <span> experiences </span>
              that matter.
            </h1>

            <p className="hero-description">
              Hi, I'm <strong>Nulara</strong>. I'm a Software Engineering
              student passionate about building modern web applications,
              solving problems and exploring AI-powered technologies.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                View My Work
                <span>↗</span>
              </a>

              <a href="#contact" className="secondary-button">
                Contact Me
              </a>
            </div>

            <div className="social-links">
              <a href="https://github.com/nmedussuriya" target="_blank" rel="noreferrer">
                GitHub
              </a>

              <a href="https://www.linkedin.com/in/nulara-edussuriya-5103b3292/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>

              <a href="mailto:nularamethnadi@gmail.com" target="_blank" rel="noreferrer">
                Email
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="profile-card">
              <div className="profile-circle">
                <img src="/profile.png" alt="Nulara" />
              </div>

              <div className="code-window">
                <div className="window-top">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="code">
                  <p>
                    <span className="purple">const</span>{" "}
                    <span className="blue">developer</span> = {"{"}
                  </p>

                  <p className="indent">
                    name: <span className="green">'Nulara'</span>,
                  </p>

                  <p className="indent">
                    role: <span className="green">'Software Engineer'</span>,
                  </p>

                  <p className="indent">
                    passion: <span className="green">'Building'</span>
                  </p>

                  <p>{"}"}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="section-header">
          <p className="section-number">01 — ABOUT</p>
          <h2>Turning ideas into <span>real products.</span></h2>
        </div>

        <div className="about-grid">

          <div className="about-text">
            <p>
              I'm a Software Engineering undergraduate with a strong interest
              in full-stack development, artificial intelligence and modern
              software architecture.
            </p>

            <p>
              I enjoy transforming ideas into functional applications while
              focusing on clean code, intuitive interfaces and scalable
              solutions.
            </p>

            <p>
              I'm continuously learning new technologies and looking for
              opportunities where I can contribute, collaborate and grow as a
              developer.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat">
              <strong>10+</strong>
              <span>Technologies</span>
            </div>

            <div className="stat">
              <strong>5+</strong>
              <span>Projects</span>
            </div>

            <div className="stat">
              <strong>∞</strong>
              <span>Curiosity</span>
            </div>
          </div>

        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section skills-section">
        <div className="section-header">
          <p className="section-number">02 — SKILLS</p>
          <h2>My <span>toolbox.</span></h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill}>
              <div className="skill-icon">✦</div>
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="section-header">
          <p className="section-number">03 — PROJECTS</p>
          <h2>Things I've <span>built.</span></h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>

              <div className="project-top">
                <span className="project-number">
                  0{index + 1}
                </span>

                <div className="project-links">
                  <a href={project.github}>GitHub ↗</a>
                  <a href={project.demo}>Demo ↗</a>
                </div>
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

            </article>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section education-section">
        <div className="section-header">
          <p className="section-number">04 — EDUCATION</p>
          <h2>My <span>journey.</span></h2>
        </div>

        <div className="timeline">

          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span>2024 — Present</span>

              <h3>
                BSc (Hons) Software Engineering
              </h3>

              <p>
                NSBM Green University
              </p>

              <small>
                Software Engineering • Web Development • Databases •
                Artificial Intelligence
              </small>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span>2026</span>

              <h3>
                Artificial Intelligence Studies
              </h3>

              <p>
                IIT
              </p>

              <small>
                Machine Learning • Data Analysis • AI Fundamentals
              </small>
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">

        <div className="contact-content">

          <p className="section-number">05 — CONTACT</p>

          <h2>
            Let's build something
            <span> great together.</span>
          </h2>

          <p>
            Whether you have a project idea, internship opportunity or simply
            want to connect, feel free to reach out.
          </p>

          <a
            href="mailto:your-email@example.com"
            className="primary-button contact-button"
          >
            Get In Touch
            <span>↗</span>
          </a>

        </div>

      </section>

      {/* FOOTER */}
      <footer>
        <div>
          © 2026 Nulara. All rights reserved.
        </div>

        <div>
          Designed & Built with React
        </div>
      </footer>

    </div>
  );
}

export default App;