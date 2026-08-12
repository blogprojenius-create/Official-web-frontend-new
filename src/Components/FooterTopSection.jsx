import React from "react";

export default function FooterTopSection() {
  return (
    <section className="fts-section">

      {/* subtle corner glows */}
      <span className="fts-glow fts-glow--tl" aria-hidden="true" />
      <span className="fts-glow fts-glow--br" aria-hidden="true" />

      <div className="fts-inner">

        <h2 className="fts-heading">
          Let's Finalize Your Quote &amp; Start Building
        </h2>

        <p className="fts-sub">
          You're almost there. Share your final requirements, confirm your
          quote, and let our team turn your vision into a powerful digital
          experience.
        </p>

        {/* Trust strip — icons replace bullet dots */}
        <div className="fts-trust">
          <span className="fts-trust-item">
            <i className="bi bi-shield-check" aria-hidden="true" />
            Transparent pricing
          </span>
          <span className="fts-trust-sep" aria-hidden="true" />
          <span className="fts-trust-item">
            <i className="bi bi-chat-dots" aria-hidden="true" />
            Clear communication
          </span>
          <span className="fts-trust-sep" aria-hidden="true" />
          <span className="fts-trust-item">
            <i className="bi bi-headset" aria-hidden="true" />
            Dedicated support
          </span>
        </div>

        {/* CTA buttons */}
        <div className="fts-actions">
          <button
            className="fts-btn fts-btn--primary"
            onClick={() => window.open("https://wa.me/918925450473", "_blank")}
            aria-label="Confirm your quote on WhatsApp"
          >
            <i className="bi bi-whatsapp" aria-hidden="true" />
            Confirm Your Quote
            <i className="bi bi-arrow-right fts-arrow" aria-hidden="true" />
          </button>

          <button
            className="fts-btn fts-btn--ghost"
            onClick={() => (window.location.href = "tel:+918925450473")}
            aria-label="Call our team"
          >
            <i className="bi bi-telephone-fill" aria-hidden="true" />
            Talk to Our Team
          </button>
        </div>

      </div>

      <style>{`
        .fts-section {
          position: relative;
          width: 85%;
          max-width: 1200px;
          margin: 60px auto;
          padding: 50px 48px;
          border-radius: 40px;
          background:
            radial-gradient(ellipse at 20% 50%, rgba(102,199,221,0.18) 0%, transparent 55%),
            radial-gradient(ellipse at 80% 20%, rgba(37,99,235,0.20) 0%, transparent 50%),
            linear-gradient(130deg, #0a4d7a 0%, #076da0 50%, #085f94 100%);
          text-align: center;
          box-shadow:
            0 28px 64px rgba(7, 109, 160, 0.32),
            0 6px 20px rgba(7, 109, 160, 0.16),
            inset 0 1px 0 rgba(255,255,255,0.14);
          overflow: hidden;
        }

        .fts-glow {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(80px);
        }
        .fts-glow--tl {
          width: 340px; height: 340px;
          background: rgba(255,255,255,0.09);
          top: -100px; left: -80px;
        }
        .fts-glow--br {
          width: 260px; height: 260px;
          background: rgba(102,199,221,0.16);
          bottom: -70px; right: -60px;
        }

        /* Dot grid texture */
        .fts-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
          z-index: 0;
        }

        .fts-inner {
          position: relative;
          z-index: 1;
        }

        .fts-heading {
          color: #fff;
          font-size: 40px;
          font-weight: 800;
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin: 0 0 12px;
        }

        .fts-sub {
          color: rgba(255,255,255,0.82);
          font-size: 17px;
          line-height: 1.65;
          max-width: 700px;
          margin: 0 auto 14px;
        }

        /* Trust strip */
        .fts-trust {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 6px 4px;
          margin-bottom: 26px;
          color: rgba(255,255,255,0.65);
          font-size: 13px;
        }
        .fts-trust-item {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          color: rgba(255,255,255,0.72);
          font-size: 13px;
          font-weight: 500;
        }
        .fts-trust-item .bi {
          font-size: 13px;
          color: #66c7dd;
        }
        .fts-trust-sep {
          display: inline-block;
          width: 4px; height: 4px;
          border-radius: 50%;
          background: rgba(255,255,255,0.30);
          margin: 0 6px;
        }

        /* Button row */
        .fts-actions {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .fts-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 30px;
          border-radius: 999px;
          font-size: 16px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          white-space: nowrap;
          transition: transform 0.22s ease, box-shadow 0.22s ease, background 0.22s ease;
        }
        .fts-btn:hover { transform: translateY(-2px); }

        /* White primary */
        .fts-btn--primary {
          background: #ffffff;
          color: #076da0;
          box-shadow: 0 8px 24px rgba(255,255,255,0.18);
        }
        .fts-btn--primary:hover {
          background: #f0f9ff;
          box-shadow: 0 14px 32px rgba(255,255,255,0.28);
        }
        .fts-arrow {
          transition: transform 0.22s ease;
        }
        .fts-btn--primary:hover .fts-arrow {
          transform: translateX(3px);
        }

        /* Ghost outlined */
        .fts-btn--ghost {
          background: rgba(255,255,255,0.10);
          color: #fff;
          border: 1.5px solid rgba(255,255,255,0.32);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
        }
        .fts-btn--ghost:hover {
          background: rgba(255,255,255,0.18);
          border-color: rgba(255,255,255,0.52);
        }

        @media (max-width: 768px) {
          .fts-section  { padding: 44px 28px; width: 92%; }
          .fts-heading  { font-size: clamp(22px, 5vw, 34px); }
          .fts-trust-sep { display: none; }
          .fts-trust    { flex-direction: column; gap: 6px; }
        }
        @media (max-width: 480px) {
          .fts-actions  { flex-direction: column; }
          .fts-btn      { width: 100%; justify-content: center; }
        }
      `}</style>
    </section>
  );
}
