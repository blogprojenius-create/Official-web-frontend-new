import React, { useEffect, Suspense, lazy } from "react";
import '../index.css';
import '../assets/css/About-page.css';
import TeamSection from "../Components/TeamSection";
import TestimonialSection from "../Components/TestimonialSection";
import FooterTopSection from "../Components/FooterTopSection";
import CountUp from "../Components/CountUp";
import AOS from "aos";
import "aos/dist/aos.css";

const MagazineSection = lazy(() => import("../Components/Magazine"));

const counterImages = [
  "/images/projenius-banner-1.webp",
  "/images/projenius-banner-2.webp",
  "/images/projenius-banner-3.webp",
  "/images/projenius-banner-4.webp",
  "/images/about-main-image.png",
];

const whyImages = [
  "/images/projenius-banner-2.webp",
  "/images/gallery-1.webp",
  "/images/gallery-3.webp",
  "/images/iot-workshop.png",
  "/images/software-developement-training.png",
];

const counterStats = [
  {
    end: 25000,
    suffix: "+",
    title: "Projects Completed",
    description: "Delivering practical technology projects for students, startups, and businesses.",
  },
  {
    end: 1200,
    suffix: "+",
    title: "Students Guided",
    description: "Supporting learners through training, mentoring, and career-focused sessions.",
  },
  {
    end: 150,
    suffix: "+",
    title: "Workshops Hosted",
    description: "Creating hands-on learning experiences in development, IoT, AI, and innovation.",
  },
];

