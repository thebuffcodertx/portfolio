import { useState } from "react";
import "../styles/Sidebar.css";
import profileImage from "../assets/kourtney-headshot.png";

const navigation = [
  { name: "Home", href: "#home", icon: "bi-house" },
  { name: "About", href: "#about", icon: "bi-person" },
  { name: "Blog", href: "/blog", icon: "bi-journal-text" },

   // Future features
//   { name: "Resume", href: "/resume", icon: "bi-file-earmark-person" },
//   { name: "Projects", href: "/projects", icon: "bi-cloud" },
//   { name: "Contact", href: "#contact", icon: "bi-envelope" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="sidebar-toggle d-lg-none"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        aria-controls="portfolio-sidebar"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i
          className={`bi ${isOpen ? "bi-x-lg" : "bi-list"}`}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div
          className="sidebar-overlay d-lg-none"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        id="portfolio-sidebar"
        className={`portfolio-sidebar ${isOpen ? "open" : ""}`}
      >
        <div className="sidebar-profile">
          <div className="profile-avatar">
            <img src={profileImage} alt="Kourtney McCullough" className="profile-image" />
          </div>
          <h2 className="sidebar-name">Kourtney McCullough</h2>
          <p>AI Cloud & DevOps Engineering</p>

          <div className="sidebar-socials">
            <a
              href="https://github.com/thebuffcodertx"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-github" />
            </a>
     
            <a
              href="https://www.linkedin.com/in/kourtney-mccullough/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-linkedin" />
            </a>

                   <a
              href="https://www.youtube.com/@buffcoder2430"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-youtube" />
            </a>
            <a
              href="https://www.instagram.com/developer.mac/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-instagram" />
            </a>
          </div>
        </div>

        <nav className="sidebar-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              <i className={`bi ${item.icon}`} aria-hidden="true" />
              <span>{item.name}</span>
            </a>
          ))}
        </nav>

        <footer className="sidebar-footer">
          <p>© {new Date().getFullYear()} Kourtney McCullough</p>
        </footer>
      </aside>
    </>
  );
}

