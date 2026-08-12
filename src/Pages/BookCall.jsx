import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BookCall.css";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

function BookCall() {
  const location = useLocation();
  const navigate = useNavigate();

  const booking = location.state || {};

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // If user directly opens /book-call without selecting
    // a date/time, send them back to Career Guidance.
    if (!booking.date || !booking.time) {
      navigate("/career-guidance", { replace: true });
    }
  }, [booking.date, booking.time, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const name = formData.name.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();

    if (name.length < 2) {
      alert("Please enter your full name.");
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      alert("Please enter a valid 10-digit Indian mobile number.");
      return false;
    }

    return true;
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }

      const script = document.createElement("script");

      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (!booking.date || !booking.time) {
      alert("Booking date or time is missing.");
      return;
    }

    try {
      setLoading(true);

      /*
       * STEP 1
       * Ask backend to create a Razorpay order.
       *
       * IMPORTANT:
       * Razorpay Secret Key stays on backend.
       */

      const orderResponse = await fetch(
        `${API_BASE_URL}/api/payments/create-order`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim(),

            date: booking.date,
            dateKey: booking.dateKey || "",
            time: booking.time,

            amount: 99,
          }),
        }
      );

      const orderData = await orderResponse.json();

      if (!orderResponse.ok) {
        throw new Error(
          orderData.message || "Unable to create payment order."
        );
      }

      /*
       * STEP 2
       * Load Razorpay Checkout.
       */

      const razorpayLoaded = await loadRazorpayScript();

      if (!razorpayLoaded) {
        throw new Error(
          "Razorpay Checkout could not be loaded. Please check your internet connection."
        );
      }

      /*
       * STEP 3
       * Razorpay Checkout configuration.
       */

      const options = {
        key: orderData.keyId,

        amount: orderData.amount,

        currency: orderData.currency || "INR",

        name: "ProJenius Innovation Technology",

        description: "Career Guidance Session",

        order_id: orderData.orderId,

        prefill: {
          name: formData.name.trim(),
          email: formData.email.trim(),
          contact: `+91${formData.phone.trim()}`,
        },

        notes: {
          booking_date: booking.date,
          booking_time: booking.time,
          student_name: formData.name.trim(),
          student_email: formData.email.trim(),
          student_phone: formData.phone.trim(),
        },

        theme: {
          color: "#0ea5e9",
        },

        modal: {
          confirm_close: true,
          escape: true,
          backdropclose: false,
        },

        handler: async function (response) {
          try {
            /*
             * STEP 4
             * Send Razorpay payment details to backend.
             * Backend verifies the signature.
             */

            const verifyResponse = await fetch(
              `${API_BASE_URL}/api/payments/verify-payment`,
              {
                method: "POST",

                headers: {
                  "Content-Type": "application/json",
                },

                body: JSON.stringify({
                  name: formData.name.trim(),
                  email: formData.email.trim(),
                  phone: formData.phone.trim(),

                  date: booking.date,
                  dateKey: booking.dateKey || "",
                  time: booking.time,

                  amount: 99,

                  razorpay_payment_id:
                    response.razorpay_payment_id,

                  razorpay_order_id:
                    response.razorpay_order_id,

                  razorpay_signature:
                    response.razorpay_signature,
                }),
              }
            );

            const verifyData = await verifyResponse.json();

            if (!verifyResponse.ok) {
              throw new Error(
                verifyData.message ||
                  "Payment verification failed."
              );
            }

            /*
             * Payment successfully verified.
             */

            navigate("/booking-success", {
              state: {
                name: formData.name.trim(),
                email: formData.email.trim(),
                phone: formData.phone.trim(),

                date: booking.date,
                time: booking.time,

                amount: 99,

                paymentId:
                  response.razorpay_payment_id,

                orderId:
                  response.razorpay_order_id,
              },
            });
          } catch (error) {
            console.error("Payment verification error:", error);

            alert(
              error.message ||
                "Payment verification failed. Please contact support."
            );
          }
        },

        modal: {
          ondismiss: function () {
            setLoading(false);
          },
        },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.on("payment.failed", function (response) {
        console.error("Razorpay payment failed:", response);

        setLoading(false);

        alert(
          response.error?.description ||
            "Payment failed. Please try again."
        );
      });

      razorpay.open();

      setLoading(false);
    } catch (error) {
      console.error("Payment initialization error:", error);

      alert(
        error.message ||
          "Unable to start payment. Please try again."
      );

      setLoading(false);
    }
  };

  if (!booking.date || !booking.time) {
    return null;
  }

  return (
    <main className="book-call-page">

      <div className="book-call-container">

        {/* LEFT SIDE */}

        <section className="book-call-left">

          <div className="book-call-badge">
            CAREER GUIDANCE
          </div>

          <h1>
            Book a Call With
            <br />
            a Real Mentor
          </h1>

          <p className="book-call-description">
            Get a focused 30-minute career guidance session
            designed around your current skills, goals and
            career direction.
          </p>

          <div className="book-call-features">

            <div className="book-feature">
              <span>✓</span>
              <p>30-minute one-to-one session</p>
            </div>

            <div className="book-feature">
              <span>✓</span>
              <p>Personalized career guidance</p>
            </div>

            <div className="book-feature">
              <span>✓</span>
              <p>Honest feedback on your current profile</p>
            </div>

            <div className="book-feature">
              <span>✓</span>
              <p>Clear next-step recommendations</p>
            </div>

          </div>

        </section>


        {/* RIGHT SIDE */}

        <section className="book-call-card">

          <div className="book-call-card-header">

            <h2>
              Book Your Session
            </h2>

            <p>
              Enter your details to continue
            </p>

          </div>


          <form
            className="book-call-form"
            onSubmit={handleSubmit}
          >

            {/* NAME */}

            <div className="form-group">

              <label htmlFor="name">
                Full Name
              </label>

              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                required
              />

            </div>


            {/* EMAIL */}

            <div className="form-group">

              <label htmlFor="email">
                Email Address
              </label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
              />

            </div>


            {/* PHONE */}

            <div className="form-group">

              <label htmlFor="phone">
                Mobile Number
              </label>

              <div className="phone-input">

                <span className="country-code">
                  +91
                </span>

                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="10-digit mobile number"
                  value={formData.phone}
                  onChange={(e) => {
                    const value =
                      e.target.value.replace(/\D/g, "");

                    if (value.length <= 10) {
                      setFormData((prev) => ({
                        ...prev,
                        phone: value,
                      }));
                    }
                  }}
                  maxLength={10}
                  autoComplete="tel"
                  required
                />

              </div>

            </div>


            {/* BOOKING SUMMARY */}

            <div className="booking-summary">

              <h3>
                Your Session
              </h3>

              <div className="summary-row">

                <span>
                  Date
                </span>

                <strong>
                  {booking.date}
                </strong>

              </div>

              <div className="summary-row">

                <span>
                  Time
                </span>

                <strong>
                  {booking.time}
                </strong>

              </div>

              <div className="summary-divider" />

              <div className="summary-row fee-row">

                <span>
                  Session Fee
                </span>

                <strong>
                  ₹99
                </strong>

              </div>

            </div>


            {/* PAYMENT BUTTON */}

            <button
              type="submit"
              className="payment-button"
              disabled={loading}
            >

              {loading ? (
                <>
                  <span className="payment-spinner" />
                  Processing...
                </>
              ) : (
                <>
                  Continue to Payment
                  <span>→</span>
                </>
              )}

            </button>

            <p className="secure-payment-text">
              🔒 Secure payment powered by Razorpay
            </p>

          </form>

        </section>

      </div>

    </main>
  );
}

export default BookCall;