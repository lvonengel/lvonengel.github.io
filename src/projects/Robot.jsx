import './projects.css'
export default function Robot() {
    return (
        <main>
            {/* Introduction */}
            <h1 className='title'>Robotic Arm</h1>
            <div class="columns">
                <img src="/img/imgRobot/Arm.jpg" style={{ height: "300px", width: "auto" }}/>
                <div className="projectOverview">
                    <h2>Project Overview</h2>
                    <p>
                        This project followed the open-source InMoov robotic arm design. 
                        <br/>
                        I built and assembled the robotic arm myself, exploring every stage from 
                        mechanical design and servo control to programming motor movements. 
                        <br/> <br/>
                        Through this project, I gained hands-on experience with 3D printing,
                        actuator calibration, and motion sequencing, as well as a deeper 
                        understanding of how sensors and servos interact to replicate human-like movement.
                        <br/> <br/>
                        Please check out my code in my GitHub.

                    </p>
                </div>
            </div>

            {/* Skills Learned */}
            <h2 className="heading">Skills Learned</h2>
            <p>Hardware: Arduino, PWM</p>
            <p>Software: CV2, FDM 3D Printing</p>
            <p>Language: C++, Python</p>
            <br/> <br/>

            {/* Contribution */}
            <h1>The Process</h1>
            <h2 className="heading">Finger Starter</h2>
            <div className="columns">
                <p>
                    The Finger Starter focused on building a single articulated finger. <br/> <br/>
                    I began with this smaller model to understand the fundamentals of motion 
                    control and how tendons (using rope) can be used to replicate the bending 
                    and extension of a human finger. Starting with one finger allowed me to experiment
                    with servo movement, tensioning, rope strength, and mechanical design before moving
                    on to the more complex hand and arm assemblies.
                </p>
                <video width="400" controls>
                    <source src="/img/imgRobot/FingerStarter.mp4" type="video/mp4" />
                    Cannot load video.
                </video>
            </div>

            <h2 className="heading">Full Hand</h2>
            <div className="columns">
                <p>
                    This was the full hand and forearm design, featuring multiple MG996R servo motors 
                    to control each finger and enable coordinated hand movements. For the power, I used
                    an Arduino Giga R1 with an external power supply, as the Arduino alone did not have enough 
                    current to drive all five servos.
                    <br/> <br/>

                    Building this stage taught me how to integrate mechanical components with 
                    electronic control, manage cable routing for smooth motion, and calibrate servo positions 
                    for realistic articulation. <br/> <br/>
                    
                    It was rewarding to see the transition from a single working finger to a fully functional 
                    robotic hand capable of grasping and gesturing.
                </p>
                <video width="520" controls>
                    <source src="/img/imgRobot/WorkingArm.mp4" type="video/mp4" />
                    Cannot load video.
                </video>
            </div>

            <h2 className="heading">Hand With Computer Vision</h2>
            <div className="columns">
                <p>
                    Next, I added computer vision so I could control the robotic hand with my 
                    own hand movements. Using the OpenCV (CV2) library, I tracked all 21 hand 
                    landmarks to interpret finger positions.
                    <br/> <br/>
                    It would then send a 5-bit binary number from 00000 to 11111 where each
                    finger represents a bit in the number. A 0 meant that that finger
                    was closed where 1 means it was open.
                    <br/> <br/>
                    The fingers were strong enough to hold light objects (no more than a pound).
                </p>
                <video width="520" controls>
                    <source src="/img/imgRobot/HandWithCV.mp4" type="video/mp4" />
                    Cannot load video.
                </video>
            </div>
            
            <h2 className="heading">GUI App</h2>
            <p>
                I integrated the computer-vision control into a Python GUI 
                application, which displays the live camera feed, processes the 
                hand-tracking data in real time, and sends the binary commands to 
                the Arduino over serial communication. The interface was intentionally 
                designed to be simple and intuitive so that anyone could easily control the hand. 
                <br/><br/>
                The application was built using the PySide library, where I created classes
                and implemented OOD design to keep the interface modular. 
                I used PySide’s QProperty system to neatly encapsulate state changes such 
                as the current binary hand code and relied on signals and slots
                to update the GUI in real time and transmit commands to the Arduino as soon 
                as the computer-vision data changed.
                <br/><br/>
                To keep the interface responsive, I ran the computer-vision processing in a 
                separate worker thread. The worker class handled the live camera feed and landmark 
                detection in the background, while the main GUI class focused on rendering the 
                interface and managing user interactions.
            </p>
            <div className="columns">
                <img src="/img/imgRobot/HandApp.png" style={{ height: "400px", width: "auto" }}/>
                <img src="/img/imgRobot/AppHandDetection.png" style={{ height: "400px", width: "auto" }}/>
            </div>

        </main>
    )
}