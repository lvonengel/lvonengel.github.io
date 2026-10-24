import "./projects.css";
import ProjectHeader from "../components/ProjectHeader";
export default function EmbeddedSpider() {
  return (
    <main>
      <ProjectHeader
        title="Spider Robot"
        image="/img/EmbeddedSpider/embeddedSpider.jpg"
        tools={[
          "C++",
          "Embedded",
          "Quartus",
          "MobaXterm",
          "Memory Mapping",
          "PWM",
          "Linux",
        ]}
      />

      <section className="project-block">
        <h2 className="section-heading">Purpose</h2>
        <p>
          This project used a DE1-SoC and DE10Nano-Soc to code and control a 6
          legged spider.
          <br /> <br />I designed movement control logic in C++ for
          initialization and walking.
        </p>
        <p>
          <a
            href="https://github.com/lvonengel/SpiderRobot"
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

        <div className="project-part">
          <h3 className="subheading">Spider Moving</h3>
          <div className="part-body">
            <div className="video-row">
              <video controls>
                <source
                  src="/img/EmbeddedSpider/spiderMoving.mp4"
                  type="video/mp4"
                />
                Cannot load video.
              </video>
            </div>
          </div>
        </div>

        <div className="project-part">
          <h3 className="subheading">Spider Moving With a Sensor</h3>
          <div className="part-body">
            <div className="video-row">
              <video controls>
                <source
                  src="/img/EmbeddedSpider/SpiderWithSensor.mp4"
                  type="video/mp4"
                />
                Cannot load video.
              </video>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
