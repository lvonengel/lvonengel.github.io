import { useState } from "react";
import "./projects.css";
import PCBViewer from "../components/PCBViewer";

const RIVER_GAUGE_SLIDES_EMBED_URL =
  "https://docs.google.com/presentation/d/1qVnTSXfOrcCEBgbSoyVSYVdiSkL9_mIKcLqiptY-WUg/embed?start=false&loop=false";

export default function RiverGauge() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeSection, setActiveSection] = useState(null);

  return (
    <main>
      {/* Introduction */}
      <h1 className="title">River Gauge</h1>

      <div className="columns">
        <img
          src="/img/RiverGauge/RiverGauge.png"
          style={{ height: "200px", width: "auto" }}
        />
        <div className="projectOverview">
          <h2>Project Overview</h2>
          <p>
            River Gauge is a low cost, autonomous river monitoring device that
            measures water level and sends real time data to a public website.
            It is designed to be easy to install, low maintenance, low cost, and
            durable enough to operate in harsh outdoor river environments.
          </p>
        </div>
      </div>

      <h2 className="heading">The Objectives</h2>
      <p>
        <div className="columns">
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
        </div>
      </p>

      {/* Skills Learned */}
      <h2 className="heading">Skills Learned</h2>
      <p>Hardware: PCB Design, ARM MCU</p>
      <p>Software: Altium</p>
      <p>Language: C, Zephyr RTOS</p>

      {/* Personal Contribution */}
      <section>
        <h2 className="heading">
          Personal Contributions (Press Buttons Below)
        </h2>

        <div className="buttonContributions">
          <button
            onClick={() =>
              setActiveSection(
                activeSection === "electrical" ? null : "electrical",
              )
            }
            className={activeSection === "electrical" ? "activeButton" : ""}
          >
            Electrical Contribution
          </button>

          <button
            onClick={() =>
              setActiveSection(activeSection === "software" ? null : "software")
            }
            className={activeSection === "software" ? "activeButton" : ""}
          >
            Firmware Contribution
          </button>

          <button
            onClick={() =>
              setActiveSection(activeSection === "result" ? null : "result")
            }
            className={activeSection === "result" ? "activeButton" : ""}
          >
            Final Result
          </button>
        </div>
      </section>

      {/* Electrical Contributions */}
      {activeSection == "electrical" && (
        <div className="electrical">
          <h2>Full System Block Diagram</h2>
          <img
            src="/img/RiverGauge/BlockDiagram.png"
            style={{ height: "300px", width: "auto" }}
          />

          {/* 3D Render */}
          {/* <h2>PCB 3D Model</h2> */}
          {/* <PCBViewer modelPath="/models/RiverGaugePCB.glb" cameraPosition={[0, 0, 5]} fov={35} /> */}

          {/* Schematic Section */}
          <section className="schematic-section">
            <h2>Schematic Highlights</h2>

            <div className="schematic-grid">
              {[{ src: "/img/RiverGauge/Power.png", label: "Power" }].map(
                (item, idx) => (
                  <div
                    key={idx}
                    className="schematic-card"
                    onClick={() => setSelectedImage(item.src)}
                  >
                    <img src={item.src} alt={item.label} />
                    <p>{item.label}</p>
                  </div>
                ),
              )}
            </div>
            <h2 className="heading">Physical PCB</h2>
            <img
              src="/img/RiverGauge/3DPCB.png"
              style={{ height: "400px", width: "auto" }}
            />
          </section>

          {/* Opens larger picture when selected */}
          {selectedImage && (
            <div
              className="modal-overlay"
              onClick={() => setSelectedImage(null)}
            >
              <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <img src={selectedImage} alt="Schematic Zoom" />
                <button
                  className="close-btn"
                  onClick={() => setSelectedImage(null)}
                >
                  ×
                </button>
              </div>
            </div>
          )}

          <h2>Physical Sensor Testing</h2>
          <p>
            The pressure sensor was originally tested with the nRF54l15 dev kit
            before testing with the custom PCB.
          </p>
          <div className="columns">
            <img
              src="/img/RiverGauge/PressureSensorSchematic.jpg"
              style={{ height: "350px", width: "auto" }}
            />
            <img
              src="/img/RiverGauge/PressureSensorCircuit.jpeg"
              style={{ height: "350px", width: "auto" }}
            />
          </div>
        </div>
      )}

      {/* Software Contribution */}
      {activeSection == "software" && (
        <div className="software">
          <h2>Sensor Acquisition</h2>
          <p>
            The firmware consisted of Zephyr RTOS on a NRF54L15 Nordic Chip.
          </p>
          <a
            href="https://github.com/GenerateNU/River-Gauge"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            View Project on GitHub →
          </a>
          <br /> <br />
          <div className="columns">
            <video width="350" controls>
              <source
                src="/img/RiverGauge/PressureSensorSequence.mp4"
                type="video/mp4"
              />
              Cannot load video.
            </video>
            <p>
              The sensor takes a burst sequence of 10 measurements from the ADC.
              It then takes the average and sends this value through LoRa to the
              website database.
              <br /> <br />
              The video to the left is an example of the values that are
              displayed when changing the depth by 2 feet.
            </p>
          </div>
        </div>
      )}

      {/* Final Result */}
      {activeSection == "result" && (
        <div className="result">
          <h2 className="heading">Overview</h2>
          <div className="slides-container">
            <iframe
              src={RIVER_GAUGE_SLIDES_EMBED_URL}
              title="GCE Project Slides"
              allowFullScreen
            ></iframe>
          </div>

          <h2 className="heading">Built Assembly</h2>
          <p>
            There were two parts of this project. One part was drilled into the
            center of the river, while the other box that held the PCB and
            electronics were placed next to the river.
          </p>

          <div className="columns">
            <img
              src="/img/RiverGauge/RiverGaugeSensor.png"
              style={{ height: "300px", width: "auto" }}
            />
            <img
              src="/img/RiverGauge/RiverGaugeBox.png"
              style={{ height: "300px", width: "auto" }}
            />
          </div>

          <h2 className="heading">Final Report</h2>
          <p>
            This document was delivered to the client as the final reference,
            outlining all design decisions and providing the information needed
            to confidently operate the system.
            <br /> <br />
            The electrical design begins on page 13.
          </p>
          <div className="pdf-container">
            <iframe
              src="/img/RiverGauge/HardwareFinalReport.pdf#zoom=100"
              title="GCE Final Report PDF"
            ></iframe>
          </div>
        </div>
      )}
    </main>
  );
}
