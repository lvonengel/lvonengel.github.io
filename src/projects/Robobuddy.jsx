import { useState } from "react";
import './projects.css'


export default function Robobuddy() {
    const [activeSection, setActiveSection] = useState(null);
    
    return (
        <main>
            <h1 className="title">RoboBuddy</h1>
            <div className="columns">
                <img src="/img/imgRobobuddy/robobuddyLogo.png" style={{ height: "300px", width: "auto" }}/>
                <div className="projectOverview">
                    <h2>Project Overview</h2>
                    <p>
                    "The friendliest coworker you’ll ever meet." <br /> <br />
                    For my third semester in Forge, I was the Project Lead for RoboBuddy, a desk companion 
                    that helps you stay focused, calm, and connected <br /> <br />
                    I managed a multidisciplinary team of 7 engineers by creating a project timeline, 
                    hosting team meetings, facilitating communication, motivating the team, and delegating 
                    tasks – culminating in a product pitch to 100+ audience members.
                    </p>
                </div>
            </div>

            <h2 className="heading">Skills Learned</h2>
            <p>Hardware: Raspberry Pi, Arduino, Infrared Sensor, Motor controller</p>
            <p>Software: Python, Linux, C++, LVGL</p>

            
            {/* Final Result Buttons*/}
            <section>
                <h2 className="heading">Final Result (Press Buttons Below)</h2>

                <div className="buttonContributions">
                    <button onClick={() => setActiveSection(activeSection === "electrical" ? null : "electrical")}
                        className={activeSection === "electrical" ? "activeButton": ""}>
                        Electrical
                    </button>

                    <button onClick={() => setActiveSection(activeSection === "software" ? null : "software")}
                        className={activeSection === "software" ? "activeButton": ""}>
                        Software
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
                    <h2>Infrared Sensor</h2>
                    <p>
                        The infrared sensor tracks the user's position to determine if they are working efficiently.
                    </p>
                    <div class="columns">
                        <img src="/img/imgRobobuddy/infraredSensor.png"style={{ height: "325px", width: "auto" }}/>
                        <video width="200" controls>
                            <source src="/img/imgRobobuddy/infraredSensor.mp4" type="video/mp4" />
                            Cannot load video.
                        </video>
                    </div>

                    <h2>Motor Control</h2>
                    <p>
                        The slider on the UI controls the speed of the motor. This is connected to the
                        diffuser to control the strength of the diffuser.
                    </p>
                    <div class="columns">
                        <img src="/img/imgRobobuddy/motorCircuit.png"style={{ height: "325px", width: "auto" }}/>
                        <video width="200" controls>
                            <source src="/img/imgRobobuddy/motorSlider.mp4" type="video/mp4" />
                            Cannot load video.
                        </video>
                    </div>
                    
                </div>
            )}

            {/* Software */}
            {activeSection == "software" && (
                <div classNameName="software">
                    <h2>Calendar Data</h2>
                    <div class="columns">
                        <img src="/img/imgRobobuddy/calendarRaspberryPi.png" style={{ height: "400px", width: "auto" }}/>
                        <img src="/img/imgGreenhouse/arrow.png" style={{ height: "150px", width: "auto" }}/>
                        <img src="/img/imgRobobuddy/calendarArduino.png" style={{ height: "400px", width: "auto" }}/>
                    </div>

                    <div className='columns'>
                        <ol>
                            <li>Arduino Giga requests calendar data from Raspberry Pi</li>
                            <li>Raspberry Pi grabs user's Google API</li>
                            <li>Raspberry Pi sends data to the Arduino Giga</li>
                            <li>Arduino Giga displays information</li>
                        </ol>
                    </div>
                    <h2>User Interface</h2>
                    <div class="columns">
                        <img src="/img/imgRobobuddy/sensorScreenUI.png" style={{ height: "300px", width: "auto" }}/>
                    </div>

                </div>
            )}

            {/* Final Result */}
            {activeSection == "result" && (
                <img src="/img/imgRobobuddy/robobuddyFinal.jpg" style={{ height: "400px", width: "auto" }}/>
            )}


        </main>
    )
}