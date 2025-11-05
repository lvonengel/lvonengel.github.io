import { useState } from "react"
import './projects.css'
import PCBViewer from '../components/PCBViewer'

export default function GCE() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <main>
        <h1 className='title'>Autonomous Air Filter</h1>

        <div className="columns">
            <img src="/img/imgGCE/GCELogo.png" style={{ height: "150px", width: "auto" }} />
        </div>

        <h2 className='heading'>Problem Statement</h2>
        <p>
            The manual insertion of separators between pleats in GCE’s air filters currently takes 50–70 seconds per unit, creating a bottleneck in production.
            Labor shortages have made this process increasingly difficult to scale, limiting the company’s ability to meet rising demand. <br/>
            GCE is seeking an electromechanical solution to perform this task more quickly and consistently.<br/><br/>
            The objectives are to:

            <div className='columns'>
                <ul>
                    <li>Reduce assembly time</li>
                    <li>Enable continuous, high-volume production</li>
                </ul>
            </div>

        </p>

        <h2 className="heading">Skills Learned</h2>
        <p>Hardware: PCB Design, BLDC, Hall Sensors, PWM</p>
        <p>Software: Altium</p>

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
    </main>
  )
}
