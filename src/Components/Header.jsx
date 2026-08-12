import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import "../assets/css/Header.css";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  {
    label: "Services",
    to: "/services",
    dropdown: [
      { to: "/services", label: "Development" },
      { to: "/courses", label: "Courses" },
      { to: "/internship", label: "Internship" },
      { to: "/career-guidance", label: "Career Guidance" },
    ],
  },
  { to: "/workshop", label: "Workshop" },
  { to: "/startup", label: "Startup Supporter" },
  { to: "/join-our-team", label: "Join Our Team" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const lastScrollYRef = useRef(0);
  const idleTimerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const clearIdleTimer = () => {
      if (idleTimerRef.current) {
        window.clearTimeout(idleTimerRef.current);
        idleTimerRef.current = null;
      }
    };

    const scheduleIdleHide = () => {
      clearIdleTimer();
      idleTimerRef.current = window.setTimeout(() => {
        if (window.scrollY > 70 && !menuOpen) {
          setShowHeader(false);
        }
      }, 1300);
    };

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollYRef.current;
      lastScrollYRef.current = currentScrollY;

      setScrolled(currentScrollY > 24);

      if (menuOpen || currentScrollY < 50) {
        clearIdleTimer();
        setShowHeader(true);
        return;
      }

      if (delta > 6) {
        clearIdleTimer();
        setShowHeader(false);
      } else if (delta < -6) {
        setShowHeader(true);
        scheduleIdleHide();
      }
    };

    lastScrollYRef.current = window.scrollY;
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearIdleTimer();
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("nav-open", menuOpen);
    return () => document.body.classList.remove("nav-open");
  }, [menuOpen]);

  const isActive = (link) => {
    if (link.dropdown) {
      return link.to === location.pathname || link.dropdown.some((item) => item.to === location.pathname);
    }

    return link.to === location.pathname;
  };

  return (
    <header className={`enterprise-header ${scrolled ? "is-scrolled" : ""} ${showHeader ? "is-visible" : "is-hidden"}`}>
      <div className="enterprise-nav-shell">
        <Link to="/" className="enterprise-logo" aria-label="ProJenius Home">
          <span className="enterprise-brand-mark" aria-hidden="true"></span>
          <span className="enterprise-brand-name" aria-hidden="true">
            <span className="enterprise-brand-pro">Pro</span><span className="enterprise-brand-jenius">Jenius</span>
          </span>
        </Link>

        <nav className="enterprise-nav-links" aria-label="Main navigation">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                className={`enterprise-nav-item has-dropdown ${isActive(link) ? "active" : ""}`}
                key={link.label}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                onFocus={() => setServicesOpen(true)}
              >
                <button
                  type="button"
                  className="enterprise-nav-link enterprise-nav-button"
                  onClick={() => setServicesOpen((open) => !open)}
                  aria-expanded={servicesOpen}
                >
                  {link.label}
                  <ChevronDown size={15} aria-hidden="true" />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      className="enterprise-dropdown"
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          className={`enterprise-dropdown-item ${location.pathname === item.to ? "active" : ""}`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className={`enterprise-nav-link ${isActive(link) ? "active" : ""}`}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <button
          className="enterprise-menu-button"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="enterprise-mobile-panel"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav aria-label="Mobile navigation">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div className="enterprise-mobile-group" key={link.label}>
                    <button
                      className={`enterprise-mobile-link enterprise-mobile-toggle ${servicesOpen ? "open" : ""}`}
                      type="button"
                      onClick={() => setServicesOpen((open) => !open)}
                      aria-expanded={servicesOpen}
                    >
                      {link.label}
                      <ChevronDown size={16} aria-hidden="true" />
                    </button>

                    <AnimatePresence initial={false}>
                      {servicesOpen && (
                        <motion.div
                          className="enterprise-mobile-subnav"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                        >
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.to}
                              to={item.to}
                              className={`enterprise-mobile-link sub ${location.pathname === item.to ? "active" : ""}`}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`enterprise-mobile-link ${isActive(link) ? "active" : ""}`}
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
