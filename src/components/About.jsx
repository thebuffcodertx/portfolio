
import "../styles/About.css";

const focusAreas = [
  {
    icon: "bi-cloud",
    title: "Cloud Engineering",
    description: "Learning cloud infrastructure, networking, and deployment.",
  },
  {
    icon: "bi-gear",
    title: "DevOps & Automation",
    description: "Exploring automation, containers, and CI/CD workflows.",
  },
  {
    icon: "bi-code-slash",
    title: "Web Development",
    description: "Building responsive and accessible web applications.",
  },
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container-fluid about-container">
        <div className="about-heading">
          <span className="about-eyebrow">GET TO KNOW ME</span>
          <h2>About Me</h2>
          <div className="about-divider" />
        </div>

        <div className="row g-5 align-items-start">
          <div className="col-lg-7">
            <h3>
              Building skills. Solving problems.
              <span> Staying curious.</span>
            </h3>

            <p>
              I'm Kourtney McCullough, a developer with a
              background in web development and a growing
              interest in AI, cloud engineering, and DevOps.
            </p>

            <p>
              I'm preparing to begin an AI Cloud Engineering
              and DevOps program, where I'll expand my
              knowledge of cloud infrastructure, automation,
              and modern deployment practices.
            </p>

            <p>
              I created this portfolio to document that
              journey—not just the projects I build, but
              the challenges, lessons, and progress along
              the way.
            </p>

            <p>
              I believe in continuous learning, solving
              real problems, and building things that serve
              a purpose.
            </p>
          </div>

          <div className="col-lg-5">
            <div className="about-details">
              <h4>A Few Things About Me</h4>

              <div className="about-detail">
                <i className="bi bi-code-square" aria-hidden="true" />
                <div>
                  <strong>Background</strong>
                  <span>Web Development</span>
                </div>
              </div>

              <div className="about-detail">
                <i className="bi bi-mortarboard" aria-hidden="true" />
                <div>
                  <strong>Current Focus</strong>
                  <span>AI Cloud Engineering & DevOps</span>
                </div>
              </div>

              <div className="about-detail">
                <i className="bi bi-journal-code" aria-hidden="true" />
                <div>
                  <strong>My Approach</strong>
                  <span>Hands-on learning and documentation</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-focus">
          <h3>What I'm Exploring</h3>

          <div className="row g-4">
            {focusAreas.map((area) => (
              <div className="col-md-4" key={area.title}>
                <article className="focus-card">
                  <div className="focus-icon">
                    <i
                      className={`bi ${area.icon}`}
                      aria-hidden="true"
                    />
                  </div>

                  <h4>{area.title}</h4>
                  <p>{area.description}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
