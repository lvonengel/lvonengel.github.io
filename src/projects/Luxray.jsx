import ProjectHeader from "../components/ProjectHeader";

export default function Luxray() {
  return (
    <main>
      {/* Introduction */}
      <ProjectHeader
        title="luX-Ray"
        image="/img/Luxray/InitialCAD.png"
        role="Electrical and Computer Technical Lead"
        timeline="July 2026 – December 2026"
        tools={["Leadership", "Altium", "Robotics"]}
      />
      {/* Project */}
      <section className="project-block">
        <h2 className="section-heading">Purpose</h2>
        <p>
          For my third semester in Generate, I am the electrical and computer
          technical lead where I manage 4 electrical engineers and 3 firmware
          engineers.
        </p>
        <p>
          Lumafield's CT scanners must be manually swept for radiation leaks
          before shipping, a process that takes an operator 30 to 60 minutes per
          machine. Our goal is to build an automated gantry system that moves a
          radiation sensor around the exterior of the scanner, replicating this
          manual sweep with a repeatable mechanical motion. The system will flag
          unsafe readings, avoid collisions with the scanner's exterior, and
          free up operator time.
        </p>
      </section>

      <section className="project-block">
        <h2 className="section-heading">Design Process</h2>

        {/* Electrical */}
        <div className="project-part electrical">
          <h3 className="subheading">Electrical</h3>
          <div className="part-body">
            <h4 className="topic">Main MCU PCB</h4>

            <p>
              The electrical system consists of two boards. Our main board will
              handle control for the xyz linear motors, limit switches, USB-C
              connection to the app, E-stop, and LED tower. The second board
              will be placed on the end effector and manage the rotational
              movement, IMU, distance sensor, and radeye data. These two boards
              will communicate through CAN and all wiring will be carried in
              cable chain.
            </p>
            {/* <PCBViewer modelPath="/models/.glb" fullWidth /> */}

            {/* <h4 className="topic">Physical PCB</h4>
            <div className="image-row">
              <img src="/img/GCE/MainPCBFront.jpg" alt="Main PCB front" />
              <img src="/img/GCE/MainPCBBack.jpg" alt="Main PCB back" />
            </div> */}
          </div>
        </div>

        {/* Final Result */}
        <div className="project-part result">
          <h3 className="subheading">Final Result</h3>
          <div className="part-body">
            <h4 className="topic">Overview</h4>
            <p>IN PROGESS AND WILL BE UPDATED</p>
            {/* <div className="slides-container">
              <iframe
                src={GCE_SLIDES_EMBED_URL}
                title="GCE Project Slides"
                allowFullScreen
              ></iframe>
            </div> */}

            {/* <h4 className="topic">Built Assembly</h4>

            <div className="columns">
              <img
                src="/img/GCE/FinalLower.png"
                style={{ height: "400px", width: "auto" }}
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
                src="/img/GCE/GCE_Hardware_Final_Report.pdf#zoom=100"
                title="GCE Final Report PDF"
              ></iframe>
            </div> */}
          </div>
        </div>
      </section>
    </main>
  );
}
