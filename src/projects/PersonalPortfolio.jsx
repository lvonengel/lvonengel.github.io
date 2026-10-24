import "./projects.css";
import ProjectHeader from "../components/ProjectHeader";
export default function PersonalPortfolio() {
  return (
    <main>
      {/* Introduction */}
      <ProjectHeader
        title="Website Portfolio"
        image="/img/PersonalPortfolio/Website.png"
        role="Solo developer"
        tools={["React", "Vite", "Node.js"]}
      />

      <section className="project-block">
        <h2 className="section-heading">Purpose</h2>
        <p>
          My most recent web development project has been updating my website
          portfolio. <br /> <br />I originally coded my portfolio in HTML, CSS,
          and JS, but it looked outdated and unprofessional. For my new website,
          I used React and Vite to create a cleaner and friendlier design
          including animations.
        </p>
        <p>
          <a
            href="https://github.com/lvonengel/lvonengel.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            View New Website on GitHub →
          </a>
        </p>
      </section>
    </main>
  );
}
