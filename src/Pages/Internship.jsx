import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Atom,
  ChartNoAxesCombined,
  Code2,
  Coffee,
  Cpu,
  LayoutPanelTop,
  Network,
  Palette,
  Router,
  Server,
  Smartphone,
  Terminal
} from "lucide-react";

import "../index.css";
import "../assets/css/Service-page.css";

const programDetails = [
  "Duration: 1 Month, 3 Months, 6 Months",
  "Mode: Online, Offline, Hybrid",
  "Type: Guided Internship Program",
  "Eligibility: Students, freshers, and career switchers",
];

const domains = [
  {
    icon: Code2,
    title: "Full Stack Development",
    category: "Development",
    outcome:
      "Build complete web apps with frontend, backend, APIs, and database workflows.",
  },
  {
    icon: LayoutPanelTop,
    title: "Frontend Development",
    category: "Development",
    outcome:
      "Create responsive interfaces with React, reusable components, and polished UI flows.",
  },
  {
    icon: Server,
    title: "Backend Development",
    category: "Development",
    outcome:
      "Design server logic, APIs, authentication, and database-backed application features.",
  },
  {
    icon: Atom,
    title: "React JS",
    category: "Development",
    outcome:
      "Develop dynamic React pages with routing, state management, and API integration.",
  },
  {
    icon: Terminal,
    title: "Python Development",
    category: "Development",
    outcome:
      "Work with Python fundamentals, automation, APIs, and practical project modules.",
  },
  {
    icon: Coffee,
    title: "Java Development",
    category: "Development",
    outcome:
      "Practice object-oriented programming and build structured Java application features.",
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    category: "AI & Data",
    outcome:
      "Explore model building, data preparation, prediction workflows, and AI use cases.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Data Science",
    category: "AI & Data",
    outcome:
      "Analyze datasets, visualize insights, and create portfolio-ready data projects.",
  },
  {
    icon: Router,
    title: "IoT Development",
    category: "Hardware",
    outcome:
      "Connect sensors, microcontrollers, and dashboards for smart device prototypes.",
  },
  {
    icon: Network,
    title: "Blockchain Development",
    category: "Emerging Tech",
    outcome:
      "Understand decentralized app concepts, smart-contract basics, and traceability systems.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    category: "Design",
    outcome:
      "Design user journeys, wireframes, prototypes, and clean app screens.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    category: "Development",
    outcome:
      "Build mobile-first app screens and practical features for real-world use cases.",
  },
];

const domainFilters = [
  "All",
  "Development",
  "AI & Data",
  "Hardware",
  "Design",
  "Emerging Tech",
];

const learningPoints = [
  { text: "Industry-Level Projects", icon: "bi-building", color: "blue" },
  { text: "Git & GitHub", icon: "bi-github", color: "purple" },
  { text: "API Integration", icon: "bi-cloud-arrow-down", color: "green" },
  { text: "Database Management", icon: "bi-database", color: "yellow" },
  { text: "Team Collaboration", icon: "bi-people", color: "pink" },
  { text: "Agile Methodology", icon: "bi-kanban", color: "orange" },
];

const benefits = [
  {
    text: "Internship Certificate",
    icon: "bi-patch-check",
    color: "green",
  },
  {
    text: "Project Completion Certificate",
    icon: "bi-file-earmark-check",
    color: "blue",
  },
  {
    text: "Letter of Recommendation",
    icon: "bi-envelope-paper",
    color: "yellow",
  },
  {
    text: "Placement Assistance",
    icon: "bi-briefcase",
    color: "purple",
  },
  {
    text: "Mentorship from Experts",
    icon: "bi-person-hearts",
    color: "pink",
  },
  {
    text: "Resume Building Support",
    icon: "bi-file-person",
    color: "orange",
  },
  {
    text: "LinkedIn Optimization",
    icon: "bi-linkedin",
    color: "blue",
  },
];

const liveProjects = [
  "E-Commerce Website",
  "Hospital Management System",
  "Student Portal",
  "Blockchain Traceability System",
  "AI Chatbot",
];

