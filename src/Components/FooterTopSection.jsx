import React from "react";

export default function FooterTopSection() {
  return (
    <section className="fts-section">

      {/* =========================
          BACKGROUND GLOWS
      ========================= */}
      <span
        className="fts-glow fts-glow--tl"
        aria-hidden="true"
      />

      <span
        className="fts-glow fts-glow--br"
        aria-hidden="true"
      />


      {/* =========================
          MAIN CONTENT
      ========================= */}
      <div className="fts-inner">

        {/* HEADING */}
        <h2 className="fts-heading">
          Let's Finalize Your Quote &amp; Start Building
        </h2>


        {/* ANIMATED LINE */}
        <div
          className="fts-title-line"
          aria-hidden="true"
        >
          <span className="fts-line-dot"></span>
        </div>


        {/* DESCRIPTION */}
        <p className="fts-sub">
          You're almost there. Share your final requirements, confirm your
          quote, and let our team turn your vision into a powerful digital
          experience.
        </p>


        {/* =========================
            TRUST ITEMS
        ========================= */}
        <div className="fts-trust">

          <span className="fts-trust-item">
            <i
              className="bi bi-shield-check"
              aria-hidden="true"
            />
            Transparent pricing
          </span>


          <span
            className="fts-trust-sep"
            aria-hidden="true"
          />


          <span className="fts-trust-item">
            <i
              className="bi bi-chat-dots"
              aria-hidden="true"
            />
            Clear communication
          </span>


          <span
            className="fts-trust-sep"
            aria-hidden="true"
          />


          <span className="fts-trust-item">
            <i
              className="bi bi-headset"
              aria-hidden="true"
            />
            Dedicated support
          </span>

        </div>


        {/* =========================
            CTA BUTTONS
        ========================= */}
        <div className="fts-actions">

          {/* WHATSAPP */}
          <button
            className="fts-btn fts-btn--primary"
            onClick={() =>
              window.open(
                "https://wa.me/918925450473",
                "_blank"
              )
            }
            aria-label="Confirm your quote on WhatsApp"
          >

            <i
              className="bi bi-whatsapp"
              aria-hidden="true"
            />

            <span>
              Confirm Your Quote
            </span>

            <i
              className="bi bi-arrow-right fts-arrow"
              aria-hidden="true"
            />

          </button>


          {/* CALL */}
          <button
            className="fts-btn fts-btn--ghost"
            onClick={() =>
              (window.location.href = "tel:+918925450473")
            }
            aria-label="Call our team"
          >

            <i
              className="bi bi-telephone-fill"
              aria-hidden="true"
            />

            <span>
              Talk to Our Team
            </span>

          </button>

        </div>

      </div>


      {/* =========================
          INTERNAL CSS
      ========================= */}
      <style>{`

        /* =====================================================
           FULL PAGE SECTION
        ===================================================== */

        .fts-section {
          position: relative;

          /* FULL WIDTH */
          width: 100%;
          max-width: none;

          /* FULL SCREEN HEIGHT */
          min-height: 100vh;

          /* REMOVE THE OLD CONSTRAINTS */
          margin: 0;
          padding: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          box-sizing: border-box;

          overflow: hidden;

          text-align: center;

          font-family: "Poppins", "Segoe UI", Arial, sans-serif;

          background:
            radial-gradient(
              circle at 15% 50%,
              rgba(0, 170, 162, 0.13) 0%,
              transparent 38%
            ),
            radial-gradient(
              circle at 85% 25%,
              rgba(0, 170, 162, 0.18) 0%,
              transparent 40%
            ),
            linear-gradient(
              120deg,
              #061c2a 0%,
              #073b4b 48%,
              #087b78 100%
            );

          color: #ffffff;

          isolation: isolate;
        }


        /* =====================================================
           DOT BACKGROUND
        ===================================================== */

        .fts-section::before {
          content: "";

          position: absolute;
          inset: 0;

          background-image:
            radial-gradient(
              circle,
              rgba(255,255,255,0.08) 1px,
              transparent 1px
            );

          background-size: 28px 28px;

          pointer-events: none;

          z-index: -3;
        }


        /* =====================================================
           SOFT BACKGROUND GLOWS
        ===================================================== */

        .fts-glow {
          position: absolute;

          border-radius: 50%;

          pointer-events: none;

          filter: blur(100px);

          z-index: -2;
        }


        .fts-glow--tl {
          width: 420px;
          height: 420px;

          top: -180px;
          left: -150px;

          background: rgba(0, 170, 162, 0.18);
        }


        .fts-glow--br {
          width: 420px;
          height: 420px;

          right: -150px;
          bottom: -180px;

          background: rgba(0, 170, 162, 0.22);
        }


        /* =====================================================
           CONTENT WRAPPER
        ===================================================== */

        .fts-inner {
          position: relative;

          z-index: 2;

          width: min(1400px, 90%);

          margin: 0 auto;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }


        /* =====================================================
           MAIN HEADING
        ===================================================== */

        .fts-heading {
          margin: 0;

          max-width: 1450px;

          color: #ffffff;

          font-family:
            "Poppins",
            "Segoe UI",
            Arial,
            sans-serif;

          font-size: clamp(
            42px,
            4.8vw,
            76px
          );

          line-height: 1.12;

          font-weight: 800;

          letter-spacing: -2px;

          text-align: center;
        }


        /* =====================================================
           ANIMATED TITLE LINE
        ===================================================== */

        .fts-title-line {
          position: relative;

          width: 100px;
          height: 6px;

          margin-top: 30px;
          margin-bottom: 34px;

          border-radius: 50px;

          background: rgba(
            0,
            170,
            162,
            0.30
          );

          overflow: hidden;
        }


        .fts-title-line::before {
          content: "";

          position: absolute;

          top: 0;
          left: -100%;

          width: 100%;
          height: 100%;

          border-radius: inherit;

          background: rgb(
            0,
            170,
            162
          );

          animation:
            ftsLineMove
            2.2s
            ease-in-out
            infinite;
        }


        /* Moving glow dot */

        .fts-line-dot {
          position: absolute;

          top: 50%;

          left: 0;

          width: 10px;
          height: 10px;

          border-radius: 50%;

          background: rgb(
            0,
            170,
            162
          );

          transform:
            translate(-50%, -50%);

          box-shadow:
            0 0 10px
            rgb(0, 170, 162),

            0 0 22px
            rgba(0, 170, 162, 0.9);

          animation:
            ftsDotMove
            2.2s
            ease-in-out
            infinite;
        }


        @keyframes ftsLineMove {

          0% {
            left: -100%;
          }

          45% {
            left: 0%;
          }

          55% {
            left: 0%;
          }

          100% {
            left: 100%;
          }

        }


        @keyframes ftsDotMove {

          0% {
            left: 0%;
          }

          50% {
            left: 100%;
          }

          100% {
            left: 0%;
          }

        }


        /* =====================================================
           DESCRIPTION
        ===================================================== */

        .fts-sub {
          width: min(
            1000px,
            90%
          );

          margin: 0 auto;

          color: rgba(
            255,
            255,
            255,
            0.88
          );

          font-family:
            "Poppins",
            "Segoe UI",
            Arial,
            sans-serif;

          font-size: clamp(
            18px,
            1.45vw,
            24px
          );

          line-height: 1.75;

          font-weight: 500;

          text-align: center;
        }


        /* =====================================================
           TRUST STRIP
        ===================================================== */

        .fts-trust {
          display: flex;

          align-items: center;

          justify-content: center;

          flex-wrap: wrap;

          gap: 10px;

          margin-top: 34px;

          color: rgb(
            0,
            170,
            162
          );

          font-family:
            "Poppins",
            "Segoe UI",
            Arial,
            sans-serif;

          font-size: clamp(
            15px,
            1.1vw,
            19px
          );

          font-weight: 600;
        }


        .fts-trust-item {
          display: inline-flex;

          align-items: center;

          gap: 8px;

          color: rgba(
            255,
            255,
            255,
            0.82
          );
        }


        .fts-trust-item .bi {
          color: rgb(
            0,
            170,
            162
          );

          font-size: 19px;
        }


        .fts-trust-sep {
          width: 6px;
          height: 6px;

          border-radius: 50%;

          background: rgb(
            0,
            170,
            162
          );

          margin: 0 10px;
        }


        /* =====================================================
           BUTTON AREA
        ===================================================== */

        .fts-actions {
          display: flex;

          align-items: center;

          justify-content: center;

          gap: 18px;

          flex-wrap: wrap;

          margin-top: 42px;
        }


        /* =====================================================
           COMMON BUTTON
        ===================================================== */

        .fts-btn {
          min-width: 330px;

          min-height: 70px;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 12px;

          padding: 16px 34px;

          border-radius: 999px;

          font-family:
            "Poppins",
            "Segoe UI",
            Arial,
            sans-serif;

          font-size: 19px;

          font-weight: 700;

          cursor: pointer;

          white-space: nowrap;

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            background 0.25s ease,
            border-color 0.25s ease;
        }


        .fts-btn:hover {
          transform: translateY(-4px);
        }


        /* =====================================================
           PRIMARY BUTTON
        ===================================================== */

        .fts-btn--primary {
          background: rgb(
            0,
            170,
            162
          );

          color: #000000;

          border: 2px solid
            rgb(
              0,
              170,
              162
            );

          box-shadow:
            0 10px 30px
            rgba(
              0,
              170,
              162,
              0.30
            );
        }


        .fts-btn--primary:hover {
          background: rgb(
            0,
            190,
            180
          );

          box-shadow:
            0 16px 42px
            rgba(
              0,
              170,
              162,
              0.42
            );
        }


        .fts-btn--primary .bi {
          color: #000000;

          font-size: 21px;
        }


        .fts-arrow {
          transition:
            transform 0.25s ease;
        }


        .fts-btn--primary:hover
        .fts-arrow {
          transform:
            translateX(5px);
        }


        /* =====================================================
           SECONDARY BUTTON
        ===================================================== */

        .fts-btn--ghost {
          background:
            rgba(
              255,
              255,
              255,
              0.04
            );

          color: #ffffff;

          border: 2px solid
            rgb(
              0,
              170,
              162
            );

          box-shadow:
            inset 0 0 20px
            rgba(
              0,
              170,
              162,
              0.05
            );
        }


        .fts-btn--ghost:hover {
          background:
            rgba(
              0,
              170,
              162,
              0.16
            );

          border-color:
            rgb(
              0,
              200,
              190
            );

          box-shadow:
            0 12px 34px
            rgba(
              0,
              170,
              162,
              0.20
            );
        }


        .fts-btn--ghost .bi {
          color:
            rgb(
              0,
              170,
              162
            );

          font-size: 21px;
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1000px) {

          .fts-section {
            min-height: 100vh;

            padding:
              80px 30px;
          }


          .fts-heading {
            font-size:
              clamp(
                38px,
                6vw,
                58px
              );

            letter-spacing:
              -1.5px;
          }


          .fts-sub {
            font-size: 18px;
          }


          .fts-btn {
            min-width: 290px;

            min-height: 64px;

            font-size: 17px;
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 650px) {

          .fts-section {
            min-height: 100svh;

            padding:
              70px 20px;
          }


          .fts-inner {
            width: 100%;
          }


          .fts-heading {
            font-size:
              clamp(
                32px,
                9vw,
                46px
              );

            line-height: 1.18;

            letter-spacing:
              -1px;
          }


          .fts-title-line {
            width: 80px;

            height: 5px;

            margin-top: 24px;

            margin-bottom: 26px;
          }


          .fts-sub {
            width: 95%;

            font-size: 16px;

            line-height: 1.65;
          }


          .fts-trust {
            flex-direction: column;

            gap: 13px;

            margin-top: 28px;

            font-size: 15px;
          }


          .fts-trust-sep {
            display: none;
          }


          .fts-actions {
            width: 100%;

            flex-direction: column;

            gap: 14px;

            margin-top: 34px;
          }


          .fts-btn {
            width: 100%;

            min-width: 0;

            min-height: 62px;

            font-size: 16px;

            padding:
              15px 22px;
          }

        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 400px) {

          .fts-section {
            padding:
              55px 16px;
          }


          .fts-heading {
            font-size: 30px;
          }


          .fts-sub {
            font-size: 15px;
          }


          .fts-btn {
            min-height: 58px;

            font-size: 15px;
          }

        }

      `}</style>

    </section>
  );
}