import React, { useState } from "react";
import "../assets/css/Startup.css";
import "../assets/css/StartupFAQ.css";

export default function Startup() {

  const services = [
    {
      icon: "bi-cpu",
      title: "AI & Smart Solutions",
    },
    {
      icon: "bi-display",
      title: "Website & App Development",
    },
    {
      icon: "bi-bar-chart",
      title: "Startup Growth Strategy",
    },
    {
      icon: "bi-cloud",
      title: "Cloud & IoT Integration",
    },
  ];

  /* PROCESS DATA */
  const processData = [
    {
      icon: "bi-briefcase",
      title: "Concept",
      desc: "We listen, research, ideate, marinate, present, and Duis aute irure dolor in reprehenderit in voluptate.",
    },
    {
      icon: "bi-columns-gap",
      title: "Production",
      desc: "The best crews with the most up-to-date gear and technologies capture your story. Duis aute irure dolor.",
    },
    {
      icon: "bi-grid",
      title: "Post Production",
      desc: "Producers, editors, designers, and animators, shape and sculpt your video ‘til it’s ready for prime time.",
    },
    {
      icon: "bi-lightbulb",
      title: "Planning",
      desc: "Creative planning and smart strategy help businesses launch scalable and modern digital solutions.",
    },
  ];

  const processSteps = [
    {
      icon: "bi-chat-dots",
      title: "Idea Discussion",
      desc: "We understand your startup vision, goals, business model, and project requirements clearly.",
    },
    {
      icon: "bi-search",
      title: "Planning & Research",
      desc: "Detailed market research and strategic planning help create the right product roadmap.",
    },
    {
      icon: "bi-palette",
      title: "UI/UX Design",
      desc: "Modern user-focused interfaces are designed for better engagement and seamless experience.",
    },
    {
      icon: "bi-code-slash",
      title: "Product Development",
      desc: "Scalable and secure development using modern technologies tailored for startup growth.",
    },
    {
      icon: "bi-check2-circle",
      title: "Testing & Deployment",
      desc: "Complete testing and deployment ensure smooth performance across all devices and platforms.",
    },
    {
      icon: "bi-arrow-repeat",
      title: "Ongoing Support",
      desc: "Continuous updates, maintenance, and technical support help your startup grow faster.",
    },
  ];

  const chooseData = [
    {
      icon: "bi-lightning-charge",
      title: "Fast Delivery",
      desc: "Quick and efficient development process to launch your startup product faster.",
    },
    {
      icon: "bi-wallet2",
      title: "Startup-Friendly Pricing",
      desc: "Affordable and flexible pricing models designed specifically for startup businesses.",
    },
    {
      icon: "bi-people",
      title: "Dedicated Team",
      desc: "Experienced designers and developers focused completely on your startup success.",
    },
    {
      icon: "bi-diagram-3",
      title: "Scalable Solutions",
      desc: "Modern scalable architecture built to support future growth and expansion.",
    },
    {
      icon: "bi-cpu",
      title: "Modern Technologies",
      desc: "We use the latest technologies and frameworks for secure high-performance solutions.",
    },
    {
      icon: "bi-shield-check",
      title: "Long-Term Support",
      desc: "Continuous maintenance updates and technical assistance for long-term growth.",
    },
  ];

  const portfolioData = [
    {
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
      title: "IoT Dashboard Platform",
      tech: "React • Node.js • IoT",
      desc: "Built an IoT dashboard platform that improved device monitoring efficiency.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
      title: "AI Analytics System",
      tech: "Python • AI • Flask",
      desc: "Developed an AI analytics platform for real-time business insights and automation.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      title: "Startup CRM Solution",
      tech: "React • Firebase • API",
      desc: "Created a smart CRM system to streamline startup customer management workflows.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
      title: "Cloud Management App",
      tech: "Cloud • AWS • React",
      desc: "Designed a scalable cloud platform for secure startup infrastructure management.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
      title: "Smart Automation Tool",
      tech: "Automation • SaaS",
      desc: "Automated startup workflows and reduced manual operational tasks efficiently.",
    },
  ];

  /*
   * FAQ DATA
   *
   * Added two relevant FAQ items so the FAQ area
   * occupies the available space more naturally.
   */
  const faqData = [
    {
      question: "How long does MVP development take?",
      answer:
        "MVP development usually takes between 4 to 12 weeks depending on project complexity, features, and startup requirements.",
    },
    {
      question: "Do you provide post-launch support?",
      answer:
        "Yes, we provide continuous technical support, updates, maintenance, and performance monitoring.",
    },
    {
      question: "Can you help with UI/UX design?",
      answer:
        "Absolutely. We design modern, responsive, startup-focused UI/UX systems for web and mobile apps.",
    },
    {
      question: "Do you work with early-stage startups?",
      answer:
        "Yes, we specialize in helping early-stage startups validate ideas and launch scalable digital products.",
    },
    {
      question: "Can you help scale an existing product?",
      answer:
        "Yes. We can improve existing products by optimizing performance, upgrading architecture, adding new features, and preparing the platform for future growth.",
    },
    {
      question: "Do you provide maintenance after deployment?",
      answer:
        "Yes. We provide ongoing maintenance, bug fixes, performance improvements, security updates, and technical assistance after launch.",
    },
  ];

  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex((previousIndex) =>
      previousIndex === index ? -1 : index
    );
  };

  return (
    <div className="startup-page">

      {/* HEADER */}
      <div
        className="header-wrap"
        style={{
          backgroundImage:
            "linear-gradient(160deg, rgba(10,15,29,0.88), rgba(14,116,144,0.35), rgba(10,15,29,0.85)), url(/images/projenius-banner.webp)",
        }}
      >
        <div
          className="container title-section"
          style={{ position: "relative", zIndex: 2 }}
        >
          <h1 className="page-title">
            Startup{" "}
            <span className="startup-hero-accent">
              Supporter
            </span>
          </h1>

          <p>
            Comprehensive technology support &amp; scale-up services for founders
          </p>
        </div>
      </div>

      {/* STARTUP SECTION */}
      <section className="startup-section">

        <div className="startup-container">

          {/* LEFT SIDE */}
          <div className="startup-images">

            <div className="startup-img-one">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                alt=""
              />
            </div>

            <div className="startup-img-two">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
                alt=""
              />
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="startup-content">

            <div className="startup-mini-title">
              <span className="startup-mini-badge">
                <span className="startup-badge-dot"></span>
                <span>STARTUP SUPPORT PLATFORM</span>
              </span>
            </div>

            <h2 className="startup-main-heading">
              Building Smart Digital Solutions For{" "}
              <span className="startup-heading-highlight">
                Modern Startups.
              </span>
            </h2>

            <div className="startup-heading-line"></div>

            <p>
              We help startups transform innovative ideas into scalable
              digital products with powerful technology solutions,
              modern UI/UX experiences, and long-term technical support.
            </p>

            <div className="startup-services">

              {services.map((item, index) => (
                <div
                  className="startup-service-card"
                  key={index}
                >
                  <div className="startup-icon">
                    <i className={`bi ${item.icon}`}></i>
                  </div>

                  <h4>{item.title}</h4>
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* PROCESS SECTION */}
      <section className="process-section">

        <div className="container">

          <div className="process-top services-heading-block">

            <div className="services-heading-badge">
              <span className="services-heading-dot"></span>
              <span>OUR SERVICES</span>
            </div>

            <h2 className="services-main-heading">
              Smart Solutions for{" "}
              <span className="services-heading-accent">
                Modern Digital Needs
              </span>
            </h2>

            <div className="services-heading-line"></div>

          </div>

          <div className="process-flow">

            {processData.slice(0, 3).map((item, index) => (
              <React.Fragment key={index}>

                <div className="process-step">

                  <div className="process-step-number">
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="process-card">

                    <div className="process-icon">
                      <i className={`bi ${item.icon}`}></i>
                    </div>

                    <h3>{item.title}</h3>

                    <p>{item.desc}</p>

                  </div>

                </div>

                {index < 2 && (
                  <div className="process-arrow">
                    <div className="process-arrow-line"></div>
                    <i className="bi bi-chevron-right"></i>
                  </div>
                )}

              </React.Fragment>
            ))}

          </div>

        </div>

      </section>

      {/* STARTUP PROCESS */}
      <section className="startup-process-section">

        <div className="startup-process-bg">

          <div className="container">

            <div className="startup-process-content">

              <div className="startup-process-mini">

                <span className="startup-process-badge">
                  <span className="startup-process-dot"></span>
                  <span>STARTUP PROCESS</span>
                </span>

              </div>

              <h2 className="startup-process-title">
                Startup Development{" "}
                <span className="startup-process-title-accent">
                  Process
                </span>
              </h2>

              <div className="startup-process-line"></div>

              <div className="row g-4">

                {processSteps.map((item, index) => (
                  <div className="col-lg-6" key={index}>

                    <div className="startup-process-card">

                      <div className="startup-process-icon">
                        <i className={`bi ${item.icon}`}></i>
                      </div>

                      <div className="startup-process-text">

                        <h4>{item.title}</h4>

                        <p>{item.desc}</p>

                      </div>

                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section className="why-choose-section">

        <div className="container">

          <div className="row align-items-center why-choose-top">

            <div className="col-lg-5">

              <div className="why-choose-content">

                <div className="why-choose-mini-title">

                  <span className="why-choose-badge">
                    <span className="why-choose-dot"></span>
                    <span>WHY CHOOSE US</span>
                  </span>

                </div>

                <h2 className="why-choose-main-title">
                  Smart Startup
                  <br />
                  Solutions With
                  <br />
                  <span>Expert Support</span>
                </h2>

                <div className="why-choose-line"></div>

                <p>
                  We help startups build scalable digital products with
                  modern technologies, dedicated teams, and long-term
                  technical support for sustainable business growth.
                </p>

              </div>

            </div>

            <div className="col-lg-7">

              <div className="why-choose-image">

                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                  alt=""
                />

              </div>

            </div>

          </div>

          <div className="row g-4">

            {chooseData.map((item, index) => (
              <div
                className="col-lg-4 col-md-6"
                key={index}
              >

                <div className="why-card">

                  <div className="why-card-icon">
                    <i className={`bi ${item.icon}`}></i>
                  </div>

                  <h4>{item.title}</h4>

                  <p>{item.desc}</p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* PORTFOLIO */}
      <section className="startup-portfolio-section">

        <div className="container">

          <div className="startup-portfolio-top">

            <div className="portfolio-heading-mini">

              <span className="portfolio-heading-badge">
                <span className="portfolio-heading-dot"></span>
                <span>OUR PORTFOLIO</span>
              </span>

            </div>

            <h2 className="portfolio-heading-title">
              Startup Projects &amp;{" "}
              <span>Success Stories</span>
            </h2>

            <div className="portfolio-heading-line"></div>

          </div>

          <div
            id="portfolioCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="3000"
          >

            <div className="carousel-inner">

              {portfolioData.map((item, index) => (
                <div
                  className={`carousel-item ${
                    index === 0 ? "active" : ""
                  }`}
                  key={index}
                >

                  <div className="portfolio-images-row">

                    <div className="portfolio-small-image">
                      <img
                        src={
                          portfolioData[
                            (index - 2 + portfolioData.length) %
                              portfolioData.length
                          ].image
                        }
                        alt=""
                      />
                    </div>

                    <div className="portfolio-small-image">
                      <img
                        src={
                          portfolioData[
                            (index - 1 + portfolioData.length) %
                              portfolioData.length
                          ].image
                        }
                        alt=""
                      />
                    </div>

                    <div className="portfolio-small-image active-image">
                      <img src={item.image} alt="" />
                    </div>

                    <div className="portfolio-small-image">
                      <img
                        src={
                          portfolioData[
                            (index + 1) % portfolioData.length
                          ].image
                        }
                        alt=""
                      />
                    </div>

                    <div className="portfolio-small-image">
                      <img
                        src={
                          portfolioData[
                            (index + 2) % portfolioData.length
                          ].image
                        }
                        alt=""
                      />
                    </div>

                  </div>

                  <div className="portfolio-main-content">

                    <h3>{item.title}</h3>

                    <span>{item.tech}</span>

                    <p>{item.desc}</p>

                    <div className="portfolio-stars">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>

                  </div>

                </div>
              ))}

            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#portfolioCarousel"
              data-bs-slide="prev"
            >
              <i className="bi bi-arrow-left"></i>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#portfolioCarousel"
              data-bs-slide="next"
            >
              <i className="bi bi-arrow-right"></i>
            </button>

          </div>

        </div>

      </section>

      {/* =====================================================
          STARTUP FAQ SECTION
          ===================================================== */}
      <section className="startup-faq-section">

        <div className="container">

          {/* CENTERED FAQ HEADING */}
          <div className="startup-faq-top">

            <div className="startup-faq-mini">

              <span className="startup-faq-badge">
                <span className="startup-faq-dot"></span>
                <span>STARTUP FAQ</span>
              </span>

            </div>

            <h2 className="startup-faq-title">
              We help startups build scalable{" "}
              <span>digital products</span>
            </h2>

            <div className="startup-faq-line"></div>

            <p className="startup-faq-desc">
              We provide complete startup support including MVP
              development, UI/UX design, product scaling, and
              long-term technical maintenance solutions.
            </p>

          </div>

          {/* FAQ CONTENT */}
          <div className="row align-items-start startup-faq-content-row">

            {/* LEFT */}
            <div className="col-lg-6">

              <div className="startup-faq-left">

                <div className="startup-faq-images">

                  <div className="startup-faq-image">
                    <img
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                      alt=""
                    />
                  </div>

                  <div className="startup-faq-image">
                    <img
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
                      alt=""
                    />
                  </div>

                </div>

                <div className="startup-feature-box">

                  <div className="startup-feature-icon">
                    <i className="bi bi-display"></i>
                  </div>

                  <div className="startup-feature-content">

                    <h4>Modern UI/UX Design</h4>

                    <p>
                      We create startup-focused digital experiences
                      with scalable and modern user interface systems.
                    </p>

                  </div>

                </div>

                <div className="startup-feature-box">

                  <div className="startup-feature-icon">
                    <i className="bi bi-code-slash"></i>
                  </div>

                  <div className="startup-feature-content">

                    <h4>Startup Development</h4>

                    <p>
                      Fast and reliable product development process
                      designed specifically for startup businesses.
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* RIGHT — FAQ */}
            <div className="col-lg-6">

              <div className="startup-faq-right">

                <div className="startup-accordion">

                  {faqData.map((item, index) => {

                    const isOpen = openFaqIndex === index;

                    return (
                      <div
                        className={`startup-faq-item ${
                          isOpen ? "is-open" : ""
                        }`}
                        key={index}
                      >

                        <button
                          type="button"
                          className="startup-faq-question"
                          onClick={() => toggleFaq(index)}
                          aria-expanded={isOpen}
                        >

                          <span className="startup-faq-question-text">
                            {item.question}
                          </span>

                          {/* ONLY ONE ARROW */}
                          <i
                            className={`bi ${
                              isOpen
                                ? "bi-chevron-up"
                                : "bi-chevron-down"
                            } startup-faq-arrow`}
                            aria-hidden="true"
                          ></i>

                        </button>

                        <div
                          className={`startup-faq-answer-wrap ${
                            isOpen ? "is-open" : ""
                          }`}
                        >

                          <div className="startup-faq-answer">
                            {item.answer}
                          </div>

                        </div>

                      </div>
                    );

                  })}

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="startup-cta-section">

        <div className="cta-glow cta-glow-1"></div>
        <div className="cta-glow cta-glow-2"></div>

        <div className="container">

          <div className="startup-cta-card-box">

            <div className="startup-cta-inner">

              <span className="cta-badge">
                <span className="cta-badge-dot"></span>
                <span>GET STARTED TODAY</span>
              </span>

              <h2>
                Ready to Turn Your <br />
                <span className="cta-highlight">
                  Startup Vision
                </span>{" "}
                Into Reality?
              </h2>

              <div className="cta-heading-line"></div>

              <p>
                Partner with our expert team to build scalable,
                modern digital products. From ideation to deployment —
                we've got you covered.
              </p>

              <div className="cta-actions">

                <a
                  href="https://wa.me/918925450473?text=Hello%20ProJenius%2C%20I%20would%20like%20to%20book%20a%20free%20consultation%20for%20my%20startup."
                  target="_blank"
                  rel="noreferrer"
                  className="startup-cta-btn"
                >
                  <i className="bi bi-rocket-takeoff"></i>
                  Book Free Consultation
                </a>

                <a
                  href="https://wa.me/918925450473?text=Hello%20ProJenius%2C%20I%20need%20quick%20support%20for%20my%20project."
                  target="_blank"
                  rel="noreferrer"
                  className="startup-cta-btn-outline"
                >
                  <i className="bi bi-chat-dots"></i>
                  Contact Us
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}