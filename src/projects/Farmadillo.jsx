import "./projects.css";
import ProjectHeader from "../components/ProjectHeader";

export default function Farmadillo() {
  return (
    <main>
      <ProjectHeader
        title="Farmadillo"
        image="/img/Greenhouse/FarmadilloLogo.png"
        role="Electrical Engineer"
        timeline="January 2024 – April 2024"
        tools={["C++", "Arduino", "Figma"]}
      />

      <section className="project-block">
        <h2 className="section-heading">Purpose</h2>
        <p>
          The automatic greenhouse, known as Farmadillo, is an easy-to-assemble
          product that allows users to keep their plant in a safe and controlled
          environment outdoors, keeping away pests and shading it from excessive
          light. <br /> <br />
          Using the controlled box, users can wirelessly assign unique plant
          profiles to each Farmadillo "shell," allowing a system of
          easily-controlled greenhouses to be set up across one yard. The
          control box will provide information on the optimal amount of
          sunlight, closing or opening the dome.
        </p>
      </section>

      <section className="project-block">
        <h2 className="section-heading">Design Process</h2>

        {/* Electrical */}
        <div className="project-part">
          <h3 className="subheading">Electrical</h3>
          <div className="part-body">
            <h4 className="topic">The Dome</h4>
            <p>
              Programmed and controlled dual servos for dome actuation for a
              fully automated and responsive greenhouse environment
            </p>
            <div className="flow-row">
              <img
                src="/img/Greenhouse/GreenhouseMaterial.png"
                alt="Greenhouse dome material"
              />
              <img
                className="flow-arrow"
                src="/img/Greenhouse/arrow.png"
                alt=""
              />
              <img
                src="/img/Greenhouse/CoverClosed.png"
                alt="Dome with the cover closed"
              />
            </div>
            <div className="video-row">
              <video controls>
                <source src="/img/Greenhouse/servos.mp4" type="video/mp4" />
                Cannot load video.
              </video>
              <video controls>
                <source
                  src="/img/Greenhouse/servoWithCover.mp4"
                  type="video/mp4"
                />
                Cannot load video.
              </video>
            </div>

            <h4 className="topic">Sensors</h4>
            <p>
              Programmed a lux and moisture sensor to fully automate the dome.
            </p>
            <div className="image-row">
              <img src="/img/Greenhouse/LuxSensor.png" alt="Lux sensor" />
              <img
                src="/img/Greenhouse/MoistureSensor.png"
                alt="Moisture sensor"
              />
            </div>
          </div>
        </div>

        {/* Software */}
        <div className="project-part">
          <h3 className="subheading">Software</h3>
          <div className="part-body">
            <h4 className="topic">App Design</h4>
            <p>
              <a
                href="https://www.figma.com/proto/9EvpaHiCn66HPtarekhZex/Forge-App-Idea?node-id=0-1&t=56Wz9oQddgJ1smLV-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Here
              </a>{" "}
              is an outline of the app created in Figma. In this app, the user
              can store different plant profiles that require different amount
              of sunlight.
            </p>
            <img
              src="/img/Greenhouse/OutlineFigma.png"
              alt="Figma outline of the app"
            />

            <h4 className="topic">LCD Screen</h4>
            <p>
              Developed an automatic greenhouse system with integrated lux and
              soil moisture sensors to optimize plant protection by dynamically
              opening and closing a dome based on sunlight and soil moisture
              levels
            </p>
            <img src="/img/Greenhouse/LCDScreen.png" alt="LCD screen" />
          </div>
        </div>

        {/* Final Result */}
        <div className="project-part">
          <h3 className="subheading">Final Result</h3>
          <div className="part-body">
            <div className="image-row">
              <img src="/img/Greenhouse/ControlBox.png" alt="Control box" />
              <img
                src="/img/Greenhouse/FinalProduct.png"
                alt="Finished Farmadillo"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
