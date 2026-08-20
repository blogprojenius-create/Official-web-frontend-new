import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  GraduationCap,
  Handshake,
  HeartHandshake,
  Lightbulb,
  MapPin,
  Rocket,
  UsersRound,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

import "../assets/css/JoinOurTeam.css";

// =====================================================
// OPEN JOB ROLES
// =====================================================

const roles = [
  {
    title: "Frontend Developer",
    type: "Internship / Full-time",
    location: "Madurai / Hybrid",
    description:
      "Build responsive digital experiences with React, modern CSS, and a thoughtful eye for detail.",
  },

  {
    title: "Backend Developer",
    type: "Internship / Full-time",
    location: "Madurai / Hybrid",
    description:
      "Help shape secure APIs, data workflows, and the services that power our products.",
  },

  {
    title: "UI/UX Designer",
    type: "Internship",
    location: "Madurai / Hybrid",
    description:
      "Turn real user needs into clear, accessible interfaces and product prototypes.",
  },

  {
    title: "Campus & Community Lead",
    type: "Part-time / Internship",
    location: "Madurai / Remote",
    description:
      "Grow meaningful relationships with students, institutions, and technology communities.",
  },
];

// =====================================================
// COMPANY VALUES
// =====================================================

const values = [
  {
    icon: Rocket,
    title: "Build with purpose",
    description:
      "Work on practical technology solutions that create visible value for people and businesses.",
  },

  {
    icon: UsersRound,
    title: "Grow together",
    description:
      "Learn with supportive teammates, direct feedback, and room to take ownership.",
  },

  {
    icon: Lightbulb,
    title: "Bring your ideas",
    description:
      "We welcome curiosity, experiments, and better ways of solving everyday problems.",
  },
];

// =====================================================
// COLLABORATORS
// =====================================================

const collaborators = [
  {
    icon: GraduationCap,
    title: "Colleges & universities",
    description:
      "Create workshops, live projects, and career pathways that give learners industry exposure.",
  },

  {
    icon: BriefcaseBusiness,
    title: "Startups & product teams",
    description:
      "Partner with a flexible technology team to prototype, build, and improve digital products.",
  },

  {
    icon: HeartHandshake,
    title: "Communities & NGOs",
    description:
      "Co-create technology initiatives, events, and programs that make learning more accessible.",
  },
];

// =====================================================
// JOIN OUR TEAM
// =====================================================

