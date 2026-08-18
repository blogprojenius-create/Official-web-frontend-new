import "../index.css";
import "../assets/css/ContactSection.css";

import { Link } from "react-router-dom";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import CountUp from "./CountUp";


export default function ContactSection() {

    useEffect(() => {

        AOS.init({
            duration: 1000,
            once: true,
            offset: 80,
            easing: "ease-in-out",
        });

    }, []);


    return (

        <section className="contact-section">


            {/* =====================================================
                TOP DARK SECTION
            ===================================================== */}

            <div className="section-1">

                <div className="container">

                    <div className="contact-heading">


                        {/* =================================================
                            BADGE
                        ================================================= */}

                        <span
                            className="contact-sub-heading"
                            data-aos="fade-up"
                            data-aos-delay="150"
                        >

                            <span className="contact-sub-dot"></span>

                            LET'S GET STARTED

                        </span>


                        {/* =================================================
                            MAIN TITLE
                        ================================================= */}

                        <h2
                            className="contact-section-title"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >

                            Want to{" "}

                            <span className="contact-title-accent">
                                Work Together
                            </span>

                        </h2>

                    </div>

                </div>

            </div>



            {/* =====================================================
                IMAGE CARD SECTION
            ===================================================== */}

            <div className="section-2">

                <div className="container">

                    <div className="contact-card">


                        {/* =================================================
                            IMAGE SLIDER
                        ================================================= */}

                        <div className="image-slider">

                            <img
                                src="/images/bg.png"
                                alt=""
                                className="contact-img"
                            />

                            <img
                                src="/images/bg2.png"
                                alt=""
                                className="contact-img"
                            />

                        </div>


                        {/* =================================================
                            OVERLAY
                        ================================================= */}

                        <div
                            className="overlay"
                            aria-hidden="true"
                        ></div>


                        {/* =================================================
                            CARD CONTENT
                        ================================================= */}

                        <div className="card-content">


                            <h3
                                data-aos="fade-right"
                                data-aos-delay="150"
                            >

                                Build A Creative

                                <br />

                                Showcase Website.

                            </h3>


                            <Link
                                to="/contact"
                                className="btn"
                                data-aos="fade-left"
                                data-aos-delay="300"
                            >

                                <span className="btn-content">
                                    Let's Talk
                                </span>

                            </Link>


                        </div>


                    </div>

                </div>

            </div>



            {/* =====================================================
                COUNTER SECTION
            ===================================================== */}

            <div className="counter-section">

                <div className="container">

                    <div className="counter-wrapper">


                        {/* =================================================
                            COUNTER 1
                        ================================================= */}

                        <div
                            className="counter-box"
                            data-aos="fade-right"
                            data-aos-delay="150"
                        >

                            <h2>

                                <CountUp
                                    to={156}
                                    suffix="k"
                                />

                            </h2>

                            <p>
                                PROJECT COMPLETE
                            </p>

                        </div>



                        {/* =================================================
                            COUNTER 2
                        ================================================= */}

                        <div
                            className="counter-box"
                            data-aos="fade-down"
                            data-aos-delay="300"
                        >

                            <h2>

                                <CountUp
                                    to={556}
                                    suffix="k"
                                />

                            </h2>

                            <p>
                                CLIENTS SATISFACTIONS
                            </p>

                        </div>



                        {/* =================================================
                            COUNTER 3
                        ================================================= */}

                        <div
                            className="counter-box"
                            data-aos="fade-up"
                            data-aos-delay="450"
                        >

                            <h2>

                                <CountUp
                                    to={234}
                                    suffix="k"
                                />

                            </h2>

                            <p>
                                ENVATO MARKET
                            </p>

                        </div>



                        {/* =================================================
                            COUNTER 4
                        ================================================= */}

                        <div
                            className="counter-box"
                            data-aos="fade-left"
                            data-aos-delay="600"
                        >

                            <h2>

                                <CountUp
                                    to={348}
                                    suffix="k"
                                />

                            </h2>

                            <p>
                                MOBILE APPS
                            </p>

                        </div>


                    </div>

                </div>

            </div>


        </section>

    );

}