const technologies = [
  {
    name: "HTML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React JS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Postman",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
];

const successStories = [
  {
    text: "Intern Testimonials",
    icon: "bi-chat-quote-fill",
    color: "blue",
  },
  {
    text: "Student Reviews",
    icon: "bi-star-fill",
    color: "yellow",
  },
  {
    text: "Placement Achievements",
    icon: "bi-trophy-fill",
    color: "purple",
  },
];

const stats = [
  {
    end: 500,
    suffix: "+",
    label: "Interns Trained",
    icon: "bi-people-fill",
    color: "blue",
  },
  {
    end: 100,
    suffix: "+",
    label: "Projects Completed",
    icon: "bi-code-slash",
    color: "purple",
  },
  {
    end: 50,
    suffix: "+",
    label: "Hiring Partners",
    icon: "bi-building",
    color: "orange",
  },
  {
    end: 90,
    suffix: "%",
    label: "Student Satisfaction",
    icon: "bi-emoji-smile-fill",
    color: "pink",
  },
];

const getWhatsAppApplyLink = (domain) =>
  `https://wa.me/919025476322?text=${encodeURIComponent(
    `Hello ProJenius, I have applied for the ${domain} internship domain. Please share the next steps.`
  )}`;

export default function Internship() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedDomain, setSelectedDomain] = useState(domains[0]);
  const [statCounts, setStatCounts] = useState(stats.map(() => 0));
  const statsRef = useRef(null);

  const visibleDomains =
    activeFilter === "All"
      ? domains
      : domains.filter((domain) => domain.category === activeFilter);

  const SelectedDomainIcon = selectedDomain.icon;

  const handleFilterChange = (filter) => {
    const nextDomains =
      filter === "All"
        ? domains
        : domains.filter((domain) => domain.category === filter);

    setActiveFilter(filter);
    setSelectedDomain(nextDomains[0]);
  };

  useEffect(() => {
    const statsSection = statsRef.current;

    if (!statsSection) return undefined;

    const runCounters = () => {
      const duration = 1600;
      const startedAt = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        setStatCounts(
          stats.map((stat) => Math.round(stat.end * easedProgress))
        );

        if (progress < 1) {
          requestAnimationFrame(tick);
        }
      };

      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(statsSection);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        /* =========================================
           REFERENCE HEADING STYLE
        ========================================= */

        .internship-program-section .reference-about-subheading,
        .internship-domains-section .reference-section-subheading,
        .internship-tech-section .reference-section-subheading,
        .internship-capabilities-section .reference-section-subheading,
        .internship-metrics-section .reference-section-subheading {
          display: inline-flex !important;
          align-items: center;
          justify-content: center;
          gap: 10px;

          padding: 10px 20px !important;

          border: 1px solid rgba(102, 199, 221, 0.30) !important;
          border-radius: 999px !important;

          background: rgba(102, 199, 221, 0.08) !important;

          color: #5bbbd3 !important;

          font-family: 'Outfit', sans-serif !important;
          font-size: 15px !important;
          font-weight: 800 !important;
          letter-spacing: 1.5px !important;
          line-height: 1 !important;

          text-transform: uppercase !important;

          box-sizing: border-box;
          position: relative;
        }

        /* Radio-style dot inside every heading pill */
        .internship-program-section .reference-about-subheading::before,
        .internship-domains-section .reference-section-subheading::before,
        .internship-tech-section .reference-section-subheading::before,
        .internship-capabilities-section .reference-section-subheading::before,
        .internship-metrics-section .reference-section-subheading::before {
          content: "";

          width: 9px;
          height: 9px;
          min-width: 9px;

          border-radius: 50%;

          background: #66c7dd;

          box-shadow:
            0 0 0 4px rgba(102, 199, 221, 0.12);

          display: inline-block;
        }

        /* Main headings */
        .internship-program-section .reference-about-title,
        .internship-domains-section .reference-section-title,
        .internship-tech-section .reference-section-title,
        .internship-capabilities-section .reference-section-title,
        .internship-metrics-section .reference-section-title {
          color: #07142f !important;

          font-family: 'Outfit', sans-serif !important;

          font-size: clamp(38px, 5vw, 58px) !important;

          font-weight: 800 !important;

          line-height: 1.12 !important;

          letter-spacing: -1.5px !important;

          margin-top: 20px !important;
          margin-bottom: 0 !important;
        }

        /* Blue gradient text */
        .internship-program-section .reference-about-title .heading-gradient,
        .internship-domains-section .reference-section-title .heading-gradient,
        .internship-tech-section .reference-section-title .heading-gradient,
        .internship-capabilities-section .reference-section-title .heading-gradient,
        .internship-metrics-section .reference-section-title .heading-gradient {
          background: linear-gradient(
            90deg,
            #39b5df 0%,
            #2f80ed 100%
          ) !important;

          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          background-clip: text !important;

          color: transparent !important;
        }

        /* Underline */
        .internship-program-section .reference-about-title::after,
        .internship-domains-section .reference-section-title::after,
        .internship-tech-section .reference-section-title::after,
        .internship-capabilities-section .reference-section-title::after,
        .internship-metrics-section .reference-section-title::after {
          content: "";

          display: block;

          width: 120px;
          height: 5px;

          margin-top: 24px;

          border-radius: 999px;

          background: linear-gradient(
            90deg,
            #66c7dd 0%,
            #2f80ed 100%
          );
        }

        /* Center lines for centered sections */
        .internship-domains-section .reference-section-title::after,
        .internship-tech-section .reference-section-title::after,
        .internship-capabilities-section .reference-section-title::after,
        .internship-metrics-section .reference-section-title::after {
          margin-left: auto;
          margin-right: auto;
        }

        /* First section line stays left aligned */
        .internship-program-section .reference-about-title::after {
          margin-left: 0;
          margin-right: auto;
        }

        .internship-program-section .reference-about-subheading {
          margin-bottom: 0 !important;
        }

        .internship-program-section .reference-about-title {
          max-width: 850px;
        }

        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 767px) {

          .internship-program-section .reference-about-subheading,
          .internship-domains-section .reference-section-subheading,
          .internship-tech-section .reference-section-subheading,
          .internship-capabilities-section .reference-section-subheading,
          .internship-metrics-section .reference-section-subheading {
            padding: 8px 15px !important;

            font-size: 12px !important;

            letter-spacing: 1.2px !important;
          }

          .internship-program-section .reference-about-title,
          .internship-domains-section .reference-section-title,
          .internship-tech-section .reference-section-title,
          .internship-capabilities-section .reference-section-title,
          .internship-metrics-section .reference-section-title {
            font-size: clamp(32px, 9vw, 44px) !important;

            letter-spacing: -0.8px !important;

            margin-top: 16px !important;
          }

          .internship-program-section .reference-about-title::after,
          .internship-domains-section .reference-section-title::after,
          .internship-tech-section .reference-section-title::after,
          .internship-capabilities-section .reference-section-title::after,
          .internship-metrics-section .reference-section-title::after {
            width: 100px;

            height: 4px;

            margin-top: 18px;
          }

          .internship-program-section .reference-about-title::after {
            margin-left: 0;
            margin-right: auto;
          }
        }
      `}</style>

      {/* HERO */}
      <section
        className="header-wrap internship-hero"
        style={{
          backgroundImage:
            "linear-gradient(#121929b8), url(/images/projenius-banner.webp)",
        }}
      >
        <div className="container title-section internship-title-section">
          <span className="internship-eyebrow">
            Internship Program 2026
          </span>

          <h1 className="page-title">
            Launch Your Career with Real-World Projects
          </h1>
        </div>
      </section>

      {/* ABOUT THE INTERNSHIP */}
      <section className="internship-program-section modern-about-section">

        <div className="about-bg-blobs">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
        </div>

        <div className="container relative z-10">

          <div className="internship-about-grid modern-grid">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                ease: "easeOut"
              }}
              className="about-content-wrapper"
            >

              <div
                className="about-accent-line"
                aria-hidden="true"
              ></div>

              <span
                id="sub-heading"
                className="modern-sub-heading reference-about-subheading"
              >
                About the Internship
              </span>

              <h2
                id="title"
                className="modern-title reference-about-title"
              >
                Practical Training{" "}
                <span className="text-gradient heading-gradient">
                  Built Around Real Work
                </span>
              </h2>

              <p className="section-desc modern-desc">
                Gain hands-on experience through structured training, mentor
                support, live projects, and career preparation designed for
                students and freshers entering the tech industry.
              </p>

              <div className="modern-cta-group">

                <a
                  href="#apply"
                  className="modern-btn-primary"
                >
                  <span>Start Your Journey</span>

                  <i
                    className="bi bi-arrow-right-short"
                    aria-hidden="true"
                  ></i>
                </a>

                <a
                  href="#brochure"
                  className="modern-btn-secondary"
                >
                  <span>Download Syllabus</span>

                  <i
                    className="bi bi-cloud-arrow-down"
                    aria-hidden="true"
                  ></i>
                </a>

              </div>
            </motion.div>

            <motion.div
              className="internship-detail-grid modern-detail-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                margin: "-100px"
              }}
              variants={{
                hidden: {
                  opacity: 0
                },

                visible: {
                  opacity: 1,

                  transition: {
                    staggerChildren: 0.15
                  }
                }
              }}
            >

              {programDetails.map((detail, index) => {

                const [title, desc] = detail.split(": ");

                return (
                  <motion.div
                    className="internship-detail-card modern-detail-card"
                    key={detail}
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 30
                      },

                      visible: {
                        opacity: 1,
                        y: 0,

                        transition: {
                          type: "spring",
                          stiffness: 100
                        }
                      }
                    }}
                    whileHover={{
                      y: -8,
                      scale: 1.02
                    }}
                  >

                    <div className="card-bg-gradient"></div>

                    <div className="card-content-relative">

                      <div
                        className={`card-icon-wrapper ${
                          index === 0
                            ? "color-blue"
                            : index === 1
                            ? "color-purple"
                            : index === 2
                            ? "color-pink"
                            : "color-orange"
                        }`}
                      >

                        <img
                          src={`/images/icon-${index + 1}.png`}
                          alt={title}
                          className="detail-icon-img"
                          style={{
                            width: "32px",
                            height: "32px",
                            objectFit: "contain"
                          }}
                        />

                      </div>

                      <div className="card-text">

                        <h4>{title}</h4>

                        <span>{desc}</span>

                      </div>

                    </div>

                  </motion.div>
                );

              })}

            </motion.div>

          </div>

        </div>

      </section>

      {/* SHOWCASE */}
      <section className="internship-showcase-section">

        <div className="container showcase-container">

          <div className="showcase-header">

            <h2>
              How ProJenius transforms your <br />
              career with real-world projects
            </h2>

            <p>
              Discover how ProJenius uses hands-on training to prepare
              students for the tech industry.
            </p>

          </div>

          <div className="showcase-video-container">

            <div className="showcase-video-glow"></div>

            <div className="showcase-video-inner">

              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/1adzVmNh078?si=dCnd1I_Mky0IN98m"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>

            </div>

          </div>

        </div>

      </section>

      {/* INTERNSHIP DOMAINS */}
      <section
        className="internship-domains-section"
        id="apply"
      >

        <div className="container">

          <motion.div
            className="section-heading text-center internship-domains-heading"
            initial={{
              opacity: 0,
              y: 24
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              margin: "-80px"
            }}
            transition={{
              duration: 0.55
            }}
          >

            <span
              id="sub-heading"
              className="reference-section-subheading"
            >
              Internship Domains
            </span>

            <h2
              id="title"
              className="reference-section-title"
            >
              Choose Your{" "}
              <span className="heading-gradient">
                Technology Track
              </span>
            </h2>

            <p className="internship-domains-lead">
              Select a domain to preview the learning outcome, then apply
              directly for your preferred track.
            </p>

          </motion.div>

          <div
            className="internship-filter-row"
            role="tablist"
            aria-label="Internship domain filters"
          >

            {domainFilters.map((filter) => (

              <button
                className={`internship-filter-btn ${
                  activeFilter === filter
                    ? "active"
                    : ""
                }`}
                key={filter}
                type="button"
                role="tab"
                aria-selected={
                  activeFilter === filter
                }
                onClick={() =>
                  handleFilterChange(filter)
                }
              >
                {filter}
              </button>

            ))}

          </div>

          <div
            className="track-explorer-meta"
            aria-label="Internship program overview"
          >

            <span>
              <i
                className="bi bi-grid-1x2"
                aria-hidden="true"
              ></i>{" "}
              {visibleDomains.length} tracks available
            </span>

            <span>
              <i
                className="bi bi-kanban"
                aria-hidden="true"
              ></i>{" "}
              Project-based learning
            </span>

            <span>
              <i
                className="bi bi-calendar-check"
                aria-hidden="true"
              ></i>{" "}
              New cohorts now open
            </span>

          </div>

          <div className="internship-domain-layout">

            <div
              className="internship-domain-grid"
              role="list"
            >

              {visibleDomains.map((domain, index) => {

                const DomainIcon = domain.icon;

                return (
                  <motion.button
                    className={`internship-domain-card ${
                      selectedDomain.title === domain.title
                        ? "active"
                        : ""
                    }`}
                    key={domain.title}
                    type="button"
                    role="listitem"
                    aria-pressed={
                      selectedDomain.title === domain.title
                    }
                    onClick={() =>
                      setSelectedDomain(domain)
                    }
                    initial={{
                      opacity: 0,
                      y: 20
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0
                    }}
                    viewport={{
                      once: true,
                      margin: "-40px"
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.04
                    }}
                    whileHover={{
                      y: -6
                    }}
                  >

                    <div className="domain-card-top">

                      <div className="domain-icon-shell">

                        <DomainIcon
                          aria-hidden="true"
                          strokeWidth={2}
                        />

                      </div>

                      <span className="domain-category-tag">
                        {domain.category}
                      </span>

                    </div>

                    <div className="domain-card-copy">

                      <h3>{domain.title}</h3>

                      <span className="domain-card-caption">
                        Career-focused internship
                      </span>

                    </div>

                    <span className="internship-domain-apply">

                      View Track{" "}

                      <i
                        className="bi bi-arrow-right-short"
                        aria-hidden="true"
                      ></i>

                    </span>

                  </motion.button>
                );

              })}

            </div>

            <motion.aside
              className="internship-track-preview"
              key={selectedDomain.title}
              initial={{
                opacity: 0,
                x: 20
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                duration: 0.35
              }}
            >

              <div className="track-preview-header">

                <span className="track-preview-label">
                  Selected Track
                </span>

                <span className="track-preview-status">

                  <i
                    className="bi bi-check2-circle"
                    aria-hidden="true"
                  ></i>{" "}

                  Open

                </span>

              </div>

              <div className="track-preview-identity">

                <div className="track-preview-icon-shell">

                  <SelectedDomainIcon
                    aria-hidden="true"
                    strokeWidth={2}
                  />

                </div>

                <span className="track-preview-category">
                  {selectedDomain.category}
                </span>

              </div>

              <h3>
                {selectedDomain.title}
              </h3>

              <p>
                {selectedDomain.outcome}
              </p>

              <div
                className="track-preview-facts"
                aria-label="Program details"
              >

                <span>

                  <i
                    className="bi bi-calendar3"
                    aria-hidden="true"
                  ></i>{" "}

                  Flexible duration

                </span>

                <span>

                  <i
                    className="bi bi-person-workspace"
                    aria-hidden="true"
                  ></i>{" "}

                  Mentor-led projects

                </span>

              </div>

              <div className="track-preview-note">

                <i
                  className="bi bi-shield-check"
                  aria-hidden="true"
                ></i>

                <span>
                  Certificate and portfolio review included
                </span>

              </div>

              <a
                href={getWhatsAppApplyLink(
                  selectedDomain.title
                )}
                target="_blank"
                rel="noreferrer"
                className="internship-track-apply"
              >

                Apply for this track

                <i
                  className="bi bi-arrow-up-right"
                  aria-hidden="true"
                ></i>

              </a>

            </motion.aside>

          </div>

        </div>

      </section>

      {/* TECHNOLOGIES COVERED */}
      <section className="internship-tech-section">

        <div className="container">

          <div className="section-heading text-center">

            <span
              id="sub-heading"
              className="reference-section-subheading"
            >
              Technologies Covered
            </span>

            <h2
              id="title"
              className="reference-section-title"
            >

              Tools Used in{" "}

              <span className="heading-gradient">
                Real Development
              </span>

            </h2>

          </div>

        </div>

        <div className="tech-carousel-wrapper">

          <div className="tech-carousel-track">

            <ul className="tech-carousel-list">

              {technologies.map((tech) => (

                <li
                  key={tech.name}
                  className="tech-carousel-item"
                >

                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="tech-carousel-logo"
                  />

                  <span>
                    {tech.name}
                  </span>

                </li>

              ))}

            </ul>

            <ul
              className="tech-carousel-list"
              aria-hidden="true"
            >

              {technologies.map((tech) => (

                <li
                  key={`dup-${tech.name}`}
                  className="tech-carousel-item"
                >

                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="tech-carousel-logo"
                  />

                  <span>
                    {tech.name}
                  </span>

                </li>

              ))}

            </ul>

          </div>

        </div>

      </section>

      {/* PROGRAM HIGHLIGHTS */}
      <section className="internship-capabilities-section">

        <div className="container">

          <div className="section-heading text-center">

            <span
              id="sub-heading"
              className="reference-section-subheading"
            >
              Program Highlights
            </span>

            <h2
              id="title"
              className="reference-section-title"
            >

              What Makes This Internship{" "}

              <span className="heading-gradient">
                Different
              </span>

            </h2>

          </div>

          <div className="capabilities-layout">

            <motion.div
              className="capabilities-panel capabilities-dark"
              initial={{
                opacity: 0,
                y: 40
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true,
                margin: "-80px"
              }}
              transition={{
                duration: 0.6
              }}
            >

              <div className="cap-panel-label">
                What Interns Will Learn
              </div>

              <h3>
                Work Like a
                <br />
                Modern Tech Team
              </h3>

              <p className="cap-panel-desc">
                Master industry-standard tools, workflows, and
                collaboration practices used by professional
                development teams.
              </p>

              <div className="cap-panel-list">

                {learningPoints.map(
                  (point, index) => (

                    <div
                      className="cap-list-item"
                      key={point.text}
                    >

                      <span className="cap-item-num">
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      <i
                        className={`bi ${point.icon}`}
                      ></i>

                      <span>
                        {point.text}
                      </span>

                    </div>

                  )
                )}

              </div>

            </motion.div>

            <motion.div
              className="capabilities-panel capabilities-light"
              initial={{
                opacity: 0,
                y: 40
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true,
                margin: "-80px"
              }}
              transition={{
                duration: 0.6,
                delay: 0.15
              }}
            >

              <div className="cap-panel-label cap-label-blue">
                Benefits
              </div>

              <h3>
                Career Support
                <br />
                Beyond Training
              </h3>

              <div className="cap-benefits-grid">

                {benefits.map(
                  (benefit) => (

                    <motion.div
                      className="cap-benefit-card"
                      key={benefit.text}
                      whileHover={{
                        y: -4
                      }}
                      transition={{
                        duration: 0.2
                      }}
                    >

                      <div
                        className={`cap-benefit-icon color-${benefit.color}`}
                      >

                        <i
                          className={`bi ${benefit.icon}`}
                        ></i>

                      </div>

                      <span>
                        {benefit.text}
                      </span>

                    </motion.div>

                  )
                )}

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* SUCCESS STORIES */}
      <section className="internship-metrics-section">

        <div className="container">

          <div className="section-heading text-center">

            <span
              id="sub-heading"
              className="reference-section-subheading"
            >
              Success Stories
            </span>

            <h2
              id="title"
              className="reference-section-title"
            >

              Growth You Can{" "}

              <span className="heading-gradient">
                Measure
              </span>

            </h2>

          </div>

          <div
            className="metrics-strip"
            ref={statsRef}
          >

            {stats.map(
              (stat, index) => (

                <motion.div
                  className="metric-item"
                  key={stat.label}
                  initial={{
                    opacity: 0,
                    y: 30
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12
                  }}
                >

                  <div
                    className={`metric-icon color-${stat.color}`}
                  >

                    <i
                      className={`bi ${stat.icon}`}
                    ></i>

                  </div>

                  <strong>

                    {statCounts[index]}
                    {stat.suffix}

                  </strong>

                  <span>
                    {stat.label}
                  </span>

                </motion.div>

              )
            )}

          </div>

          <div className="success-proof-row">

            {successStories.map(
              (story) => (

                <div
                  className="success-proof-item"
                  key={story.text}
                >

                  <i
                    className={`bi ${story.icon}`}
                  ></i>

                  <span>
                    {story.text}
                  </span>

                </div>

              )
            )}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="internship-cta-section">

        <div className="container">

          <div className="internship-cta-box">

            <h2>
              Ready to Start Your Tech Journey?
            </h2>

            <div>

              <a
                href="/contact"
                className="btn"
              >

                <span className="btn-content">

                  Apply Now{" "}

                  <i className="bi bi-arrow-up-right ms-3"></i>

                </span>

              </a>

              <a
                href="/contact"
                className="internship-outline-btn"
              >
                Contact Us
              </a>

            </div>

          </div>

        </div>

      </section>

    </>
  );
}