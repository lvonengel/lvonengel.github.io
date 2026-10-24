import "./projects.css";
import PCBViewer from "../components/PCBViewer";
import ProjectHeader from "../components/ProjectHeader";

const RIVER_GAUGE_SLIDES_EMBED_URL =
  "https://docs.google.com/presentation/d/1qVnTSXfOrcCEBgbSoyVSYVdiSkL9_mIKcLqiptY-WUg/embed?start=false&loop=false";

export default function RiverGauge() {
  return (
    <main>
      {/* Introduction */}
      <ProjectHeader
        title="River Gauge"
        image="/img/RiverGauge/RiverGauge.png"
        role="Electrical and Computer Engineer"
        timeline="January 2026 – April 2026"
        tools={["Altium", "C", "Zephyr RTOS", "PCB Design", "ARM MCU"]}
      />

      <section className="project-block">
        <h2 className="section-heading">Purpose</h2>
        <p>
          River Gauge is a low cost, autonomous river monitoring device that
          measures water level and sends real time data to a public website. It
          is designed to be easy to install, low maintenance, low cost, and
          durable enough to operate in harsh outdoor river environments.
        </p>
        <p className="minor-heading">The Objectives</p>
        <ul>
          <li>
            Deployable in streams with depths of 1–4 ft and widths of 10–20 ft
          </li>
          <li>
            Withstand flood stage increases, debris impact, and freeze thaw
            cycles
          </li>
          <li>
            Stream data to a public website with updates at least every 30
            minutes
          </li>
          <li>
            Operate autonomously for ~12 months on battery with LoRa
            transmission
          </li>
        </ul>
      </section>

      <section className="project-block">
        <h2 className="section-heading">Design Process</h2>

        {/* Electrical */}
        <div className="project-part electrical">
          <h3 className="subheading">Electrical</h3>
          <div className="part-body">
            <h4 className="topic">Full System Block Diagram</h4>
            <img
              src="/img/RiverGauge/BlockDiagram.png"
              alt="Full system block diagram"
            />

            {/* 3D Render */}
            {/* <h4 className="topic">PCB 3D Model</h4> */}
            {/* <PCBViewer modelPath="/models/RiverGaugePCB.glb" fullWidth /> */}

            <h4 className="topic">Physical PCB</h4>
            <img src="/img/RiverGauge/3DPCB.png" alt="River Gauge PCB" />

            <h4 className="topic">Physical Sensor Testing</h4>
            <p>
              The pressure sensor was originally tested with the nRF54l15 dev
              kit before testing with the custom PCB.
            </p>
            <div className="image-row">
              <img
                src="/img/RiverGauge/PressureSensorSchematic.jpg"
                alt="Pressure sensor test schematic"
              />
              <img
                src="/img/RiverGauge/PressureSensorCircuit.jpeg"
                alt="Pressure sensor test circuit"
              />
            </div>
          </div>
        </div>

        {/* Firmware */}
        <div className="project-part software">
          <h3 className="subheading">Firmware</h3>
          <div className="part-body">
            <h4 className="topic">Sensor Acquisition</h4>
            <p>
              The firmware consisted of Zephyr RTOS on a NRF54L15 Nordic Chip.
            </p>
            <p>
              <a
                href="https://github.com/GenerateNU/River-Gauge"
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                View Project on GitHub →
              </a>
            </p>
            <div className="media-row">
              <video controls>
                <source
                  src="/img/RiverGauge/PressureSensorSequence.mp4"
                  type="video/mp4"
                />
                Cannot load video.
              </video>
              <p>
                The sensor takes a burst sequence of 10 measurements from the
                ADC. It then takes the average and sends this value through LoRa
                to the website database.
                <br /> <br />
                The video to the left is an example of the values that are
                displayed when changing the depth by 2 feet.
              </p>
            </div>
          </div>
        </div>

        {/* Final Result */}
        <div className="project-part result">
          <h3 className="subheading">Final Result</h3>
          <div className="part-body">
            <h4 className="topic">Overview</h4>
            <div className="slides-container">
              <iframe
                src={RIVER_GAUGE_SLIDES_EMBED_URL}
                title="River Gauge Project Slides"
                allowFullScreen
              ></iframe>
            </div>

            <h4 className="topic">Built Assembly</h4>
            <p>
              There were two parts of this project. One part was drilled into
              the center of the river, while the other box that held the PCB and
              electronics were placed next to the river.
            </p>
            <div className="image-row">
              <img
                src="/img/RiverGauge/RiverGaugeSensor.png"
                alt="River sensor"
              />
              <img
                src="/img/RiverGauge/RiverGaugeBox.png"
                alt="Electronics box"
              />
            </div>

            <h4 className="topic">Final Report</h4>
            <p>
              This document was delivered to the client as the final reference,
              outlining all design decisions and providing the information
              needed to confidently operate the system.
              <br /> <br />
              The electrical design begins on page 13.
            </p>
            <div className="pdf-container">
              <iframe
                src="/img/RiverGauge/HardwareFinalReport.pdf#zoom=100"
                title="River Gauge Final Report PDF"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
