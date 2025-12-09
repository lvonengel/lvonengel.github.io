import { useState } from "react"
import './projects.css'
import PCBViewer from '../components/PCBViewer'

const GCE_SLIDES_EMBED_URL =
    "https://docs.google.com/presentation/d/1b_ouK8cO3UOaYBha5TpRkS9OlhQ9wV4mo2k3saKRWtI/embed?start=false&loop=false";

export default function GCE() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeSection, setActiveSection] = useState(null);

  return (
    <main>

        {/* Introduction */}
        <h1 className='title'>Autonomous Air Filter Separation</h1>

        <div className="columns">
            <img src="/img/imgGCE/GCEFinal.PNG" style={{ height: "400px", width: "auto" }} />
            <div className="projectOverview">
                    <h2>Project Overview</h2>
                    <p>
                    This project focuses on developing an automatic air filter pleat-separation 
                    system, created collaboratively by a team of 12 engineers.
                    </p>
                </div>
        </div>

        <h2 className='heading'>The Problem</h2>
        <p>
            The manual insertion of separators between pleats in GCE’s (Taiwanese based company) air filters currently 
            takes 50–70 seconds per unit, creating a bottleneck in production. Labor shortages have made this process 
            difficult to scale, limiting the company’s ability to meet rising demand. 
            <br/>
            GCE is seeking an electromechanical solution to perform this task more quickly and consistently.
            <br/><br/>
            The objectives are to:

            <div className='columns'>
                <ul>
                    <li>Reduce assembly time</li>
                    <li>Improve product quality</li>
                    <li>Enable continuous, high-volume production</li>
                    <li>Minimize physical strain on workers</li>
                </ul>
            </div>

        </p>

        {/* Skills Learned */}
        <h2 className="heading">Skills Learned</h2>
        <p>Hardware: PCB Design, BLDC, Hall Sensors, PWM</p>
        <p>Software: Altium, Computer Vision, Jupyter Notebook</p>
        <p>Language: Python, C</p>


        {/* Personal Contribution */}
        <section>
            <h2 className="heading">Personal Contributions (Press Buttons Below)</h2>

            <div className="buttonContributions">
                <button onClick={() => setActiveSection(activeSection === "electrical" ? null : "electrical")}
                    className={activeSection === "electrical" ? "activeButton": ""}>
                    Electrical Contribution
                </button>

                <button onClick={() => setActiveSection(activeSection === "software" ? null : "software")}
                    className={activeSection === "software" ? "activeButton": ""}>
                    Software Contribution
                </button>

                <button onClick={() => setActiveSection(activeSection === "result" ? null : "result")}
                    className={activeSection === "result" ? "activeButton": ""}>
                    Final Result
                </button>
            </div>
        </section>

        {/* Electrical Contributions */}
        {activeSection == "electrical" && (
            <div className="electrical">
                        {/* 3D Render */}
                <h2>Main MCU PCB</h2>
                <PCBViewer modelPath="/models/GCEPCB3D.glb"/>

                {/* Schematic Section */}
                <section className="schematic-section">
                    <h2>Schematic Highlights</h2>
                    <p>
                    Below are key parts of my schematic highlighting power regulation,
                    the microcontroller, and the CAN interface.
                    </p>

                    <div className="schematic-grid">
                    {[
                        { src: "/img/imgGCE/MainPCBPower.png", label: "Power regulation"},
                        { src: "/img/imgGCE/MainPCBMCU.png", label: "32-bit ARM Cortex-M33 MCU" },
                        { src: "/img/imgGCE/MainPCBCAN.png", label: "CAN" },
                    ].map((item, idx) => (
                        <div
                        key={idx}
                        className="schematic-card"
                        onClick={() => setSelectedImage(item.src)}
                        >
                        <img src={item.src} alt={item.label} />
                        <p>{item.label}</p>
                        </div>
                    ))}
                    </div>
                    <h2 className="heading">Physical PCB</h2>
                    <img src="/img/imgGCE/MainPCBFront.jpg" style={{ height: "400px", width: "auto" }}/>
                    <img src="/img/imgGCE/MainPCBBack.jpg" style={{ height: "400px", width: "auto" }}/>
                </section>

                {/* Opens larger picture when selected */}
                {selectedImage && (
                    <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedImage} alt="Schematic Zoom" />
                        <button className="close-btn" onClick={() => setSelectedImage(null)}>×</button>
                    </div>
                    </div>
                )}

                <h2 className="heading">Pleat Separation</h2>
                <p>
                    The lead screw was powered by a BLDC motor.
                </p>
                <video width="700" controls>
                    <source src="/img/imgGCE/PleatSeparation.mp4" type="video/mp4" />
                    Cannot load video.
                </video>
            </div>
        )}

        {/* Software Contribution */}
        {activeSection == "software" && (
            <div className="software">
                <h2>Image Processing</h2>
                <div className="columns">
                    <img src="/img/imgGCE/ImageProcessingExample.png" style={{ height: "450px", width: "auto" }}/>
                    <p>
                        Image processing was performed using an Arducam B0400 camera connected over SPI. 
                        After the lead screw separated the filter, the MCU captured an image 
                        at the location most likely to show misalignment. It then calculated 
                        whether the spacing between each pleat peak was approximately 10mm in real life. 
                        Finally, the system sent a pass/fail signal back to the MCU based on this measurement.
                    </p>
                </div>
                <h3>How does this work?</h3>
                <p>
                    The image processing pipeline began by blurring the image to make thresholding 
                    easier. A binary threshold was then applied where pixels above the threshold
                    were set to 255, and those below were set to 0. Next, the program summed the 
                    pixel values in each column, and the local maxima in this column-sum array were 
                    interpreted as pleat peaks. <br/><br/>
                    This method relied on the fact that it would be relatively bright underneath each 
                    pleat being bright relative to its surroundings so that the peaks could be clearly 
                    detected (seen in the image above).
                </p>
                
            </div>
        )}

        {/* Final Result */}
        {activeSection == "result" && (
            <div className="result">

                <h2 className="heading">Overview</h2>
                <div className="slides-container">
                    <iframe
                        src={GCE_SLIDES_EMBED_URL}
                        title="GCE Project Slides"
                        allowFullScreen
                    ></iframe>
                </div>

                <h2 className="heading">Built Assembly</h2>

                <div className="columns">
                    <img src="/img/imgGCE/FinalLower.png" style={{ height: "400px", width: "auto" }}/>
                    <p>
                        This served as the main control board. Our setup included three boards: one for 
                        input, one for output, and one acting as the central controller. The input board
                        managed filter transport and alignment, while the output board handled pleat
                        separation and comb insertion.
                    </p>
                </div>
                <div className="columns">
                    <p>
                        This is the pleat-separation stage of the system. A BLDC motor powers a 
                        lead screw, and each pleat clips into the screw thread. The lead screw’s 
                        pitch determines the spacing between pleats, ensuring consistent and 
                        accurate separation.
                    </p>
                    <img src="/img/imgGCE/FinalTopView.jpg" style={{ height: "400px", width: "auto" }}/>
                </div>

                <h2 className="heading">Final Report</h2>
                <p>
                    This document was delivered to the client as the final reference, outlining 
                    all design decisions and providing the information needed to confidently
                    operate the system.
                    <br/> <br/>
                    The electrical design begins on page 12.
                </p>
                <div className="pdf-container">
                    <iframe 
                        src="/img/imgGCE/GCE_Hardware_Final_Report.pdf#zoom=100"
                        title="GCE Final Report PDF"
                    ></iframe>
                </div>


                
            </div>

        )}

    </main>
  )
}
