
import "../styles/Footer.css";

const socialLinks = [
  {
    name: "GitHub",
    icon: "bi-github",
    href: "https://github.com/thebuffcodertx",
  },
  {
    name: "LinkedIn",
    icon: "bi-linkedin",
    href: "https://www.linkedin.com/in/kourtney-mccullough/",
  },
  {
    name: "YouTube",
    icon: "bi-youtube",
    href: "https://www.youtube.com/@buffcoder2430",
  },
  {
    name: "Email",
    icon: "bi-envelope",
    href: "mailto:kourtney.mccullough.tx@gmail.com",
  },
];

export default function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="container">
        <h2 className="footer-name">Kourtney McCullough</h2>

        <p className="footer-tagline">
          Building in the cloud. Learning in public.
        </p>

        <div className="footer-socials">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              aria-label={link.name}
              target={link.name === "Email" ? undefined : "_blank"}
              rel={link.name === "Email" ? undefined : "noopener noreferrer"}
            >
              <i className={`bi ${link.icon}`} aria-hidden="true" />
            </a>
          ))}
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Kourtney McCullough.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
