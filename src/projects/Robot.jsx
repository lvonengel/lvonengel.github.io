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
                        This project followed the open-source InMoov robotic arm design. <br/>
                        I built and assembled the robotic arm myself, exploring every stage from 
                        mechanical design and servo control to programming motor movements. <br/> <br/>
                        Through this project, I gained hands-on experience with 3D printing,
                        actuator calibration, and motion sequencing, as well as a deeper 
                        understanding of how sensors and servos interact to replicate human-like movement.
                    </p>
                </div>
            </div>

            {/* Skills Learned */}
            <h2 className="heading">Skills Learned</h2>
            <p>Hardware: Arduino, PWM</p>
            <p>Software: FDM 3D Printing</p>
            <br/> <br/>

            {/* Contribution */}
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

            <h2 className="heading">Full Arm</h2>
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
            

        </main>
    )
}