import React, { useState } from "react";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import "../assets/css/JobApplication.css";

const JobApplication = () => {
  const { jobTitle } = useParams();
  const navigate = useNavigate();

  const selectedJob = decodeURIComponent(
    jobTitle || "General Application"
  );

  // =====================================================
  // FORM DATA
  // =====================================================

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    qualification: "",
    experience: "",
    message: "",
  });

  // =====================================================
  // RESUME
  // =====================================================

  const [resume, setResume] = useState(null);

  // =====================================================
  // UI STATES
  // =====================================================

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // =====================================================
  // HANDLE INPUT
  // =====================================================

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  // =====================================================
  // HANDLE RESUME
  // =====================================================

  const handleResumeChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      setResume(null);
      return;
    }

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    // FILE TYPE VALIDATION
    if (!allowedTypes.includes(file.type)) {
      setError(
        "Please upload a PDF, DOC, or DOCX file."
      );

      setResume(null);
      event.target.value = "";

      return;
    }

    // FILE SIZE VALIDATION
    if (file.size > 5 * 1024 * 1024) {
      setError(
        "Resume file size must be less than 5 MB."
      );

      setResume(null);
      event.target.value = "";

      return;
    }

    setError("");
    setResume(file);
  };

  // =====================================================
  // SUBMIT APPLICATION
  // =====================================================

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      // =================================================
      // CREATE FORM DATA
      // =================================================

      const data = new FormData();

      data.append(
        "jobTitle",
        selectedJob
      );

      data.append(
        "name",
        formData.name.trim()
      );

      data.append(
        "email",
        formData.email.trim()
      );

      data.append(
        "phone",
        formData.phone.trim()
      );

      data.append(
        "qualification",
        formData.qualification.trim()
      );

      data.append(
        "experience",
        formData.experience
      );

      data.append(
        "message",
        formData.message.trim()
      );

      // Resume
      if (resume) {
        data.append(
          "resume",
          resume
        );
      }

      // =================================================
      // SEND ONLY TO BACKEND
      // =================================================

      const response = await axios.post(
        "http://localhost:5000/api/applications",
        data
      );

      // =================================================
      // CHECK RESPONSE
      // =================================================

      if (!response.data?.success) {
        throw new Error(
          response.data?.message ||
            "Application submission failed."
        );
      }

      console.log(
        "Application submitted successfully:",
        response.data.applicationId
      );

      // =================================================
      // SUCCESS
      // =================================================

      setSuccess(true);

    } catch (error) {
      console.error(
        "Application submit error:",
        error
      );

      // Backend response error
      if (error.response) {
        setError(
          error.response.data?.message ||
            "Unable to submit your application. Please try again."
        );
      }

      // Network/server error
      else if (error.request) {
        setError(
          "Unable to connect to the application server. Please try again."
        );
      }

      // Other error
      else {
        setError(
          error.message ||
            "Unable to submit your application. Please try again."
        );
      }

    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // SUCCESS SCREEN
  // =====================================================

  if (success) {
    return (
      <main className="job-application-page">

        <div className="job-application-success">

          <CheckCircle2
            className="job-success-icon"
            size={70}
          />

          <h1>
            Application Submitted Successfully
          </h1>

          <p>
            Thank you for applying for the{" "}
            <strong>
              {selectedJob}
            </strong>{" "}
            position.
          </p>

          <p>
            Our team will review your application
            and contact you soon.
          </p>

          <button
            type="button"
            onClick={() =>
              navigate("/join-our-team")
            }
          >
            Back to Careers
          </button>

        </div>

      </main>
    );
  }

  // =====================================================
  // APPLICATION FORM
  // =====================================================

  return (
    <main className="job-application-page">

      <div className="job-application-container">

        {/* BACK */}

        <button
          type="button"
          className="job-application-back"
          onClick={() =>
            navigate("/join-our-team")
          }
        >
          <ArrowLeft size={18} />

          Back to Careers
        </button>

        {/* HEADER */}

        <div className="job-application-header">

          <span>
            CAREER OPPORTUNITY
          </span>

          <h1>
            Apply for {selectedJob}
          </h1>

          <p>
            Complete the form below.
            Our team will review your application
            and get back to you.
          </p>

        </div>

        {/* FORM */}

        <form
          className="job-application-form"
          onSubmit={handleSubmit}
        >

          {/* NAME */}

          <div className="job-form-group">

            <label>
              Full Name *
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />

          </div>

          {/* EMAIL */}

          <div className="job-form-group">

            <label>
              Email Address *
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
            />

          </div>

          {/* PHONE */}

          <div className="job-form-group">

            <label>
              Phone Number *
            </label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />

          </div>

          {/* QUALIFICATION */}

          <div className="job-form-group">

            <label>
              Highest Qualification *
            </label>

            <input
              type="text"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              placeholder="Example: BE ECE / B.Tech CSE"
              required
            />

          </div>

          {/* EXPERIENCE */}

          <div className="job-form-group">

            <label>
              Experience
            </label>

            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
            >

              <option value="">
                Select experience
              </option>

              <option value="Fresher">
                Fresher
              </option>

              <option value="0-1 Years">
                0-1 Years
              </option>

              <option value="1-2 Years">
                1-2 Years
              </option>

              <option value="2+ Years">
                2+ Years
              </option>

            </select>

          </div>

          {/* RESUME */}

          <div className="job-form-group">

            <label>
              Resume *
            </label>

            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleResumeChange}
              required
            />

            <small>
              PDF, DOC or DOCX — Maximum 5 MB
            </small>

          </div>

          {/* MESSAGE */}

          <div className="job-form-group">

            <label>
              Message
            </label>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us briefly about yourself..."
              rows="5"
            />

          </div>

          {/* ERROR */}

          {error && (
            <div className="job-application-error">
              {error}
            </div>
          )}

          {/* SUBMIT */}

          <button
            type="submit"
            className="job-application-submit"
            disabled={loading}
          >
            {loading
              ? "Submitting Application..."
              : "Submit Application"}
          </button>

        </form>

      </div>

    </main>
  );
};

export default JobApplication;