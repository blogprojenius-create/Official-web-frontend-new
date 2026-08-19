import React, { useEffect, useRef, useState } from "react";
import "../assets/css/TestimonialSection.css";
import "../index.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import AOS from "aos";
import "aos/dist/aos.css";

import { ChevronLeft, ChevronRight } from "lucide-react";

/* ── Hardcoded fallback — shown if the API is unavailable ── */
const FALLBACK_REVIEWS = [
  {
    id: 1,
    name: "Kanniappan C",
    role: "Client",
    review:
      "\u201cProjenius provided a very good learning experience. The course content was well-structured and easy to understand, even for beginners. The explanations and practical examples helped me gain a clear understanding of the concepts.\u201d",
    color: "#0ea5e9",
  },
  {
    id: 2,
    name: "MATHAN KUMAR",
    role: "Client",
    review:
      "\u201cJust came across this amazing page that provides solutions for final year projects, and honestly, I\u2019m impressed! The quality of work is top-notch, well-structured, and clearly shows deep understanding of the concepts.\u201d",
    color: "#eab308",
  },
  {
    id: 3,
    name: "Sowbharnika Srinivasan",
    role: "Client",
    review:
      "\u201cI had a good and positive experience. The support and guidance provided during my project were really helpful and made things much clearer and easier to improve on. I\u2019m thankful for the assistance.\u201d",
    color: "#8b5cf6",
  },
  {
    id: 4,
    name: "Harshini 33",
    role: "Client",
    review:
      "\u201cProjenius is not just a service provider; they\u2019re a problem-solving partner. If you\u2019re a student looking to bring a project to life, or a startup aiming to build scalable tech solutions, Projenius is a reliable choice.\u201d",
    color: "#f43f5e",
  },
  {
    id: 5,
    name: "Dhivena Dharshana",
    role: "Client",
    review:
      "\u201cI asked Projenius Freelancing to create a website for me, and they did an excellent job. The design is neat, user-friendly, and exactly what I wanted. They were very supportive and delivered everything on time.\u201d",
    color: "#10b981",
  },
  {
    id: 6,
    name: "Suba Dhayalan",
    role: "Client",
    review:
      "\u201cA trust worthy place where you can build your skills and future in a friendly and coexisting environment.\u201d",
    color: "#3b82f6",
  },
  {
    id: 7,
    name: "Keerthana Seenivasagan",
    role: "Intern",
    review:
      "\u201cI had a great experience during my internship. The environment was supportive, and I had the opportunity to learn practical skills. The mentors were friendly and provided valuable guidance throughout the internship.\u201d",
    color: "#f59e0b",
  },
  {
    id: 8,
    name: "Aariyan Siddharth",
    role: "Video Editing Intern",
    review:
      "\u201cI\u2019ve been there as a video editing intern, wholesome experience, sweet bosses, happy time.\u201d",
    color: "#6366f1",
  },
  {
    id: 9,
    name: "NAvAJITH SENTHILKUMAR",
    role: "Intern",
    review:
      "\u201cCurrently I\u2019m working here as an intern and having a great experience over here. Truly a great atmosphere to work and learn \u2728\u201d",
    color: "#ec4899",
  },
  {
    id: 10,
    name: "SWATI A S",
    role: "EC Student",
    review:
      "\u201cSuch a hardworking team, not just working, but constantly building innovations. Keep rocking and continue your amazing service \ud83d\udcab\ud83d\udcab\u201d",
    color: "#14b8a6",
  },
  {
    id: 11,
    name: "Aruna Sree N",
    role: "Client",
    review:
      "\u201cI had a very positive experience with ProJenius. The project was delivered on time with great attention to detail. The team was highly professional, responsive, and ensured everything was handled efficiently.\u201d",
    color: "#0f766e",
  },
  {
    id: 12,
    name: "Hari Haran",
    role: "Client",
    review:
      "\u201cMet deadlines without exceeding my budget, had accountability. Best wishes for your future ventures.\u201d",
    color: "#64748b",
  },
  {
    id: 13,
    name: "Malar Abinaya",
    role: "Client",
    review:
      "\u201cGood service and friendly team. Had a nice experience \ud83d\udc4d\u201d",
    color: "#84cc16",
  },
  {
    id: 14,
    name: "vishnu lax",
    role: "Client",
    review:
      "\u201cA very good team to work with, and a bunch of energetic and enthusiastic folks, too!\u201d",
    color: "#a855f7",
  },
  {
    id: 15,
    name: "Nivas Kumar",
    role: "Client",
    review:
      "\u201cProJenius is the best place for IoT and Web Development training in Madurai. I gained real-time project experience and excellent mentorship. Highly recommended for students looking for internships and practical learning.\u201d",
    color: "#d946ef",
  },
];

