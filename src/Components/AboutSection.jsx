import { useEffect, useState } from "react";
import { Bot, Boxes, Code2, Rocket } from "lucide-react";
import "../index.css";
import "../assets/css/AboutSection.css";
import CountUp from "./CountUp";

export default function AboutSection() {
    const [isAboutVisible, setIsAboutVisible] = useState(false);
    const [counterCycle, setCounterCycle] = useState(0);

    useEffect(() => {
        const elements = document.querySelectorAll(".about-v2 .reveal");

        const revealObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                    }
                });
            },
            { threshold: 0.2 }
        );

        elements.forEach((el) => revealObserver.observe(el));

        const aboutSection = document.querySelector(".about-v2");

        if (!aboutSection) {
            return () => revealObserver.disconnect();
        }

        const sectionObserver = new IntersectionObserver(
            ([entry]) => {
                setIsAboutVisible(entry.isIntersecting);
            },
            { threshold: 0.2 }
        );

        sectionObserver.observe(aboutSection);

        return () => {
            revealObserver.disconnect();
            sectionObserver.disconnect();
        };
    }, []);

    useEffect(() => {
        if (!isAboutVisible) return;

        const interval = setInterval(() => {
            setCounterCycle((prev) => prev + 1);
        }, 7000);

        return () => clearInterval(interval);
    }, [isAboutVisible]);

    return (
        <section className="about-section about-v2">

            {/* Decorative Background Elements */}
            <div className="about-bg-glow about-bg-glow--1"></div>
            <div className="about-bg-glow about-bg-glow--2"></div>
            <div className="about-dot-grid"></div>

            <div className="container">

                {/* =========================
                    SECTION HEADER
                ========================= */}
                <div className="about-header text-center reveal">

                    {/* WHO WE ARE BADGE */}
                    <span className="about-badge" id="sub-heading">
                        <span className="about-badge-dot"></span>
                        Who We Are
                    </span>

                    {/* MAIN TITLE */}
                    <h2 className="section-title" id="title">
                        Innovating Ideas Into{" "}
                        <span className="about-title-accent">
                            Smart Solutions
                        </span>
                    </h2>

                    {/* SAME LINE AS PROJECT SECTION */}
                    <div className="about-title-line"></div>

                    {/* DESCRIPTION */}
                    <p className="about-subtitle">
                        We blend technology, creativity, and deep industry
                        expertise to build products that drive real business
                        impact.
                    </p>

                </div>


                {/* =========================
                    MAIN ABOUT GRID
                ========================= */}
                <div className="about-grid">

                    {/* =========================
                        LEFT — IMAGES + STATS
                    ========================= */}
                    <div className="about-col-left reveal">

                        <div className="about-images-wrapper">

                            {/* MAIN IMAGE */}
                            <div className="about-img-main">
                                <img
                                    src="/images/about-main-image.png"
                                    alt="Team working on innovation"
                                />

                                <div className="about-img-main-border"></div>
                            </div>


                            {/* SECONDARY IMAGE */}
                            <div className="about-img-secondary">
                                <img
                                    src="/images/software-developement-training.png"
                                    alt="Software development training session"
                                />
                            </div>


                            {/* FLOATING STATS */}
                            <div className="about-stats-bar">

                                <div className="about-stat-item">
                                    <div className="about-stat-number">
                                        <CountUp
                                            key={`clients-${counterCycle}`}
                                            to={2200}
                                            suffix="+"
                                        />
                                    </div>

                                    <div className="about-stat-label">
                                        Satisfied Clients
                                    </div>
                                </div>


                                <div className="about-stat-divider"></div>


                                <div className="about-stat-item">
                                    <div className="about-stat-number">
                                        <CountUp
                                            key={`projects-${counterCycle}`}
                                            to={150}
                                            suffix="+"
                                        />
                                    </div>

                                    <div className="about-stat-label">
                                        Projects Delivered
                                    </div>
                                </div>


                                <div className="about-stat-divider"></div>


                                <div className="about-stat-item">
                                    <div className="about-stat-number">
                                        <CountUp
                                            key={`years-${counterCycle}`}
                                            to={5}
                                            suffix="+"
                                        />
                                    </div>

                                    <div className="about-stat-label">
                                        Years of Excellence
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>


                    {/* =========================
                        RIGHT — VIDEO + FEATURES
                    ========================= */}
                    <div className="about-col-right reveal">

                        {/* VIDEO */}
                        <div className="about-video-card">

                            <div className="about-video-glow"></div>

                            <div className="about-video-wrapper">

                                <iframe
                                    src="https://www.youtube.com/embed/1adzVmNh078"
                                    title="Projenius Introduction"
                                    frameBorder="0"
                                    allowFullScreen
                                ></iframe>

                            </div>

                        </div>


                        {/* FEATURES */}
                        <ul className="about-features">

                            {/* SOFTWARE */}
                            <li className="about-feature-card">

                                <span className="about-feature-icon icon-software">
                                    <Code2
                                        size={22}
                                        strokeWidth={2.2}
                                    />
                                </span>

                                <div className="about-feature-content">
                                    <span className="about-feature-title">
                                        Software & AI Solutions
                                    </span>

                                    <span className="about-feature-desc">
                                        Custom platforms powered by AI
                                    </span>
                                </div>

                            </li>


                            {/* IOT */}
                            <li className="about-feature-card">

                                <span className="about-feature-icon icon-iot">
                                    <Bot
                                        size={22}
                                        strokeWidth={2.2}
                                    />
                                </span>

                                <div className="about-feature-content">
                                    <span className="about-feature-title">
                                        Smart IoT Products
                                    </span>

                                    <span className="about-feature-desc">
                                        Connected devices that scale
                                    </span>
                                </div>

                            </li>


                            {/* TRAINING */}
                            <li className="about-feature-card">

                                <span className="about-feature-icon icon-training">
                                    <Boxes
                                        size={22}
                                        strokeWidth={2.2}
                                    />
                                </span>

                                <div className="about-feature-content">
                                    <span className="about-feature-title">
                                        Training & Mentorship
                                    </span>

                                    <span className="about-feature-desc">
                                        Hands-on workshops for teams
                                    </span>
                                </div>

                            </li>


                            {/* IMPACT */}
                            <li className="about-feature-card">

                                <span className="about-feature-icon icon-impact">
                                    <Rocket
                                        size={22}
                                        strokeWidth={2.2}
                                    />
                                </span>

                                <div className="about-feature-content">
                                    <span className="about-feature-title">
                                        Real-World Impact
                                    </span>

                                    <span className="about-feature-desc">
                                        Technology that solves problems
                                    </span>
                                </div>

                            </li>

                        </ul>

                    </div>

                </div>

            </div>

        </section>
    );
}