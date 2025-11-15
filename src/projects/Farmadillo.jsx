import { useState } from "react";
import './projects.css'

export default function Farmadillo() {
    const [activeSection, setActiveSection] = useState(null);

    return (
        <main>
            <h1 className='title'>Farmadillo</h1>
            <div class="columns">
                <img src="/img/imgGreenhouse/FarmadilloLogo.png" style={{ height: "300px", width: "auto" }}/>
                <div className='projectOverview'>
                    <h2>Project Overview</h2>
                    <p>
                        The automatic greenhouse, known as Farmadillo, is an easy-to-assemble product that allows users to keep
                        their plant in a safe and controlled environment outdoors, keeping away pests and shading it
                        from excessive light. <br /> <br />
                        Using the controlled box, users can wirelessly assign unique plant profiles
                        to each Farmadillo "shell," allowing a system of easily-controlled greenhouses to be set up across one yard.
                        The control box will provide information on the optimal amount of sunlight, closing or opening the dome.
                    </p>
                </div>
            </div>

            {/* Skills Learned */}
            <h2 className="heading">Skills Learned</h2>
            <p>Hardware: Arduino, Microcontroller, Lux Sensor, Motor controller</p>
            <p>Language: C++</p>

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
                <div class="electrical">
                    <h2>The Dome</h2>
                    <p>
                        Programmed and controlled dual servos for dome actuation for a fully automated 
                        and responsive greenhouse environment
                    </p>
                    <div class="columns">
                        <img src="/img/imgGreenhouse/GreenhouseMaterial.png" style={{ height: "300px", width: "auto" }}/>
                        <img src="/img/imgGreenhouse/arrow.png" style={{ height: "300px", width: "auto" }}/>
                        <img src="/img/imgGreenhouse/CoverClosed.png" style={{ height: "300px", width: "auto" }}/>
                    </div>

                    {/* Video for Servos */}
                    <div class="videoContainer">
                        <video width="400" controls>
                            <source src="/img/imgGreenhouse/servos.mp4" type="video/mp4" />
                            Cannot load video.
                        </video>

                        <video width="400" controls>
                            <source src="/img/imgGreenhouse/servoWithCover.mp4" type="video/mp4" />
                            Cannot load video.
                        </video>
                    </div>

                    {/* Electical Components */}
                    <h2>Sensors</h2>
                    <p>
                        Programmed a lux and moisture sensor to fully automate the dome.
                    </p>
                    <div class="columns">
                    <figure>
                        <img src="/img/imgGreenhouse/LuxSensor.png" style={{ height: "300px", width: "auto" }}/>
                    </figure>

                    <figure>
                        <img src="/img/imgGreenhouse/MoistureSensor.png" style={{ height: "300px", width: "auto" }}/>
                    </figure>
                    </div>

                </div>
            )}

            {/* Software Contribution */}
            {activeSection == "software" && (
                <div class="software">
                    <h2>App Design</h2>
                    <p>
                        <a href="https://www.figma.com/proto/9EvpaHiCn66HPtarekhZex/Forge-App-Idea?node-id=0-1&t=56Wz9oQddgJ1smLV-1">Here </a> 
                        is an outline of the app created in Figma. In this app, the user can store different plant profiles that require
                        different amount of sunlight.
                    </p>
                    <img src="/img/imgGreenhouse/OutlineFigma.png" style={{ height: "300px", width: "auto" }}/>

                    {/* LCD Screen */}
                    <h2>LCD Screen</h2>
                    <p>
                        Developed an automatic greenhouse system with integrated lux and soil moisture sensors to optimize
                        plant protection by dynamically opening and closing a dome based on sunlight and soil moisture levels
                    </p>
                    <figure>
                        <img src="/img/imgGreenhouse/LCDScreen.png" style={{ height: "300px", width: "auto" }}/>
                    </figure>
                </div>
            )}

            {/* Final Result */}
            {activeSection == "result" && (
                <div class="columns">
                    <img src="/img/imgGreenhouse/ControlBox.png" style={{ height: "300px", width: "auto" }}/>
                    <img src="/img/imgGreenhouse/FinalProduct.png" style={{ height: "300px", width: "auto" }}/>
                </div>

            )}
            
        </main>
    )
}