const API_BASE = import.meta.env.VITE_API_BASE_URL || "";

export default function TestimonialSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  /* ADDED ONLY FOR RELIABLE ARROW FUNCTIONALITY */
  const swiperRef = useRef(null);

  const [reviews, setReviews] = useState(FALLBACK_REVIEWS);

  /* Fetch live Google reviews; silently fall back on any error */
  useEffect(() => {
    fetch(`${API_BASE}/api/reviews`)
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data.reviews) && data.reviews.length > 0) {
          setReviews(data.reviews);
        }
      })
      .catch(() => {
        /* keep fallback — no-op */
      });
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 80,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="testi-section">

      {/* Decorative background */}
      <div className="testi-bg-glow testi-bg-glow--1"></div>
      <div className="testi-bg-glow testi-bg-glow--2"></div>
      <div className="testi-dot-grid"></div>

      <div className="container">

        {/* Section Header */}
        <div className="testi-header" data-aos="fade-up">

          <span
            className="testi-badge"
            style={{
              fontFamily: '"Segoe UI Black", "Segoe UI", Arial, sans-serif',
              fontWeight: 900,
            }}
          >
            <span className="testi-badge-dot"></span>
            Testimonials
          </span>

          <h2 className="testi-title">
            What Our{" "}
            <span className="testi-title-accent">
              Clients Say
            </span>
          </h2>

          <p className="testi-subtitle">
            Real stories from students, startups, and businesses we've partnered with.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="testi-carousel-wrap"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={32}
            speed={600}
            loop={true}

            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}

            pagination={{
              clickable: true,
              el: ".testi-pagination",
              bulletClass: "testi-dot",
              bulletActiveClass: "testi-dot--active",
            }}

            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}

            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}

            /* ADDED ONLY FOR RELIABLE ARROW FUNCTIONALITY */
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}

            className="testi-swiper"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>

                <div className="testi-card">

                  {/* LEFT — Content */}
                  <div className="testi-card-left">

                    {/* Google Badge */}
                    <div className="testi-google-badge">
                      <span className="testi-google-text">
                        Google
                      </span>

                      <div className="testi-stars">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </div>
                    </div>

                    {/* Review Text */}
                    <p className="testi-review-text">
                      {review.review}
                    </p>

                    {/* Divider */}
                    <div className="testi-divider"></div>

                    {/* Client Info */}
                    <div className="testi-client">

                      <div
                        className="testi-client-avatar"
                        style={{ background: review.color }}
                      >
                        <span>
                          {review.name.charAt(0).toUpperCase()}
                        </span>
                      </div>

                      <div className="testi-client-info">
                        <h4 className="testi-client-name">
                          {review.name}
                        </h4>

                        <span className="testi-client-role">
                          {review.role}
                        </span>
                      </div>

                    </div>
                  </div>

                  {/* RIGHT — Visual Composition & Person Image */}
                  <div className="testi-card-right">

                    {/* Decorative circle */}
                    <div
                      className="testi-deco-circle"
                      style={{
                        background: `${review.color}18`,
                      }}
                    >
                      <div
                        className="testi-deco-circle-inner"
                        style={{
                          background: `${review.color}25`,
                          borderColor: `${review.color}30`,
                        }}
                      ></div>
                    </div>

                    {/* Person Image */}
                    <img
                      src="https://pngimg.com/uploads/businessman/businessman_PNG6564.png"
                      alt="Businessman"
                      className="testi-person-img"
                    />

                    {/* Quote mark */}
                    <div className="testi-quote-mark">
                      <svg
                        width="64"
                        height="64"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"
                          fill="#0f172a"
                        />

                        <path
                          d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"
                          fill="#0f172a"
                        />
                      </svg>
                    </div>

                  </div>

                </div>

              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}

          <button
            ref={prevRef}
            className="testi-nav-btn testi-nav-prev"
            aria-label="Previous testimonial"
            type="button"
            onClick={() => {
              if (swiperRef.current) {
                swiperRef.current.slidePrev();
              }
            }}
          >
            <ChevronLeft size={22} strokeWidth={2.5} />
          </button>

          <button
            ref={nextRef}
            className="testi-nav-btn testi-nav-next"
            aria-label="Next testimonial"
            type="button"
            onClick={() => {
              if (swiperRef.current) {
                swiperRef.current.slideNext();
              }
            }}
          >
            <ChevronRight size={22} strokeWidth={2.5} />
          </button>

          {/* Pagination Dots */}
          <div className="testi-pagination"></div>

        </div>
      </div>
    </section>
  );
}