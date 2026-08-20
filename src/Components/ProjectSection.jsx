import React, { useEffect, useRef } from "react";
import "../assets/css/ProjectSection.css";
import "../index.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import AOS from "aos";
import "aos/dist/aos.css";

export default function ProjectSection() {
  const swiperRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 80,
      easing: "ease-in-out",
    });
  }, []);

  const projects = [
    {
      title: "Helminth Egg Detection Poster",
      subtitle: "Medical Conference Poster",
      description:
        "Scientific poster on helminth egg detection in dog samples highlighting diagnosis and zoonotic risks worldwide.",
      rating: 5,
      image: "/images/project-image-1.webp",
    },

    {
      title: "AI-Powered Water Health Monitoring",
      subtitle: "Software",
      description:
        "Powerful monitoring platform designed to improve water quality analysis and real-time environmental tracking.",
      rating: 4,
      image: "/images/project-image-2.webp",
    },

    {
      title: "Road Hazard Detection",
      subtitle: "Software",
      description:
        "AI-based accident detection system with instant emergency GPS alerts and real-time response tracking.",
      rating: 5,
      image: "/images/project-image-3.webp",
    },

    {
      title: "Smart Waste Management",
      subtitle: "Software",
      description:
        "Smart waste segregation system using sensors for automatic wet and dry waste classification.",
      rating: 4,
      image: "/images/project-image-4.webp",
    },

    {
      title: "Autonomous Follower Robot",
      subtitle: "Hardware",
      description:
        "Intelligent follower robot with obstacle avoidance for smart logistics and automated material transportation.",
      rating: 5,
      image: "/images/project-image-5.webp",
    },
  ];

  return (
    <section className="nv-work-showcase">
      <div className="nv-work-container">

        {/* SECTION HEADER */}
        <div className="nv-work-header">

          {/* OUR PROJECTS */}
          <span
            className="nv-sub-heading"
            id="sub-heading"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <span className="nv-sub-heading-dot"></span>
            Our Projects
          </span>

          {/* MAIN TITLE */}
          <h2
            className="nv-title"
            id="title"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Work{" "}
            <span className="nv-title-accent">
              Showcase
            </span>
          </h2>

          {/* UNDERLINE */}
          <div
            className="nv-title-line"
            aria-hidden="true"
          ></div>

          {/* DESCRIPTION */}
          <p
            data-aos="fade-up"
            data-aos-delay="450"
          >
            We create powerful digital experiences with
            modern design, innovative strategies and
            professional development solutions.
          </p>
        </div>

        {/* PROJECT AREA */}
        <div className="nv-project-slider-area">

          {/* LEFT ARROW */}
          <button
            type="button"
            className="nv-project-arrow nv-project-prev"
            aria-label="Previous project"
            onClick={() => {
              if (swiperRef.current) {
                swiperRef.current.slidePrev();
              }
            }}
          >
            <span>‹</span>
          </button>

          {/* SWIPER */}
          <Swiper
            modules={[Navigation, Autoplay]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={25}
            slidesPerView={3}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              992: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {projects.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="nv-work-card">

                  <div className="nv-flip-box">

                    {/* FRONT */}
                    <div className="nv-flip-front">
                      <img
                        src={item.image}
                        alt={item.title}
                      />
                    </div>

                    {/* BACK */}
                    <div className="nv-flip-back">

                      {/* PROJECT TITLE */}
                      <h3 className="nv-project-title">
                        {item.title}
                      </h3>

                      {/* PROJECT TYPE */}
                      <span className="nv-subtitle">
                        {item.subtitle}
                      </span>

                      {/* DESCRIPTION */}
                      <p className="nv-desc">
                        {item.description}
                      </p>

                      {/* RATING */}
                      <div className="nv-rating">
                        <div className="nv-rating-stars">
                          {[...Array(5)].map((_, i) => (
                            <i
                              key={i}
                              className={
                                i < item.rating
                                  ? "bi bi-star-fill"
                                  : "bi bi-star"
                              }
                            ></i>
                          ))}
                        </div>

                        <span className="nv-rating-text">
                          {item.rating}/5
                        </span>
                      </div>

                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* RIGHT ARROW */}
          <button
            type="button"
            className="nv-project-arrow nv-project-next"
            aria-label="Next project"
            onClick={() => {
              if (swiperRef.current) {
                swiperRef.current.slideNext();
              }
            }}
          >
            <span>›</span>
          </button>

        </div>
      </div>
    </section>
  );
}