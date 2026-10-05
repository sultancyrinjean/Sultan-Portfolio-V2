import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    
    const elements = document.querySelectorAll(
      ".section-header, .about-content, .about-image-wrapper, .project-card, .contact-info, .contact-form-card"
    );

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    elements.forEach(function (element) {
      element.classList.add("hidden");
      observer.observe(element);
    });

    
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    function handleScroll() {
      let current = "";

      sections.forEach(function (section) {
        const sectionTop = section.offsetTop - 100;

        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach(function (link) {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
          link.classList.add("active");
        }
      });
    }

    window.addEventListener("scroll", handleScroll);

    
    const navbar = document.querySelector(".navbar-wrapper");

    function handleNavbarScroll() {
      if (window.scrollY > 20) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }

    window.addEventListener("scroll", handleNavbarScroll);

  
    const form = document.getElementById("contactForm");

    function handleSubmit(event) {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;
      const status = document.getElementById("formStatus");

      if (
        name === "" ||
        email === "" ||
        subject === "" ||
        message === ""
      ) {
        status.style.display = "block";
        status.textContent = "Please fill in all fields.";
      } else {
        status.style.display = "block";
        status.textContent = "Thank you! Your message has been sent.";
        form.reset();
      }
    }

    form.addEventListener("submit", handleSubmit);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleNavbarScroll);
      form.removeEventListener("submit", handleSubmit);
    };
  }, []);

  return (
    <>
      {/* navigation bar */}
      <header className="navbar-wrapper">
        <nav className="navbar container">

          <a href="#home" className="nav-logo">
            <span className="logo-mark">CJ</span>
            <span className="logo-text">Cyrin Jean</span>
          </a>

          {/* navigation bar link */}
          <ul className="nav-menu" id="navMenu">
            <li className="nav-item">
              <a href="#home" className="nav-link active">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a href="#about" className="nav-link">
                About
              </a>
            </li>

            <li className="nav-item">
              <a href="#projects" className="nav-link">
                Project
              </a>
            </li>

            <li className="nav-item">
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>

            <li className="nav-item nav-item-cta">
              <a href="#contact" className="btn btn-outline-nav">
                Let's Talk
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>

        {/* home section */}
        <section id="home" className="section home-section">
          <div className="container home-container">

            <div className="home-content">

              <h1 className="home-title">
                Hi, I'm <span className="highlight">Cyrin Jean</span>
              </h1>

              <h2 className="home-subtitle">
                UI/UX Designer
              </h2>

              <p className="home-description">
                I create clean and user-friendly interfaces focused on simple,
                intuitive, and meaningful digital experiences. As a fourth-year
                student, I'm continuously improving my UI/UX design skills and
                exploring modern design approaches.
              </p>

              <div className="home-actions">
                <a href="#projects" className="btn btn-primary">
                  View My Projects
                </a>

                <a href="#contact" className="btn btn-secondary">
                  Get In Touch
                </a>
              </div>

            </div>

          </div>
        </section>

        {/* about section */}
        <section id="about" className="section about-section">
          <div className="container">

            <div className="section-header">
              <span className="section-tag">
                About Me
              </span>

              <h2 className="section-title">
                Who I Am & What I'm Learning
              </h2>

              <div className="title-underline"></div>
            </div>

            <div className="about-grid">

              {/* profile */}
              <div className="about-image-wrapper">

                <div className="profile-card">

                  <div className="image-frame">
                    <img
                      id="profileImg"
                      src="/image.jpg"
                      alt="Cyrin Jean"
                    />
                  </div>
                </div>
              </div>

              {/* about me */}
              <div className="about-content">

                <h3 className="about-heading">
                  Creating simple and meaningful digital experiences
                </h3>

                <p className="about-text">
                  Hello! I am a fourth-year student with a passion for UI/UX
                  design and creating clean, user-friendly digital experiences.
                  I enjoy turning ideas into simple and visually appealing
                  designs while considering how users interact with each
                  interface.
                </p>

                <p className="about-text">
                  I am continuously developing my skills in user interface
                  design, user experience, prototyping, and responsive design.
                  Through school projects and personal projects, I am learning
                  to create designs that are both visually engaging and easy
                  to use.
                </p>

                <div className="skills-block">

                  <h4 className="skills-title">
                    Core Skills & Technologies
                  </h4>

                  <div className="skill-tags">
                    <span className="skill-tag">UI/UX Design</span>
                    <span className="skill-tag">Figma</span>
                    <span className="skill-tag">Prototyping</span>
                    <span className="skill-tag">System Design</span>
                    <span className="skill-tag">Mobile Design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* project */}
        <section id="projects" className="section projects-section">
          <div className="container">

            <div className="section-header">

              <span className="section-tag">
                Project Showcase
              </span>

              <h2 className="section-title">
                Featured Projects
              </h2>

              <div className="title-underline"></div>

              <p className="section-subtitle">
                A selection of my recent projects showcasing my UI/UX design
                skills, creative ideas, responsive layouts, and growing
                experience in creating user-friendly digital experiences.
              </p>
            </div>

            <div className="projects-grid">

              {/* project card */}
              <article className="project-card">

                <div className="image-frame">
                  <img
                    src="/awesome-todos.jpg"
                    alt="Project 1"
                  />
                </div>

                <div className="project-details">

                  <h3 className="project-title">
                    Awesome Todos
                  </h3>

                  <p className="project-description">
                    Awesome Todos is a simple and user-friendly task management
                    web application designed to help users organize their daily
                    activities efficiently. The app allows users to quickly add
                    new tasks through an input field and manage them in a clean,
                    modern interface.
                  </p>

                  <div className="project-tech-tags">
                    <span className="tech-pill">React+Vite</span>
                    <span className="tech-pill">Node.js</span>
                    <span className="tech-pill">MongoDB</span>
                    <span className="tech-pill">Javascript</span>
                    <span className="tech-pill">Express.js</span>
                    <span className="tech-pill">Postman</span>
                  </div>
                </div>
              </article>

              {/* project card */}
              <article className="project-card">

                <div className="image-frame">
                  <img
                    src="/arkila.jpg"
                    alt="Project 2"
                  />
                </div>

                <div className="project-details">

                  <h3 className="project-title">
                    Arkila
                  </h3>

                  <p className="project-description">
                    A boarding house management application designed to
                    streamline tenant records, payment tracking, property
                    management, and communication between landlords and tenants
                    through a centralized digital platform.
                  </p>

                  <div className="project-tech-tags">
                    <span className="tech-pill">Figma</span>
                    <span className="tech-pill">Prototypingc</span>
                    <span className="tech-pill">Wireframing</span>
                  </div>
                </div>
              </article>

              {/* project card */}
              <article className="project-card">

                <div className="image-frame">
                  <img
                    src="/waygo.jpg"
                    alt="Project 3"
                  />
                </div>

                <div className="project-details">

                  <h3 className="project-title">
                    Waygo
                  </h3>

                  <p className="project-description">
                    A web-based campus navigation system designed to help
                    students, faculty, staff, and visitors easily locate
                    classrooms, buildings, offices, laboratories, and other
                    facilities through interactive campus mapping, centralized
                    location search, and building and floor navigation.
                  </p>

                  <div className="project-tech-tags">
                    <span className="tech-pill">Figma</span>
                    <span className="tech-pill">Prototyping</span>
                    <span className="tech-pill">Wireframing</span>
                  </div>

                </div>
              </article>
            </div>
          </div>
        </section>

        {/* contact section */}
        <section id="contact" className="section contact-section">
          <div className="container">

            <div className="section-header">

              <span className="section-tag">
                Get in Touch
              </span>

              <h2 className="section-title">
                Let's Work Together
              </h2>

              <div className="title-underline"></div>

              <p className="section-subtitle">
                Have a project in mind, an opportunity to discuss, or just want
                to say hi? Send me a message!
              </p>

            </div>

            <div className="contact-grid">

              {/* contact information */}
              <div className="contact-info">

                <h3 className="contact-info-title">
                  Contact Information
                </h3>

                <p className="contact-info-desc">
                  Have a project idea, want to collaborate, or simply want to
                  connect? I’d love to hear from you. Feel free to send me a
                  message!
                </p>

                <div className="contact-items">

                  <div className="contact-item">

                    <div className="contact-icon">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>

                    <div className="contact-meta">
                      <span className="contact-label">
                        Email
                      </span>

                      <a
                        href="mailto:sultancyrinjean@gmail.com"
                        className="contact-value"
                      >
                        sultancyrinjean@gmail.com
                      </a>
                    </div>

                  </div>

                  <div className="contact-item">

                    <div className="contact-icon">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>

                    <div className="contact-meta">
                      <span className="contact-label">
                        Contact Number
                      </span>

                      <a
                        href="tel:+639618052383"
                        className="contact-value"
                      >
                        09618052383
                      </a>
                    </div>

                  </div>

                  <div className="contact-item">

                    <div className="contact-icon">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>

                    <div className="contact-meta">
                      <span className="contact-label">
                        Location
                      </span>

                      <span className="contact-value">
                        Tagbak,Iloilo City
                      </span>
                    </div>

                  </div>

                </div>

                {/* social media link */}
                <div className="social-links-box">

                  <span className="social-heading">
                    Follow Me:
                  </span>

                  <div className="social-links">

                    {/* github */}
                    <a
                      href="https://github.com/sultancyrinjean"
                      className="social-link"
                      title="GitHub"
                      aria-label="GitHub"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>

                    {/* facebook */}
                    <a
                      href="https://www.facebook.com/jeanjean.balderas"
                      className="social-link"
                      title="Facebook"
                      aria-label="Facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.025 1.792-4.695 4.533-4.695 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.955.93-1.955 1.885v2.262h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"></path>
                      </svg>
                    </a>

                    {/* instagram */}
                    <a
                      href="https://www.instagram.com/cyrin_jeann/"
                      className="social-link"
                      title="Instagram"
                      aria-label="Instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="5"
                          ry="5"
                        ></rect>
                        <circle cx="12" cy="12" r="4"></circle>
                        <circle cx="17.5" cy="6.5" r="1"></circle>
                      </svg>
                    </a>

                  </div>
                </div>

              </div>

              {/* contact */}
              <div className="contact-form-card">

                <form
                  id="contactForm"
                  className="contact-form"
                  noValidate
                >

                  <div className="form-group">

                    <label
                      htmlFor="name"
                      className="form-label"
                    >
                      Your Name
                    </label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-input"
                      placeholder="e.g. Cyrin Jean Sultan"
                      required
                    />

                    <span
                      className="error-msg"
                      id="nameError"
                    ></span>

                  </div>

                  <div className="form-group">

                    <label
                      htmlFor="email"
                      className="form-label"
                    >
                      Email Address
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      placeholder="e.g. sultancyrinjean@example.com"
                      required
                    />

                    <span
                      className="error-msg"
                      id="emailError"
                    ></span>

                  </div>

                  <div className="form-group">

                    <label
                      htmlFor="subject"
                      className="form-label"
                    >
                      Subject
                    </label>

                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-input"
                      placeholder="Project Inquiry / Job Opportunity"
                      required
                    />

                    <span
                      className="error-msg"
                      id="subjectError"
                    ></span>

                  </div>

                  <div className="form-group">

                    <label
                      htmlFor="message"
                      className="form-label"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      className="form-input form-textarea"
                      placeholder="Tell me about your project or inquiry..."
                      required
                    ></textarea>

                    <span
                      className="error-msg"
                      id="messageError"
                    ></span>

                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    id="submitBtn"
                  >
                    Send Message
                  </button>

                  <div
                    className="form-status"
                    id="formStatus"
                    style={{ display: "none" }}
                  ></div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* footer */}
      <footer className="footer">

        <div className="container footer-container">

          <div className="footer-left">

            <a href="#home" className="footer-logo">
              <span className="logo-mark">CJ</span>
              <span className="logo-text">Cyrin Jean</span>
            </a>

            <p className="footer-tagline">
              Clean and modern UI/UX design with a simple, user-friendly,
              and professional aesthetic.
            </p>
          </div>

          <div className="footer-nav">
            <span className="footer-nav-title">
              Quick Links
            </span>

            <ul className="footer-links">
              <li>
                <a href="#home">Home</a>
              </li>

              <li>
                <a href="#about">About</a>
              </li>

              <li>
                <a href="#projects">Project</a>
              </li>

              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>

          </div>

          <div className="footer-bottom">
            <p>
              &copy; 2026 Cyrin Jean. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;