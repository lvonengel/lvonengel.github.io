import { useState } from "react";
import './projects.css'

export default function PillPal() {
    const [activeSection, setActiveSection] = useState(null);

    return (
        <main>
            <h1 className="title">Pill Pal</h1>
            <div className="columns">
                <img src="/img/imgPillDispenser/PillPalLogo.png" style={{ height: "300px", width: "auto" }}/>
                <div className="projectOverview">
                    <h2>Project Overview</h2>
                    <p>
                    Pill Pal is is a pill dispensing robot pal made by a team of 7 product development engineers that
                    makes taking medication with kids all the more safe and consistent. <br /> <br />

                    Pill Pal creates relationships with users so that they can build good habits early together.
                    </p>
                </div>
            </div>

            <h2 className="heading">Skills Learned</h2>
            <p>Hardware: Arduino, Microcontroller, Fingerprint Sensor integration, Motor controller</p>
            <p>Software: C++, LVGL</p>

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

            {/* Electrical */}
            {activeSection == "electrical" && (
                <div className="electrical">
                    <h2>Block Diagram</h2>

                    <div className="columns">
                    <img src="/img/imgPillDispenser/BlockDiagram.png" style={{ height: "400px", width: "auto" }}/>
                    <p>
                        Here is a block diagram that was used to create an outline of our electrical components
                    </p>
                    </div>
                    <h2>Components</h2>
                    <div className="columns">
                        <ul>
                            <li>Designed Giga R1 Wifi circuit to interface user inputs with a LCD screen (Giga Display Shield).</li>
                            <li>
                                Implemented a fingerprint sensor to authorize specific users and the ability to change or delete select
                                fingerprint ids.
                            </li>
                        </ul>
                    </div>
                    <div className="columns">
                    <figure>
                        <img src="/img/imgPillDispenser/GigaR1Fingerprint.png" style={{ height: "300px", width: "auto" }}/>
                    </figure>
                    <figure>
                        <img src="/img/imgPillDispenser/GigaR1Stepper.png" style={{ height: "300px", width: "auto" }}/>
                    </figure>
                    </div>
                </div>
            )}

            {/* Software */}
            {activeSection == "software" && (
                <div classNameName="software">
                    <h2>Figma Outline</h2>

                    <div className="columns">
                        <img src="/img/imgPillDispenser/FigmaOutline.png" style={{ height: "325px", width: "auto" }}/>
                        <p>
                            Here is the initial wirefame made in Figma for the LCD UI
                        </p>
                    </div>
                    
                    <h2>User Interface</h2>
                    <div className="columns">
                        <ul>
                            <li>Built an engaging screen utilizing an Arduino Giga Shield with LVGL for UI integration</li>
                            <li>Created a user and parent mode that controls the dual stepper motors and fingerprint sensor</li>
                            <li>Created a number pad that stores information and prints out to user</li>
                        </ul>
                    </div>

                    <div className="columns">
                        <div className="videoContainer">
                            <video width="400" controls>
                                <source src="/img/imgPillDispenser/ContactCaretaker.mp4" type="video/mp4" />
                                Cannot load video.
                            </video>
                            <video width="400" controls>
                                <source src="/img/imgPillDispenser/UIStyle.mp4" type="video/mp4" />
                                Cannot load video.
                            </video>

                        </div>
                    </div>
                </div>
            )}

            {/* Final Result */}
            {activeSection == "result" && (
                <div className="result">
                    <div className="columns">
                        <ul>
                            <li>Example of a child taking pills</li>
                            <li>From the parent mode, they can change the amount of pills per day </li>
                            <li>Simulation if the user is not the registered fingerprint</li>
                        </ul>
                    </div>

                    <div className="videoContainer">
                        <video width="400" controls>
                            <source src="/img/imgPillDispenser/EditPillAmount.mp4" type="video/mp4" />
                            Cannot load video.
                        </video>

                        <video width="400" controls>
                            <source src="/img/imgPillDispenser/Dispense.mp4" type="video/mp4" />
                            Cannot load video.
                        </video>

                        <video width="400" controls>
                            <source src="/img/imgPillDispenser/WrongFingerprint.mp4" type="video/mp4" />
                            Cannot load video.
                        </video>
                    </div>
                
                </div>
            )}

        </main>
    )
}