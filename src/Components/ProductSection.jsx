import React, { useEffect, useState } from "react";
import "../assets/css/ProductSection.css";

import AOS from "aos";
import "aos/dist/aos.css";

const tabsData = [
    {
        title: "AI-Powered Nut Sorting & Grading System",
        image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
        description:
            "Creative marketing strategies to improve online visibility.",
    },

    {
        title: "IoT Kit",
        image:
            "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
        description:
            "Smart AI-powered systems for automation and business growth.",
    },

    {
        title: "EduTech Platform",
        image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
        description:
            "Modern responsive websites with premium UI and smooth performance.",
    },
];

const ProductSection = () => {
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 50,
            easing: "ease-in-out",
        });
    }, []);

    return (
        <section className="tabs-section">

            <div className="container">

                {/* ================================
                    SECTION HEADER
                ================================= */}

                <div className="heading">

                    {/* OUR PRODUCT */}

                    <span
                        className="product-sub-heading"
                        id="sub-heading"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <span className="product-sub-dot"></span>
                        Our Product
                    </span>


                    {/* MAIN TITLE */}

                    <h2
                        className="product-title"
                        id="title"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        Innovative Products for{" "}
                        <span className="product-title-accent">
                            Smart Future
                        </span>
                    </h2>


                    {/* DESCRIPTION */}

                    <p
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        Explore our range of innovative solutions designed
                        to empower your business.
                    </p>

                </div>


                {/* ================================
                    PRODUCT TAB BUTTONS
                ================================= */}

                <div
                    className="tabs-header"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >

                    {tabsData.map((tab, index) => (
                        <button
                            key={index}
                            type="button"
                            className={
                                activeTab === index
                                    ? "tab-btn active"
                                    : "tab-btn"
                            }
                            onClick={() => setActiveTab(index)}
                        >
                            {tab.title}
                        </button>
                    ))}

                </div>


                {/* ================================
                    PRODUCT CONTENT
                ================================= */}

                <div className="tabs-content">

                    {/* IMAGE */}

                    <div
                        className="tabs-image"
                        data-aos="fade-right"
                        data-aos-delay="450"
                    >
                        <img
                            key={tabsData[activeTab].image}
                            src={tabsData[activeTab].image}
                            alt={tabsData[activeTab].title}
                        />
                    </div>


                    {/* TEXT */}

                    <div
                        className="tabs-text"
                        data-aos="fade-left"
                        data-aos-delay="500"
                    >

                        <h2>
                            {tabsData[activeTab].title}
                        </h2>

                        <p>
                            {tabsData[activeTab].description}
                        </p>

                        <button
                            type="button"
                            className="explore-btn"
                        >
                            Explore More
                        </button>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default ProductSection;