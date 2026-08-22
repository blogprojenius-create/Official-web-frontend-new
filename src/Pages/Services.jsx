import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Reveal from "../Components/Reveal";
import "../index.css";
import "../assets/css/Service-page.css";
import FooterTopSection from "../Components/FooterTopSection";
import PriceTableSection from "../Components/PriceTableSection";

export default function Services() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.12 });
  const whatsappNumber = "918925450473";

  const developmentServices = [
    {
      title: "Website Development",
      icon: "bi bi-window-stack icon",
      desc:
        "Responsive business websites with fast loading pages, clear navigation, SEO-friendly structure, and polished visual design.",
    },
    {
      title: "Web App Development",
      icon: "bi bi-code-square icon",
      desc:
        "Custom web applications with dashboards, user flows, forms, APIs, admin panels, and scalable frontend architecture.",
    },
    {
      title: "Mobile App Development",
      icon: "bi bi-phone icon",
      desc:
        "Mobile-first app experiences for Android and cross-platform use cases with clean screens and practical feature flows.",
    },
    {
      title: "E-Commerce Solutions",
      icon: "bi bi-cart-check icon",
      desc:
        "Online stores with product catalogs, enquiry flows, payment-ready structure, order management, and conversion-focused pages.",
    },
    {
      title: "UI / UX for Products",
      icon: "bi bi-palette icon",
      desc:
        "Wireframes, prototypes, design systems, and interface improvements that make products easier to understand and use.",
    },
    {
      title: "Product Maintenance",
      icon: "bi bi-tools icon",
      desc:
        "Ongoing updates, bug fixes, performance improvements, feature additions, and technical support after launch.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const getCardVariants = (index) => ({
    hidden: {
      opacity: 0,
      x: index % 2 === 0 ? -80 : 80,
      rotateY: index % 2 === 0 ? -15 : 15,
      scale: 0.85,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  });

  const headingVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const getWhatsAppLink = (serviceTitle) => {
    const message = `Hello ProJenius, I would like to know more about your ${serviceTitle} service.`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <>
      <section className="header-wrap" style={{backgroundImage:'linear-gradient(160deg, rgba(18,25,41,0.88), rgba(0,170,162,0.35), rgba(18,25,41,0.88)), url(/images/projenius-banner.webp)'}}>
        <div className="container title-section" style={{position:'relative', zIndex:2}}>
          <h1 className="page-title">Development Services</h1>
          <p style={{color:'rgba(255,255,255,0.78)', fontSize:'16px', marginTop:'10px', fontWeight:400}}>Smart digital solutions built for real-world impact</p>
        </div>
        <div className="header-accent-bar" />
      </section>

      <section className="development-hero">
        {/* Ambient background glow orbs */}
        <div className="dev-hero-glow dev-hero-glow-1"></div>
        <div className="dev-hero-glow dev-hero-glow-2"></div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row align-items-center g-5">

            <div className="col-lg-6">
              <div className="hero-content">

                <div className="hero-badge-wrapper">
                  <span className="hero-tag">
                    <i className="bi bi-cpu me-2"></i>
                    ENTERPRISE DEVELOPMENT SERVICES
                  </span>
                </div>

                <h1>
                  Transform Ideas Into <br />
                  <span className="hero-title-gradient">Powerful Digital Products</span>
                </h1>

                <p className="hero-subtext">
                  We design and develop high-performance websites, custom web applications, 
                  mobile apps, and scalable software architecture engineered for real business growth and automation.
                </p>

                <div className="hero-feature-pills">
                  <span className="hero-pill"><i className="bi bi-check2-circle"></i> Custom Architecture</span>
                  <span className="hero-pill"><i className="bi bi-check2-circle"></i> High Performance</span>
                  <span className="hero-pill"><i className="bi bi-check2-circle"></i> SEO & Security Built-in</span>
                </div>

                <div className="hero-buttons">
                  <a
                    href="https://wa.me/918925450473?text=Hello%20ProJenius%2C%20I%20would%20like%20to%20start%20a%20development%20project."
                    target="_blank"
                    rel="noreferrer"
                    className="hero-btn-primary"
                  >
                    <i className="bi bi-rocket-takeoff me-2"></i>
                    Start Your Project
                  </a>

                  <a href="#services-list" className="hero-btn-secondary">
                    <i className="bi bi-grid-3x3-gap me-2"></i>
                    Explore Services
                  </a>
                </div>

                <div className="hero-stats-row">
                  <div className="hero-stat-item">
                    <span className="stat-number">50+</span>
                    <span className="stat-label">Projects Delivered</span>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="hero-stat-item">
                    <span className="stat-number">99.9%</span>
                    <span className="stat-label">Client Satisfaction</span>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="hero-stat-item">
                    <span className="stat-number">24/7</span>
                    <span className="stat-label">Technical Support</span>
                  </div>
                </div>

              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-image-frame">
                <div className="hero-glass-card">
                  <div className="glass-card-header">
                    <div className="window-dots">
                      <span className="dot dot-red"></span>
                      <span className="dot dot-yellow"></span>
                      <span className="dot dot-green"></span>
                    </div>
                    <span className="window-title">ProJenius Tech Suite v2.4</span>
                  </div>
                  <img
                    src="/images/services-popup.png"
                    alt="Development Services Ecosystem"
                    className="img-fluid"
                  />
                  <div className="hero-card-floating-badge">
                    <i className="bi bi-lightning-charge-fill me-2" style={{ color: 'rgb(0, 170, 162)' }}></i>
                    <span>Production Ready Code</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="service-1" id="services-list" ref={sectionRef}>
        <div className="container">

          <div className="section-heading text-center">
            <motion.h2
              id="title"
              variants={headingVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {"< What do you want to build? />"}
            </motion.h2>

            <div className="service-heading-line" aria-hidden="true" />

            <p className="service-description">
              We create websites, web applications, mobile apps,
              e-commerce platforms and custom software solutions
              that help businesses automate workflows, improve
              customer experiences and scale faster.
            </p>
          </div>

          <motion.div
            className="row justify-content-center"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {developmentServices.map((service, index) => (
              <div className="col-lg-4 col-md-6 col-12 mb-4" key={index}>
                <motion.div
                  className="box"
                  variants={getCardVariants(index)}
                  whileHover={{
                    y: -8,
                    transition: {
                      duration: 0.3,
                    },
                  }}
                >
                  <div className="service-icon">
                    <i className={service.icon}></i>
                  </div>

                  <h4 className="box-title">
                    {service.title}
                  </h4>

                  <p className="box-desc">
                    {service.desc}
                  </p>

                  <a
                    href={getWhatsAppLink(service.title)}
                    className="service-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    To get More Info
                  </a>
                </motion.div>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      <div>
        <Reveal width="100%" delay={0.23}><PriceTableSection /></Reveal>
        <Reveal width="100%" delay={0.29}><FooterTopSection /></Reveal>
      </div>
    </>
  );
}