import { useState } from "react";
import "../styles/Sidebar.css";

const navigation = [
  { name: "Home", href: "#home", icon: "bi-house" },
  { name: "About", href: "#about", icon: "bi-person" },
  { name: "Blog", href: "/blog", icon: "bi-journal-text" },
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
          <div className="profile-avatar">KM</div>
          <h2>Kourtney McCullough</h2>
          <p>AI Cloud & DevOps Engineering</p>

          <div className="sidebar-socials">
            <a
              href="https://github.com/"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-github" />
            </a>
            <a
              href="https://linkedin.com/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-linkedin" />
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

