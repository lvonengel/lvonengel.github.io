import "./projects.css";
import ProjectHeader from "../components/ProjectHeader";
import VideoGrid from "../components/VideoGrid";

export default function PillPal() {
  return (
    <main>
      {/* Introduction */}
      <ProjectHeader
        title="Pill Pal"
        image="/img/PillDispenser/PillPalLogo.png"
        role="Electrical Engineer"
        timeline="September 2024 – December 2024"
        tools={["C++", "LVGL", "Arduino"]}
      />

      <section className="project-block">
        <h2 className="section-heading">Purpose</h2>
        <p>
          Pill Pal is is a pill dispensing robot pal made by a team of 7 product
          development engineers that makes taking medication with kids all the
          more safe and consistent. <br /> <br />
          Pill Pal creates relationships with users so that they can build good
          habits early together.
        </p>
        <p>
          <a
            href="https://github.com/lvonengel/Forge-Pill-Pal"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            View Project on GitHub →
          </a>
        </p>
      </section>

      <section className="project-block">
        <h2 className="section-heading">Design Process</h2>

        {/* Electrical */}
        <div className="project-part">
          <h3 className="subheading">Electrical</h3>
          <div className="part-body">
            <h4 className="topic">Block Diagram</h4>
            <div className="media-row">
              <img
                src="/img/PillDispenser/BlockDiagram.png"
                alt="Pill Pal block diagram"
              />
              <p>
                Here is a block diagram that was used to create an outline of
                our electrical components
              </p>
            </div>

            <h4 className="topic">Components</h4>
            <ul>
              <li>
                Designed Giga R1 Wifi circuit to interface user inputs with a
                LCD screen (Giga Display Shield).
              </li>
              <li>
                Implemented a fingerprint sensor to authorize specific users and
                the ability to change or delete select fingerprint ids.
              </li>
            </ul>
            <div className="image-row">
              <img
                src="/img/PillDispenser/GigaR1Fingerprint.png"
                alt="Giga R1 with fingerprint sensor"
              />
              <img
                src="/img/PillDispenser/GigaR1Stepper.png"
                alt="Giga R1 with stepper motor"
              />
            </div>
          </div>
        </div>

        {/* Software */}
        <div className="project-part">
          <h3 className="subheading">Software</h3>
          <div className="part-body">
            <h4 className="topic">Figma Outline</h4>
            <div className="media-row">
              <img
                src="/img/PillDispenser/FigmaOutline.png"
                alt="Figma wireframe"
              />
              <p>Here is the initial wirefame made in Figma for the LCD UI</p>
            </div>

            <h4 className="topic">User Interface</h4>
            <ul>
              <li>
                Built an engaging screen utilizing an Arduino Giga Shield with
                LVGL for UI integration
              </li>
              <li>
                Created a user and parent mode that controls the dual stepper
                motors and fingerprint sensor
              </li>
              <li>
                Created a number pad that stores information and prints out to
                user
              </li>
            </ul>
            <div className="video-row">
              <video controls>
                <source
                  src="/img/PillDispenser/ContactCaretaker.mp4"
                  type="video/mp4"
                />
                Cannot load video.
              </video>
              <video controls>
                <source src="/img/PillDispenser/UIStyle.mp4" type="video/mp4" />
                Cannot load video.
              </video>
            </div>
          </div>
        </div>

        {/* Final Result */}
        <div className="project-part">
          <h3 className="subheading">Final Result</h3>
          <div className="part-body">
            <VideoGrid
              videos={[
                {
                  src: "/img/PillDispenser/Dispense.mp4",
                  title: "Example of a child taking pills",
                },
                {
                  src: "/img/PillDispenser/EditPillAmount.mp4",
                  title:
                    "From the parent mode, they can change the amount of pills per day",
                },
                {
                  src: "/img/PillDispenser/WrongFingerprint.mp4",
                  title:
                    "Simulation if the user is not the registered fingerprint",
                },
              ]}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
