import "./projects.css";
import PCBViewer from "../components/PCBViewer";
import ProjectHeader from "../components/ProjectHeader";

const GCE_SLIDES_EMBED_URL =
  "https://docs.google.com/presentation/d/1b_ouK8cO3UOaYBha5TpRkS9OlhQ9wV4mo2k3saKRWtI/embed?start=false&loop=false";

export default function GCE() {
  return (
    <main>
      {/* Introduction */}
      <ProjectHeader
        title="Autonomous Air Filter Separation"
        image="/img/GCE/GCEFinal.PNG"
        role="Electrical and Computer Engineer"
        timeline="September 2025 – December 2025"
        tools={["Altium", "Computer Vision", "C", "Python", "Jupyter Notebook"]}
      />

      <section className="project-block">
        <h2 className="section-heading">Purpose</h2>
        <p>
          GCE is an air filter manufacturer in Taiwan. Inside every filter,
          separators have to be placed between the pleats, and their workers
          were doing it by hand. At 50 to 70 seconds per filter, it was the
          slowest step in production, and with a shortage of workers, GCE
          couldn't scale up to meet growing demand.
        </p>
        <p>
          Our team of 12 engineers set out to automate it. A machine could place
          separators faster and more consistently than a person, keep production
          running at high volume, and spare workers from tedious, repetitive
          work.
        </p>
      </section>

      <section className="project-block">
        <h2 className="section-heading">Design Process</h2>

        {/* Electrical */}
        <div className="project-part electrical">
          <h3 className="subheading">Electrical</h3>
          <div className="part-body">
            <h4 className="topic">Main MCU PCB</h4>
            <PCBViewer modelPath="/models/GCEPCB3D.glb" fullWidth />

            <h4 className="topic">Physical PCB</h4>
            <div className="image-row">
              <img src="/img/GCE/MainPCBFront.jpg" alt="Main PCB front" />
              <img src="/img/GCE/MainPCBBack.jpg" alt="Main PCB back" />
            </div>

            <h4 className="topic">Pleat Separation</h4>
            <p>The lead screw was powered by a BLDC motor.</p>
            <video controls>
              <source src="/img/GCE/PleatSeparation.mp4" type="video/mp4" />
              Cannot load video.
            </video>
          </div>
        </div>

        {/* Software */}
        <div className="project-part software">
          <h3 className="subheading">Software</h3>
          <div className="part-body">
            <h4 className="topic">Image Processing</h4>
            <div className="columns">
              <img
                src="/img/GCE/ImageProcessingExample.png"
                style={{ height: "450px", width: "auto" }}
              />
              <p>
                Image processing was performed using an Arducam B0400 camera
                connected over SPI. After the lead screw separated the filter,
                the MCU captured an image at the location most likely to show
                misalignment. It then calculated whether the spacing between
                each pleat peak was approximately 10mm in real life. Finally,
                the system sent a pass/fail signal back to the MCU based on this
                measurement.
              </p>
            </div>
            <p className="minor-heading">How does this work?</p>
            <p>
              The image processing pipeline began by blurring the image to make
              thresholding easier. A binary threshold was then applied where
              pixels above the threshold were set to 255, and those below were
              set to 0. Next, the program summed the pixel values in each
              column, and the local maxima in this column-sum array were
              interpreted as pleat peaks. <br />
              <br />
              This method relied on the fact that it would be relatively bright
              underneath each pleat being bright relative to its surroundings so
              that the peaks could be clearly detected (seen in the image
              above).
            </p>
          </div>
        </div>

        {/* Final Result */}
        <div className="project-part result">
          <h3 className="subheading">Final Result</h3>
          <div className="part-body">
            <h4 className="topic">Overview</h4>
            <div className="slides-container">
              <iframe
                src={GCE_SLIDES_EMBED_URL}
                title="GCE Project Slides"
                allowFullScreen
              ></iframe>
            </div>

            <h4 className="topic">Built Assembly</h4>

            <div className="columns">
              <img
                src="/img/GCE/FinalLower.png"
                style={{ height: "400px", width: "auto" }}
              />
              <p>
                This served as the main control board. Our setup included three
                boards: one for input, one for output, and one acting as the
                central controller. The input board managed filter transport and
                alignment, while the output board handled pleat separation and
                comb insertion.
              </p>
            </div>
            <div className="columns">
              <p>
                This is the pleat-separation stage of the system. A BLDC motor
                powers a lead screw, and each pleat clips into the screw thread.
                The lead screw’s pitch determines the spacing between pleats,
                ensuring consistent and accurate separation.
              </p>
              <img
                src="/img/GCE/FinalTopView.jpg"
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
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
