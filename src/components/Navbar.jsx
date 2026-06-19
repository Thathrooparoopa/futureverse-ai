import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import "./Navbar.css";

const sections = [
  {
    id: "hero",
    year: "2026",
    title: "The Beginning",
  },
  {
    id: "year2035",
    year: "2035",
    title: "AI Co-Pilot",
  },
  {
    id: "year2050",
    year: "2050",
    title: "Smart Cities",
  },
  {
    id: "year2075",
    year: "2075",
    title: "Human + AI Evolution",
  },
  {
    id: "year2100",
    year: "2100",
    title: "Planetary Intelligence",
  },
  {
    id: "year2126",
    year: "2126",
    title: "The Choice",
  },
];

function Navbar() {
  const [active, setActive] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });

    setMobileOpen(false);
  };

  return (
    <>
      {/* Desktop */}
      <div
        ref={navRef}
        className="timeline-navbar"
      >
        {sections.map((item, index) => (
          <div
            key={item.id}
            className="timeline-item"
          >
            <div
              className={`timeline-node ${
                active === item.id
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                scrollToSection(item.id)
              }
            >
              <span className="tooltip">
                <strong>
                  {item.year}
                </strong>

                <br />

                {item.title}
              </span>
            </div>

            {index !==
              sections.length - 1 && (
              <div className="timeline-line" />
            )}
          </div>
        ))}
      </div>

      {/* Mobile */}
      <button
        className="mobile-toggle"
        onClick={() =>
          setMobileOpen(!mobileOpen)
        }
      >
        ☰
      </button>

      {mobileOpen && (
        <div className="mobile-panel">
          {sections.map((item) => (
            <button
              key={item.id}
              onClick={() =>
                scrollToSection(item.id)
              }
            >
              {item.year}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

export default Navbar;