export default function About() {

    useEffect(() => {
  AOS.init({
    duration: 600,
    once: true,
    mirror: false,
    offset: 50,
    easing: "ease-out",
  });
}, []);


  return (
    <>
      <div className="header-wrap about-hero-wrap" style={{ backgroundImage: 'linear-gradient(120deg, rgba(18, 25, 41, 0.9), rgba(18, 25, 41, 0.58)), url(/images/projenius-banner.webp)' }}>
        <div className="container title-section about-hero-content">
          <h1 className="page-title">About Us</h1>
          <p className="about-hero-desc">
            We build practical digital products, IoT systems, AI solutions, and learning experiences for students, startups, and growing businesses.
          </p>
          <div className="about-hero-actions">
            <a
              href="https://wa.me/918925450473?text=Hello%20ProJenius%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
              className="about-hero-whatsapp"
              target="_blank"
              rel="noreferrer"
            >
              <span className="about-hero-whatsapp-icon">
                <i className="bi bi-whatsapp"></i>
              </span>
              <span>
                <strong>Contact on WhatsApp</strong>
              </span>
            </a>
          </div>
          <div className="about-hero-proof" aria-label="Projenius focus areas">
            <span>AI &amp; Software</span>
            <span>IoT Projects</span>
            <span>Training &amp; Mentorship</span>
          </div>
        </div>
        <div className="header-accent-bar" />
      </div>
      <section className="about-1 py-5">
  <div className="container">
    <div className="row align-items-center">

      {/* Left Circle Design */}
      <div className="col-lg-6 col-md-12" data-aos="fade-right" data-aos-delay="100">
        <div className="wrapper">
          <div className="about-principles" aria-label="Projenius vision mission and values">
            <div className="principle-orbit" aria-hidden="true"></div>

            <article className="principle-card principle-vision">
              <div className="principle-icon">
                <i className="bi bi-eye"></i>
              </div>
              <span>Vision</span>
              <p>Shape practical technology ideas into future-ready digital products.</p>
            </article>

            <article className="principle-card principle-mission">
              <div className="principle-icon">
                <i className="bi bi-rocket-takeoff"></i>
              </div>
              <span>Mission</span>
              <p>Build, mentor, and deliver solutions that create measurable real-world impact.</p>
            </article>

            <article className="principle-card principle-values">
              <div className="principle-icon">
                <i className="bi bi-gem"></i>
              </div>
              <span>Values</span>
              <p>Innovation, clarity, collaboration, and responsible engineering.</p>
            </article>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="col-lg-6 col-md-12" data-aos="fade-left" data-aos-delay="150">

        <span id="sub-heading">Who we are</span>

        <h2 className="section-title" id="title">
          Innovating Ideas Into Smart Solutions
        </h2>

        <p className="desc">
          Projenius is a technology-driven startup dedicated to building innovative
          solutions in software development, artificial intelligence, IoT, and
          product engineering. We work with businesses, startups, and students
          to create impactful digital products that solve real-world problems
          through creativity, technology, and innovation.
        </p>

        <div className="row">

          <div className="col-md-6 col-12">

            <ul className="icon-list">

              <li className="list">
                <i className="bi bi-check-circle-fill"></i>
                Innovative Software & AI Solutions
              </li>

              <li className="list">
                <i className="bi bi-check-circle-fill"></i>
                Training, Workshops & Mentorship
              </li>

            </ul>

          </div>

          <div className="col-md-6 col-12">

            <ul className="icon-list">

              <li className="list">
                <i className="bi bi-check-circle-fill"></i>
                Smart IoT & Product Development
              </li>

              <li className="list">
                <i className="bi bi-check-circle-fill"></i>
                Practical Technology for Real-World Impact
              </li>

            </ul>

          </div>

        </div>

        <a
          href="https://wa.me/918925450473?text=Hello%20ProJenius%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
          className="btn about-contact-btn"
          target="_blank"
          rel="noreferrer"
        >
          <span className="btn-content">Contact Us</span>
        </a>

      </div>

    </div>
  </div>
</section>
      {/* ===== ACHIEVEMENTS SECTION — PREMIUM ===== */}
      <section className="achieve-section">

        {/* Decorative background elements */}
        <div className="achieve-glow achieve-glow--1"></div>
        <div className="achieve-glow achieve-glow--2"></div>
        <div className="achieve-dot-grid"></div>

        <div className="container">

          {/* Section Header */}
          <div className="achieve-header" data-aos="fade-up">
            <span className="achieve-badge">
              <span className="achieve-badge-dot"></span>
              Milestones
            </span>
            <h2 className="achieve-title">
              Our <span className="achieve-title-accent">Achievements</span>
            </h2>
            <p className="achieve-subtitle">
              Numbers that reflect our commitment to innovation, learning, and real-world impact.
            </p>
          </div>

          {/* Achievement Cards Grid */}
          <div className="achieve-cards">
            {counterStats.map((stat, index) => (
              <div
                className="achieve-card"
                data-aos="fade-up"
                data-aos-delay={index * 120}
                key={stat.title}
              >
                {/* Glow ring behind icon */}
                <div className="achieve-card-icon-wrap">
                  <div className={`achieve-card-icon achieve-card-icon--${index}`}>
                    {index === 0 && (
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                    )}
                    {index === 1 && (
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    )}
                    {index === 2 && (
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                    )}
                  </div>
                </div>

                {/* Counter */}
                <div className="achieve-card-number">
                  <CountUp to={stat.end} suffix={stat.suffix} />
                </div>

                {/* Title */}
                <h6 className="achieve-card-title">{stat.title}</h6>

                {/* Description */}
                <p className="achieve-card-desc">{stat.description}</p>

                {/* Decorative bottom bar */}
                <div className="achieve-card-bar">
                  <div className={`achieve-card-bar-fill achieve-card-bar-fill--${index}`}></div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      <TeamSection />
      <section className="about-3 container py-5">
        <div className="row">
          <div className="col-lg-6 col-12">
            <span id="sub-heading">Why Choose us?</span>
            <h2 className="section-title" id="title">Why Projenius Stands Out in Innovation</h2>
            <p className="section-desc">We combine innovation, technology, and practical expertise to deliver reliable solutions, quality services, and impactful learning experiences for everyone.</p>
            <div
  className="why-img-slider"
  aria-label="Projenius company achievements"
  data-aos="zoom-in"
  data-aos-duration="1000"
>
              <img
                src="/images/iot-course.webp"
                alt="Projenius IoT course"
                className="why-img why-img-1"
                loading="lazy"
                decoding="async"
              />
              <img
                src="/images/software-developement-training.png"
                alt="Projenius software development training"
                className="why-img why-img-2"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <div className="col-lg-6 col-12 why-right">
            <div
  className="icon-box"
  data-aos="fade-left"
  data-aos-delay="100"
>
              <div className="row">
                <div className="col-3 col-sm-2">
                  <div className="icon">
                    <i className="bi bi-lightbulb"></i>
                  </div>
                </div>
                <div className="col-9 col-sm-10">
                  <h3 className="icon-box-heading">Innovative Technology Solutions</h3>
                  <p className="icon-box-desc">We build smart and scalable solutions using AI, IoT, web, and mobile technologies for real-world applications.</p>
                </div>
              </div>
            </div>
            <div
  className="icon-box mt-3"
  data-aos="fade-left"
  data-aos-delay="300"
>
              <div className="row">
                <div className="col-3 col-sm-2">
                  <div className="icon">
                    <i className="bi bi-people"></i>
                  </div>
                </div>
                <div className="col-9 col-sm-10">
                  <h3 className="icon-box-heading">Learning & Mentorship Support</h3>
                  <p className="icon-box-desc">We empower students through workshops, training programs, academic guidance, and hands-on technical learning experiences.</p>
                </div>
              </div>
            </div>
            <div className="icon-box mt-3">
              <div className="row">
                <div className="col-3 col-sm-2">
                  <div className="icon">
                    <i className="bi bi-diagram-3"></i>
                  </div>
                </div>
                <div className="col-9 col-sm-10">
                  <h3 className="icon-box-heading">Industry-Focused Development</h3>
                  <p className="icon-box-desc">Our team develops practical digital products and hardware systems tailored for businesses, startups, and industries.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="magazine-load-section">
        <Suspense fallback={<div className="mag-loading-fallback"><p className="section-desc">Loading magazine…</p></div>}>
          <MagazineSection />
        </Suspense>
      </section>
      <section className="awards-section py-5" data-aos="zoom-in-up" data-aos-duration="700">
        <div className="container">

          <div className="text-center mb-5">
            <span id="sub-heading" data-aos="fade-up" data-aos-delay="150">Achievements</span>
            <h2 className="section-title" id="title" data-aos="fade-up" data-aos-delay="200">Awards & Recognition</h2>

            <p className="section-desc awards-desc">
              Celebrating achievements, innovation, creativity, and milestones that showcase our passion for technology, design, and impactful digital solutions.
            </p>
          </div>

          <div className="awards-masonry">

            <div className="award-item" data-aos="fade-right" data-aos-delay="50">
              <img src="images/gallery-1.webp" alt="Award 1" loading="lazy" decoding="async" />

              <div className="award-content">
                <h4 className="award-title">Honouring Excellence</h4>
                <p className="award-subtitle">
                  Celebrating excellence, innovation, and success through achievements.
                </p>
              </div>
            </div>

            <div className="award-item" data-aos="fade-down" data-aos-delay="100">
              <img src="images/gallery-2.webp" alt="Award 2" loading="lazy" decoding="async" />

              <div className="award-content">
                <h4 className="award-title">Achievement Recognition</h4>
                <p className="award-subtitle">
                  Honoring talented students for achievements, excellence, and dedication.
                </p>
              </div>
            </div>

            <div className="award-item" data-aos="fade-left" data-aos-delay="150">
              <img src="images/gallery-3.webp" alt="Award 3" loading="lazy" decoding="async" />

              <div className="award-content">
                <h4 className="award-title">Career Guidance Session</h4>
                <p className="award-subtitle">
                  Industry experts sharing insights, innovation, and real-world knowledge.
                </p>
              </div>
            </div>

            <div className="award-item" data-aos="zoom-in" data-aos-delay="200">
              <img src="images/gallery-4.webp" alt="Award 4" loading="lazy" decoding="async" />

              <div className="award-content">
                <h4 className="award-title">Student Mentoring Program</h4>
                <p className="award-subtitle">
                  Guiding students with mentorship, support, and career-focused learning.
                </p>
              </div>
            </div>

            <div className="award-item" data-aos="flip-left" data-aos-delay="250">
              <img src="images/gallery-5.webp" alt="Award 5" loading="lazy" decoding="async" />

              <div className="award-content">
                <h4 className="award-title">SRM Hands-on Workshop</h4>
                <p className="award-subtitle">
                  Providing practical technical training to build industry-ready skills.
                </p>
              </div>
            </div>

            <div className="award-item" data-aos="fade-up-left" data-aos-delay="300">
              <img src="images/gallery-6.webp" alt="Award 6" loading="lazy" decoding="async" />

              <div className="award-content">
                <h4 className="award-title">Interactive Learning Session</h4>
                <p className="award-subtitle">
                  Hands-on lab sessions designed to improve practical learning experience.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <TestimonialSection />
      <FooterTopSection />
    </>

  );
}