export default function JoinOurTeam() {
  const navigate = useNavigate();

  // ===================================================
  // APPLY BUTTON
  // ===================================================

  const handleApply = (jobTitle) => {
    navigate(`/apply/${encodeURIComponent(jobTitle)}`);
  };

  return (
    <main className="join-team-page">

      {/* =================================================
          HERO
      ================================================= */}

      <section className="join-team-hero">

        <div
          className="join-team-grid"
          aria-hidden="true"
        />

        <div className="container join-team-hero-content">

          {/* Animated dot + label */}
          <div className="join-team-eyebrow">
            <span className="join-team-hero-dot" />
            Careers at ProJenius
          </div>

          {/* Main heading */}
          <h1>
            <span className="join-team-hero-heading-blue">
              Do meaningful work
            </span>{" "}
            <span className="join-team-hero-heading-white">
              with people who love to learn.
            </span>
          </h1>

          {/* Animated line */}
          <div
            className="join-team-hero-line"
            aria-hidden="true"
          />

          <p>
            Join a growing team of builders, mentors,
            and creative thinkers shaping practical
            technology experiences.
          </p>

          <div className="join-team-actions">

            <a
              href="#open-roles"
              className="join-team-primary"
            >
              View open roles
              <ArrowRight size={18} />
            </a>

            <a
              href="#collaborate"
              className="join-team-secondary"
            >
              Collaborate with us
            </a>

          </div>

          <div className="join-team-proof">

            <span>
              <BadgeCheck size={18} />
              Real projects
            </span>

            <span>
              <BadgeCheck size={18} />
              Continuous learning
            </span>

            <span>
              <BadgeCheck size={18} />
              Supportive team
            </span>

          </div>

        </div>
      </section>


      {/* =================================================
          CULTURE
      ================================================= */}

      <section className="join-team-intro section-pad">

        <div className="container join-team-split join-team-culture-head">

          <div>

            <span className="join-team-kicker join-team-culture-kicker">
              <span className="join-team-radio-dot"></span>
              OUR CULTURE
            </span>

            <h2 className="join-team-culture-title">
              Small team. Big opportunities{" "}
              <span className="join-team-highlight">
                to make an impact.
              </span>
            </h2>

            <div className="join-team-culture-title-line"></div>

          </div>

          <p>
            At ProJenius, we believe the best work happens
            when people are trusted to explore, contribute,
            and keep improving. Whether you are starting out
            or building your next chapter, your perspective
            has a place here.
          </p>

        </div>


        <div className="container join-team-value-grid">

          {values.map(
            ({
              icon: Icon,
              title,
              description,
            }) => (

              <article
                className="join-team-value"
                key={title}
              >

                <div className="join-team-icon">
                  <Icon size={25} />
                </div>

                <h3>
                  {title}
                </h3>

                <p>
                  {description}
                </p>

              </article>

            )
          )}

        </div>

      </section>


      {/* =================================================
          OPEN ROLES
      ================================================= */}

      <section
        className="join-team-roles section-pad"
        id="open-roles"
      >

        <div className="container">

          <div className="join-team-section-head join-team-open-head">

            <div>

              <span className="join-team-kicker join-team-open-kicker">
                <span className="join-team-radio-dot"></span>
                OPEN OPPORTUNITIES
              </span>

              <h2 className="join-team-open-title">
                Find your place{" "}
                <span className="join-team-highlight">
                  on the team.
                </span>
              </h2>

              <div className="join-team-open-title-line"></div>

            </div>

            <p>
              Don’t see the exact role you want?
              We still want to hear what you can bring.
            </p>

          </div>


          <div className="join-team-role-grid">

            {roles.map((role) => (

              <article
                className="join-team-role"
                key={role.title}
              >

                <div className="join-team-role-top">

                  <span>
                    {role.type}
                  </span>

                  <MapPin size={17} />

                </div>


                <h3>
                  {role.title}
                </h3>


                <p>
                  {role.description}
                </p>


                <div className="join-team-role-foot">

                  <span>
                    {role.location}
                  </span>

                  <button
                    type="button"
                    className="join-team-apply-btn"
                    onClick={() =>
                      handleApply(role.title)
                    }
                  >
                    Apply
                    <ArrowRight size={17} />
                  </button>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =================================================
          COLLABORATION
      ================================================= */}

      <section
        className="join-team-collab section-pad"
        id="collaborate"
      >

        <div className="container">

          <div className="join-team-collab-heading">

            <span className="join-team-kicker join-team-collab-kicker">
              <span className="join-team-radio-dot"></span>
              PARTNERSHIPS & COLLABORATIONS
            </span>

            <h2 className="join-team-collab-title">
              Let’s create{" "}
              <span className="join-team-highlight">
                opportunities together.
              </span>
            </h2>

            <div className="join-team-collab-title-line"></div>

            <p>
              <span>
                We partner with organisations that care about innovation,
                employability,
              </span>

              <span>
                meaningful technology outcomes.
              </span>
            </p>

          </div>


          <div className="join-team-collab-grid">

            {collaborators.map(
              ({
                icon: Icon,
                title,
                description,
              }) => (

                <article
                  className="join-team-collab-card"
                  key={title}
                >

                  <Icon size={29} />

                  <h3>
                    {title}
                  </h3>

                  <p>
                    {description}
                  </p>

                </article>

              )
            )}

          </div>


          <div className="join-team-collab-cta">

            <Handshake size={28} />

            <div>

              <strong>
                Have a collaboration in mind?
              </strong>

              <span>
                Tell us about your idea and we’ll
                start a conversation.
              </span>

            </div>

            <Link to="/contact">
              Start a conversation
              <ArrowRight size={17} />
            </Link>

          </div>

        </div>

      </section>


      {/* =================================================
          FINAL CTA
      ================================================= */}

      <section className="join-team-final section-pad">

        <div className="container">

          <div className="join-team-final-box">

            <h2>
              Ready to build your{" "}
              <span className="join-team-highlight">
                next chapter?
              </span>
            </h2>

            <div className="join-team-final-title-line"></div>

            <p>
              Send us your resume or portfolio.
              We’re excited to meet people who are
              ready to learn and contribute.
            </p>

            <button
              type="button"
              onClick={() =>
                navigate(
                  "/apply/General%20Application"
                )
              }
            >
              Join our team
              <ArrowRight size={18} />
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}