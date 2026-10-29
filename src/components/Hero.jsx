import heroImage from "../assets/hero-bg-1.png";
import "../styles/Hero.css";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>Kourtney McCullough</h1>
        <p>AI Cloud Engineering & DevOps</p>
        <span className="hero-tagline">
          I'm building my skills, putting in the work, and sharing what I learn
          along the way.
        </span>
      </div>
    </section>
  );
}
