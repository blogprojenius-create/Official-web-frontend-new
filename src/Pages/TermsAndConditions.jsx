import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./TermsAndConditions.css";

function TermsAndConditions() {
  const navigate = useNavigate();
  const location = useLocation();

  const booking = location.state?.booking || {};

  const handleBack = () => {
    if (booking.date && booking.time) {
      navigate("/book-call", {
        state: booking,
      });
    } else {
      navigate("/career-guidance");
    }
  };

  return (
    <main className="terms-page">

      <div className="terms-page-container">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="terms-page-header">

          <span className="terms-page-badge">
            LEGAL
          </span>

          <h1>
            Terms & Conditions
          </h1>

          <p>
            Please read these terms carefully before
            proceeding with your career guidance session.
          </p>

        </div>


        {/* =====================================================
            CONTENT
        ===================================================== */}

        <section className="terms-content-card">

          <div className="terms-section">

            <h2>
              1. Service Description
            </h2>

            <p>
              The career guidance session is a
              one-to-one consultation intended to provide
              general career guidance, profile feedback,
              and recommendations based on the information
              provided by the participant.
            </p>

          </div>


          <div className="terms-section">

            <h2>
              2. Session Duration
            </h2>

            <p>
              Each booked session is scheduled for
              approximately 30 minutes. Participants are
              expected to join the session at the selected
              date and time.
            </p>

          </div>


          <div className="terms-section">

            <h2>
              3. Booking & Payment
            </h2>

            <p>
              The session fee displayed during booking must
              be paid through the available payment gateway
              before the booking can be confirmed.
            </p>

            <p>
              A successful payment does not guarantee a job,
              interview, placement, salary, admission, or
              any other specific career outcome.
            </p>

          </div>


          <div className="terms-section">

            <h2>
              4. Participant Information
            </h2>

            <p>
              Participants are responsible for providing
              accurate information such as their name,
              email address, mobile number, and booking
              details.
            </p>

          </div>


          <div className="terms-section">

            <h2>
              5. Career Guidance Disclaimer
            </h2>

            <p>
              The guidance provided during the session is
              based on the participant's current profile,
              goals, skills, and information shared during
              the consultation.
            </p>

            <p>
              Career decisions remain the responsibility of
              the participant. No specific result or
              employment outcome is guaranteed.
            </p>

          </div>


          <div className="terms-section">

            <h2>
              6. Rescheduling
            </h2>

            <p>
              If a participant needs to change the selected
              session time, they should contact the support
              team as early as possible. Rescheduling is
              subject to mentor availability.
            </p>

          </div>


          <div className="terms-section">

            <h2>
              7. Cancellation & Refund
            </h2>

            <p>
              Cancellation and refund eligibility may depend
              on the applicable booking and cancellation
              policy. Participants should contact support
              before requesting a cancellation or refund.
            </p>

          </div>


          <div className="terms-section">

            <h2>
              8. Misuse of Service
            </h2>

            <p>
              Participants must not use the consultation
              service for unlawful, fraudulent, abusive, or
              misleading purposes.
            </p>

          </div>


          <div className="terms-section">

            <h2>
              9. Changes to These Terms
            </h2>

            <p>
              The service provider may update these terms
              from time to time. The latest version displayed
              on this page will apply to future bookings.
            </p>

          </div>


          <div className="terms-section">

            <h2>
              10. Contact & Support
            </h2>

            <p>
              If you have questions about your booking,
              payment, session, cancellation, or these
              terms, please contact the support team before
              proceeding.
            </p>

          </div>


          {/* =================================================
              AGREEMENT NOTICE
          ================================================= */}

          <div className="terms-agreement">

            <span className="terms-agreement-icon">
              ✓
            </span>

            <p>
              By continuing with the booking and payment,
              you acknowledge that you have read and agreed
              to these Terms & Conditions.
            </p>

          </div>


          {/* =================================================
              BACK BUTTON
          ================================================= */}

          <button
            type="button"
            className="terms-back-button"
            onClick={handleBack}
          >
            <span>←</span>
            Back to Booking
          </button>

        </section>

      </div>

    </main>
  );
}

export default TermsAndConditions;