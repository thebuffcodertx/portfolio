
import "../styles/About.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container-fluid about-container">
        <div className="about-heading">
          <span className="about-eyebrow">THE STORY SO FAR</span>
          <h2>About Me</h2>
          <div className="about-divider" />
        </div>

        <div className="about-content">
          <p className="about-intro">
            I'm Kourtney McCullough, a U.S. Navy veteran and
            developer working my way into AI-powered cloud
            engineering.
          </p>

          <p>
            I spent 11 years in the Navy, first as a
            Machinist's Mate keeping shipboard systems running,
            then as a Recruiter helping people find their next
            path. Both roles taught me that reliable systems and
            clear communication matter just as much in technology
            as they did at sea.
          </p>

          <p>
            After the Navy, I earned my B.A. in Business
            Administration from Southern New Hampshire
            University (SNHU) and spent six years as a Marketing
            Developer at Primal Labs, building e-commerce funnels
            and websites.
          </p>

          <p>
            Now, I'm developing my skills through Code Platoon's
            AI Cloud &amp; DevOps program, learning to build,
            automate, and scale cloud infrastructure while
            exploring how AI fits into modern engineering
            workflows.
          </p>

          <p className="about-highlight">
            This site is where I document the journey:{" "}
            <strong>
              what I'm learning, what I'm building, and what I'm
              breaking along the way.
            </strong>
          </p>

          <p>
            When I'm not coding, you'll find me behind a camera,
            in the gym, or creating videos for my YouTube channel,{" "}
            <strong>
              <a
                className="text-link"
                href="https://www.youtube.com/@buffcoder2430"
                target="_blank"
                rel="noopener noreferrer"
              >
                BuffCoder
              </a>
            </strong>.
          </p>
        </div>

        <div className="about-info">
          <h3>A Few Details</h3>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="about-info-item">
                <i className="bi bi-globe" aria-hidden="true" />
                <div>
                  <strong>Website: </strong>
                  <a href="https://kourtneymccullough.com">
                    kourtneymccullough.com
                  </a>
                </div>
              </div>

              <div className="about-info-item">
                <i className="bi bi-geo-alt" aria-hidden="true" />
                <div>
                  <strong>Location: </strong>
                  <span>Dallas–Fort Worth, Texas</span>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="about-info-item">
                <i className="bi bi-mortarboard" aria-hidden="true" />
                <div>
                  <strong>Education: </strong>
                  <span>B.A. Business Administration, SNHU</span>
                </div>
              </div>

              <div className="about-info-item">
                <i className="bi bi-briefcase" aria-hidden="true" />
                <div>
                  <strong>Background: </strong>
                  <span>U.S. Navy Veteran · Web Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
