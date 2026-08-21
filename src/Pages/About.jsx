import React, { useEffect, useRef, useState, Suspense, lazy } from "react";
import "../index.css";
import "../assets/css/About-page.css";
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
    description:
      "Delivering practical technology projects for students, startups, and businesses.",
  },
  {
    end: 1200,
    suffix: "+",
    title: "Students Guided",
    description:
      "Supporting learners through training, mentoring, and career-focused sessions.",
  },
  {
    end: 150,
    suffix: "+",
    title: "Workshops Hosted",
    description:
      "Creating hands-on learning experiences in development, IoT, AI, and innovation.",
  },
];

export default function About() {
  const achievementRef = useRef(null);
  const [achievementVisible, setAchievementVisible] = useState(false);
  const [counterRun, setCounterRun] = useState(0);

  useEffect(() => {
    const section = achievementRef.current;
    if (!section) return;

    let repeatTimer = null;

    const startCounterLoop = () => {
      setCounterRun((value) => value + 1);

      if (repeatTimer) clearInterval(repeatTimer);

      repeatTimer = setInterval(() => {
        setCounterRun((value) => value + 1);
      }, 5000);
    };

    const stopCounterLoop = () => {
      if (repeatTimer) {
        clearInterval(repeatTimer);
        repeatTimer = null;
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;
        setAchievementVisible(isVisible);

        if (isVisible) {
          startCounterLoop();
        } else {
          stopCounterLoop();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(section);

    return () => {
      stopCounterLoop();
      observer.disconnect();
    };
  }, []);

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
      {/* =========================================================
          HERO SECTION
          ========================================================= */}

      <div
        className="header-wrap about-hero-wrap"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(10, 18, 34, 0.88), rgba(10, 18, 34, 0.68)), url(/images/projenius-banner.webp)",
        }}
      >
        <div className="about-hero-content">

          {/* MAIN HEADING */}
          <h1 className="page-title">
            <span className="about-title-accent">About</span>{" "}
            <span className="about-title-white">Us</span>
          </h1>

          {/* ACCENT LINE */}
          <div className="about-hero-line"></div>

          {/* DESCRIPTION */}
          <p className="about-hero-desc">
            We build practical digital products, IoT systems, AI solutions,
            and learning experiences for students, startups, and growing
            businesses.
          </p>

          {/* FOCUS AREAS */}
          <div
            className="about-hero-proof"
            aria-label="Projenius focus areas"
          >
            <span>AI &amp; Software</span>
            <span>IoT Projects</span>
            <span>Training &amp; Mentorship</span>
            <span>Web Development</span>
            <span>AI Solutions </span>
            <span>Project Guidance</span>
          </div>

          {/* WHATSAPP BUTTON */}
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
        </div>

        <div className="header-accent-bar"></div>
      </div>


      {/* =========================================================
          ABOUT / WHO WE ARE SECTION
          ========================================================= */}

      <section className="about-1 py-5">
        <div className="container">

          {/* =========================
              WHO WE ARE - FULL WIDTH HEADING
              ========================= */}

          <div className="about-heading-fullwidth">

            <span className="about-section-badge">
              <span className="about-badge-dot"></span>
              WHO WE ARE
            </span>

            <h2 className="about-main-title">
              Innovating Ideas Into <span>Smart Solutions</span>
            </h2>

            <div className="about-title-line"></div>

          </div>


          {/* =========================
              ALL ABOUT CONTENT
              ========================= */}

          <div className="row align-items-center about-content-row">

            {/* LEFT CIRCLE DESIGN */}

            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="wrapper">

                <div
                  className="about-principles"
                  aria-label="Projenius vision mission and values"
                >

                  <div
                    className="principle-orbit"
                    aria-hidden="true"
                  ></div>


                  {/* VISION */}

                  <article className="principle-card principle-vision">

                    <div className="principle-icon">
                      <i className="bi bi-eye"></i>
                    </div>

                    <span>Vision</span>

                    <p>
                      Shape practical technology ideas into future-ready
                      digital products.
                    </p>

                  </article>


                  {/* MISSION */}

                  <article className="principle-card principle-mission">

                    <div className="principle-icon">
                      <i className="bi bi-rocket-takeoff"></i>
                    </div>

                    <span>Mission</span>

                    <p>
                      Build, mentor, and deliver solutions that create
                      measurable real-world impact.
                    </p>

                  </article>


                  {/* VALUES */}

                  <article className="principle-card principle-values">

                    <div className="principle-icon">
                      <i className="bi bi-gem"></i>
                    </div>

                    <span>Values</span>

                    <p>
                      Innovation, clarity, collaboration, and responsible
                      engineering.
                    </p>

                  </article>

                </div>

              </div>
            </div>


            {/* RIGHT CONTENT */}

            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-left"
              data-aos-delay="150"
            >

              <p className="desc">
                Projenius is a technology-driven startup dedicated to
                building innovative solutions in software development,
                artificial intelligence, IoT, and product engineering.
                We work with businesses, startups, and students to create
                impactful digital products that solve real-world problems
                through creativity, technology, and innovation.
              </p>


              {/* FEATURES */}

              <div className="row about-features-stack">

                <div className="col-12">

                  <ul className="icon-list">

                    <li className="list">
                      <i className="bi bi-check-circle-fill"></i>
                      Innovative Software &amp; AI Solutions
                    </li>

                    <li className="list">
                      <i className="bi bi-check-circle-fill"></i>
                      Training, Workshops &amp; Mentorship
                    </li>

                    <li className="list">
                      <i className="bi bi-check-circle-fill"></i>
                      Web Development &amp; Digital Products
                    </li>

                    <li className="list">
                      <i className="bi bi-check-circle-fill"></i>
                      AI &amp; Machine Learning Solutions
                    </li>

                  </ul>

                </div>


                <div className="col-12">

                  <ul className="icon-list">

                    <li className="list">
                      <i className="bi bi-check-circle-fill"></i>
                      Smart IoT &amp; Product Development
                    </li>

                    <li className="list">
                      <i className="bi bi-check-circle-fill"></i>
                      Practical Technology for Real-World Impact
                    </li>

                    <li className="list">
                      <i className="bi bi-check-circle-fill"></i>
                      Startup &amp; Business Support
                    </li>

                    <li className="list">
                      <i className="bi bi-check-circle-fill"></i>
                      Industry-Ready Technical Training
                    </li>

                  </ul>

                </div>

              </div>


              {/* CONTACT BUTTON */}

              <a
                href="https://wa.me/918925450473?text=Hello%20ProJenius%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                className="btn about-contact-btn"
                target="_blank"
                rel="noreferrer"
              >
                <span className="btn-content">
                  Contact Us
                </span>
              </a>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          ACHIEVEMENTS SECTION
          ========================================================= */}

      <section className="achieve-section" ref={achievementRef}>

        {/* Decorative background elements */}

        <div className="achieve-glow achieve-glow--1"></div>

        <div className="achieve-glow achieve-glow--2"></div>

        <div className="achieve-dot-grid"></div>


        <div className="container">

          {/* SECTION HEADER */}

          <div
            className="achieve-header"
            data-aos="fade-up"
          >

            <span className="about-section-badge">

              <span className="about-badge-dot"></span>

              MILESTONES

            </span>


            <h2 className="about-main-title achievement-main-title">

              Our <span>Achievements</span>

            </h2>


            <div className="about-title-line"></div>


            <p className="achieve-subtitle">
              Numbers that reflect our commitment to innovation,
              learning, and real-world impact.
            </p>

          </div>


          {/* ACHIEVEMENT CARDS */}

          <div className="achieve-cards">

            {counterStats.map((stat, index) => (

              <div
                className="achieve-card"
                data-aos="fade-up"
                data-aos-delay={index * 120}
                key={stat.title}
              >

                {/* ICON */}

                <div className="achieve-card-icon-wrap">

                  <div
                    className={`achieve-card-icon achieve-card-icon--${index}`}
                  >

                    {index === 0 && (

                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                      </svg>

                    )}


                    {index === 1 && (

                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>

                    )}


                    {index === 2 && (

                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                      </svg>

                    )}

                  </div>

                </div>


                {/* COUNTER */}

                <div className="achieve-card-number">

                  {achievementVisible && (
                    <CountUp
                      key={`${stat.title}-${counterRun}`}
                      to={stat.end}
                      suffix={stat.suffix}
                    />
                  )}

                </div>


                {/* TITLE */}

                <h6 className="achieve-card-title">
                  {stat.title}
                </h6>


                {/* DESCRIPTION */}

                <p className="achieve-card-desc">
                  {stat.description}
                </p>


                {/* BOTTOM BAR */}

                <div className="achieve-card-bar">

                  <div
                    className={`achieve-card-bar-fill achieve-card-bar-fill--${index}`}
                  ></div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          TEAM
          ========================================================= */}

      <TeamSection />


      {/* =========================================================
          WHY CHOOSE US
          ========================================================= */}

      <section className="about-3 container py-5">

        {/* =========================
            WHY CHOOSE US HEADING
            ========================= */}

        <div className="about-section-heading why-heading-fullwidth">

          <span className="about-section-badge">

            <span className="about-badge-dot"></span>

            WHY CHOOSE US?

          </span>


          <h2 className="about-main-title">

            Why Projenius Stands Out in{" "}
            <span>Innovation</span>

          </h2>


          <div className="about-title-line"></div>


          <p className="section-desc why-centered-description">

            We combine innovation, technology, and practical expertise
            to deliver reliable solutions,
            <br className="desktop-break" />
            quality services, and impactful learning experiences
            for everyone.

          </p>

        </div>


        {/* =========================
            WHY CHOOSE US CONTENT
            ========================= */}

        <div className="row why-content-row">


          {/* LEFT IMAGE */}

          <div className="col-lg-6 col-12">

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


          {/* RIGHT CONTENT */}

          <div className="col-lg-6 col-12 why-right">


            {/* CARD 1 */}

            <div
              className="icon-box"
              data-aos="fade-left"
              data-aos-delay="100"
            >

              <div className="row">

                <div className="col-3 col-sm-2">

                  <div className="icon">

                    <i className="bi bi-cpu"></i>

                  </div>

                </div>


                <div className="col-9 col-sm-10">

                  <h3 className="icon-box-heading">
                    Innovative Technology Solutions
                  </h3>


                  <p className="icon-box-desc">
                    We build smart and scalable solutions using AI,
                    IoT, web, and mobile technologies for real-world
                    applications.
                  </p>

                </div>

              </div>

            </div>


            {/* CARD 2 */}

            <div
              className="icon-box mt-3"
              data-aos="fade-left"
              data-aos-delay="300"
            >

              <div className="row">

                <div className="col-3 col-sm-2">

                  <div className="icon">

                    <i className="bi bi-mortarboard"></i>

                  </div>

                </div>


                <div className="col-9 col-sm-10">

                  <h3 className="icon-box-heading">
                    Learning &amp; Mentorship Support
                  </h3>


                  <p className="icon-box-desc">
                    We empower students through workshops, training
                    programs, academic guidance, and hands-on
                    technical learning experiences.
                  </p>

                </div>

              </div>

            </div>


            {/* CARD 3 */}

            <div className="icon-box mt-3">

              <div className="row">

                <div className="col-3 col-sm-2">

                  <div className="icon">

                    <i className="bi bi-code-slash"></i>

                  </div>

                </div>


                <div className="col-9 col-sm-10">

                  <h3 className="icon-box-heading">
                    Industry-Focused Development
                  </h3>


                  <p className="icon-box-desc">
                    Our team develops practical digital products
                    and hardware systems tailored for businesses,
                    startups, and industries.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          MAGAZINE
          ========================================================= */}

      <section className="magazine-load-section">

        <Suspense
          fallback={
            <div className="mag-loading-fallback">
              <p className="section-desc">
                Loading magazine…
              </p>
            </div>
          }
        >

          <MagazineSection />

        </Suspense>

      </section>


      {/* =========================================================
          AWARDS & RECOGNITION
          ========================================================= */}

      <section
        className="awards-section py-5"
        data-aos="zoom-in-up"
        data-aos-duration="700"
      >

        <div className="container">

          <div className="awards-heading text-center">


            {/* BADGE */}

            <span
              className="awards-section-badge"
              data-aos="fade-up"
              data-aos-delay="150"
            >

              <span className="awards-badge-dot"></span>

              ACHIEVEMENTS

            </span>


            {/* TITLE */}

            <h2
              className="section-title"
              id="title"
              data-aos="fade-up"
              data-aos-delay="200"
            >

              Awards &amp; <span>Recognition</span>

            </h2>


            <div className="awards-title-line"></div>


            {/* DESCRIPTION */}

            <p className="section-desc awards-desc">

              Celebrating achievements, innovation, creativity, and
              milestones that showcase our passion for technology,
              design, and impactful digital solutions.

            </p>

          </div>


          {/* AWARDS GRID */}

          <div className="awards-masonry">


            {/* AWARD 1 */}

            <div
              className="award-item"
              data-aos="fade-right"
              data-aos-delay="50"
            >

              <img
                src="/images/gallery-1.webp"
                alt="Award 1"
                loading="lazy"
                decoding="async"
              />


              <div className="award-content">

                <h4 className="award-title">
                  Honouring Excellence
                </h4>

                <p className="award-subtitle">
                  Celebrating excellence, innovation, and success
                  through achievements.
                </p>

              </div>

            </div>


            {/* AWARD 2 */}

            <div
              className="award-item"
              data-aos="fade-down"
              data-aos-delay="100"
            >

              <img
                src="/images/gallery-2.webp"
                alt="Award 2"
                loading="lazy"
                decoding="async"
              />


              <div className="award-content">

                <h4 className="award-title">
                  Achievement Recognition
                </h4>

                <p className="award-subtitle">
                  Honoring talented students for achievements,
                  excellence, and dedication.
                </p>

              </div>

            </div>


            {/* AWARD 3 */}

            <div
              className="award-item"
              data-aos="fade-left"
              data-aos-delay="150"
            >

              <img
                src="/images/gallery-3.webp"
                alt="Award 3"
                loading="lazy"
                decoding="async"
              />


              <div className="award-content">

                <h4 className="award-title">
                  Career Guidance Session
                </h4>

                <p className="award-subtitle">
                  Industry experts sharing insights, innovation,
                  and real-world knowledge.
                </p>

              </div>

            </div>


            {/* AWARD 4 */}

            <div
              className="award-item"
              data-aos="zoom-in"
              data-aos-delay="200"
            >

              <img
                src="/images/gallery-4.webp"
                alt="Award 4"
                loading="lazy"
                decoding="async"
              />


              <div className="award-content">

                <h4 className="award-title">
                  Student Mentoring Program
                </h4>

                <p className="award-subtitle">
                  Guiding students with mentorship, support, and
                  career-focused learning.
                </p>

              </div>

            </div>


            {/* AWARD 5 */}

            <div
              className="award-item"
              data-aos="flip-left"
              data-aos-delay="250"
            >

              <img
                src="/images/gallery-5.webp"
                alt="Award 5"
                loading="lazy"
                decoding="async"
              />


              <div className="award-content">

                <h4 className="award-title">
                  SRM Hands-on Workshop
                </h4>

                <p className="award-subtitle">
                  Providing practical technical training to build
                  industry-ready skills.
                </p>

              </div>

            </div>


            {/* AWARD 6 */}

            <div
              className="award-item"
              data-aos="fade-up-left"
              data-aos-delay="300"
            >

              <img
                src="/images/gallery-6.webp"
                alt="Award 6"
                loading="lazy"
                decoding="async"
              />


              <div className="award-content">

                <h4 className="award-title">
                  Interactive Learning Session
                </h4>

                <p className="award-subtitle">
                  Hands-on lab sessions designed to improve practical
                  learning experience.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          TESTIMONIALS
          ========================================================= */}

      <TestimonialSection />


      {/* =========================================================
          FOOTER
          ========================================================= */}

      <FooterTopSection />

    </>
  );
}