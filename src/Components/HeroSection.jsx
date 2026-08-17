import React, { useEffect, useState } from "react";
import "../assets/css/HeroSection.css";

const slides = [
    {
        bg: "/images/projenius-banner.webp",
        thumb: "/images/projenius-banner.webp",
        buttonText: "Explore Courses",
    },
    {
        bg: "/images/projenius-banner-1.webp",
        thumb: "/images/projenius-banner-1.webp",
        buttonText: "Explore IoT",
    },
    {
        bg: "/images/projenius-banner-2.webp",
        thumb: "/images/projenius-banner-2.webp",
        buttonText: "Explore Web Design",
    },
    {
        bg: "/images/projenius-banner-3.webp",
        thumb: "/images/projenius-banner-3.webp",
        buttonText: "Explore Workshops",
    },
    {
        bg: "/images/projenius-banner-4.webp",
        thumb: "/images/projenius-banner-4.webp",
        buttonText: "Explore Software",
    },
];

/* Decorative floating particles */
const PARTICLES = [
    {
        size: 10,
        top: "18%",
        left: "12%",
        duration: "5.2s",
        delay: "0s",
    },
    {
        size: 6,
        top: "65%",
        left: "8%",
        duration: "6.8s",
        delay: "1s",
    },
    {
        size: 14,
        top: "35%",
        left: "88%",
        duration: "7.1s",
        delay: "0.4s",
    },
    {
        size: 8,
        top: "75%",
        left: "82%",
        duration: "5.6s",
        delay: "2s",
    },
    {
        size: 5,
        top: "50%",
        left: "55%",
        duration: "4.9s",
        delay: "0.8s",
    },
    {
        size: 12,
        top: "22%",
        left: "70%",
        duration: "6.3s",
        delay: "1.5s",
    },
];

/* Scroll reveal */
function useScrollReveal(
    selector = ".reveal, .reveal-left, .reveal-right"
) {
    useEffect(() => {
        const els = document.querySelectorAll(selector);

        if (!els.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15,
            }
        );

        els.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [selector]);
}

/* Mobile dots */
function DotIndicators({ total, active, onDotClick }) {
    return (
        <div
            style={{
                display: "flex",
                gap: "8px",
                justifyContent: "center",
                marginTop: "24px",
            }}
        >
            {Array.from({ length: total }).map((_, i) => (
                <button
                    key={i}
                    className={`hero-slide-dot ${i === active ? "active" : ""
                        }`}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => onDotClick(i)}
                    style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        border: "none",
                        background:
                            i === active
                                ? "#A78BFA"
                                : "rgba(255,255,255,0.4)",
                        cursor: "pointer",
                        padding: 0,
                        transition:
                            "width 0.35s ease, background 0.35s ease",
                    }}
                />
            ))}
        </div>
    );
}

export default function HeroSection() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useScrollReveal();

    /* Mobile detection */
    useEffect(() => {
        const mq = window.matchMedia("(max-width: 991px)");

        setIsMobile(mq.matches);

        const handler = (e) => {
            setIsMobile(e.matches);
        };

        mq.addEventListener("change", handler);

        return () => mq.removeEventListener("change", handler);
    }, []);

    /* Preload images */
    useEffect(() => {
        slides.forEach((slide) => {
            const bgImage = new Image();
            bgImage.src = slide.bg;
        });
    }, []);

    /* Auto play */
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) =>
                prev === slides.length - 1 ? 0 : prev + 1
            );
        }, 3800);

        return () => clearInterval(interval);
    }, []);

    const handleThumbClick = (index) => {
        setActiveSlide(index);
    };

    const getThumbOffset = (index) =>
        (index - activeSlide + slides.length) % slides.length;

    return (
        <div
            className="hero-wrapper"
            style={{
                backgroundImage: `
                    linear-gradient(
                        135deg,
                        rgba(18,25,41,0.92),
                        rgba(18,25,41,0.9)
                    ),
                    url(${slides[activeSlide].bg})
                `,
            }}
        >
            {/* Floating particles */}
            {PARTICLES.map((p, i) => (
                <span
                    key={i}
                    className="hero-particle"
                    style={{
                        width: p.size,
                        height: p.size,
                        top: p.top,
                        left: p.left,
                        animationDuration: p.duration,
                        animationDelay: p.delay,
                    }}
                />
            ))}

            <section className="hero container">
                <div className="row align-items-center">

                    {/* LEFT CONTENT */}
                    <div className="col-lg-7 col-12">

                        <h3 className="subheading">
                            We Design, Develop &amp; Deliver Impactful Technology
                        </h3>

                        {/* EXACTLY TWO LINES */}
                        <h1 className="heading">

                            <span className="hero-heading-line hero-heading-line-1">
                                Building{" "}
                                <span className="smart-solutions">
                                    Smart Solutions
                                </span>
                            </span>
                            <span className="hero-heading-line hero-heading-line-2">
                                with AI, IoT &amp; Innovation
                            </span>

                        </h1>

                        <p className="description mt-3">
                            Projenius is a technology-driven startup focused on
                            building innovative solutions in AI, IoT, Software
                            Development, and Product Engineering.
                        </p>

                        {/* CENTERED BUTTON */}
                        <div className="hero-buttons">
                            <a href="#" className="btn">
                                <span
                                    className="btn-content"
                                    key={activeSlide}
                                >
                                    {slides[activeSlide].buttonText}
                                </span>
                            </a>
                        </div>

                        {/* MOBILE DOTS */}
                        {isMobile && (
                            <DotIndicators
                                total={slides.length}
                                active={activeSlide}
                                onDotClick={handleThumbClick}
                            />
                        )}
                    </div>

                    {/* RIGHT CIRCLES */}
                    <div className="col-lg-5 d-none d-lg-flex justify-content-center">
                        <div className="thumb-wrapper">

                            {slides.map((slide, realIndex) => {
                                const offset =
                                    getThumbOffset(realIndex);

                                const isVisible = offset < 3;

                                return (
                                    <img
                                        key={realIndex}
                                        src={slide.thumb}
                                        alt={`slide thumbnail ${realIndex + 1
                                            }`}
                                        className={`
                                            thumb-img
                                            thumb-slot-${Math.min(
                                            offset,
                                            3
                                        )}
                                            ${isVisible
                                                ? "visible"
                                                : "hidden"
                                            }
                                            ${activeSlide === realIndex
                                                ? "active"
                                                : ""
                                            }
                                        `}
                                        onClick={() =>
                                            handleThumbClick(realIndex)
                                        }
                                        decoding="async"
                                    />
                                );
                            })}

                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}