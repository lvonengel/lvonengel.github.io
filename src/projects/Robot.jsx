import "./projects.css";
import ProjectHeader from "../components/ProjectHeader";
export default function Robot() {
  return (
    <main>
      {/* Introduction */}
      <ProjectHeader
        title="Robotic Arm"
        image="/img/Robot/Arm.jpg"
        role="Solo build"
        timeline="October 2025 – December 2025"
        tools={[
          "Python",
          "EMG",
          "CV2",
          "FDM Printing",
          "Arduino",
          "PWM",
          "C++",
        ]}
      />

      <section className="project-block">
        <h2 className="section-heading">Purpose</h2>
        <p>
          This project followed the open-source InMoov robotic arm design.
          <br />
          I built and assembled the robotic arm myself, exploring every stage
          from mechanical design and servo control to programming motor
          movements.
          <br /> <br />
          Through this project, I gained hands-on experience with 3D printing,
          actuator calibration, and motion sequencing, as well as a deeper
          understanding of how sensors and servos interact to replicate
          human-like movement.
        </p>
        <p>
          <a
            href="https://github.com/lvonengel/Robot"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            View Project on GitHub →
          </a>
        </p>
      </section>

      <section className="project-block">
        <h2 className="section-heading">Design Process</h2>

        <div className="project-part">
          <h3 className="subheading">Finger Starter</h3>
          <div className="part-body">
            <div className="media-row">
              <p>
                The Finger Starter focused on building a single articulated
                finger. <br /> <br />I began with this smaller model to
                understand the fundamentals of motion control and how tendons
                (using rope) can be used to replicate the bending and extension
                of a human finger. Starting with one finger allowed me to
                experiment with servo movement, tensioning, rope strength, and
                mechanical design before moving on to the more complex hand and
                arm assemblies.
              </p>
              <video controls>
                <source src="/img/Robot/FingerStarter.mp4" type="video/mp4" />
                Cannot load video.
              </video>
            </div>
          </div>
        </div>

        <div className="project-part">
          <h3 className="subheading">Full Hand</h3>
          <div className="part-body">
            <div className="media-row">
              <video controls>
                <source src="/img/Robot/WorkingArm.mp4" type="video/mp4" />
                Cannot load video.
              </video>
              <p>
                This was the full hand and forearm design, featuring multiple
                MG996R servo motors to control each finger and enable
                coordinated hand movements. For the power, I used an Arduino
                Giga R1 with an external power supply, as the Arduino alone did
                not have enough current to drive all five servos.
                <br /> <br />
                Building this stage taught me how to integrate mechanical
                components with electronic control, manage cable routing for
                smooth motion, and calibrate servo positions for realistic
                articulation.
              </p>
            </div>
          </div>
        </div>

        <div className="project-part">
          <h3 className="subheading">Hand With Computer Vision</h3>
          <div className="part-body">
            <div className="media-row">
              <p>
                Next, I added computer vision so I could control the robotic
                hand with my own hand movements. Using the OpenCV (CV2) library,
                I tracked all 21 hand landmarks to interpret finger positions.
                <br /> <br />
                It would then send a 5-bit binary number from 00000 to 11111
                where each finger represents a bit in the number. A 0 meant that
                that finger was closed where 1 means it was open.
                <br /> <br />
                The fingers were strong enough to hold light objects (no more
                than a pound).
              </p>
              <video controls>
                <source src="/img/Robot/HandWithCV.mp4" type="video/mp4" />
                Cannot load video.
              </video>
            </div>
          </div>
        </div>

        <div className="project-part">
          <h3 className="subheading">GUI App</h3>
          <div className="part-body">
            <p>
              I integrated the computer-vision control into a Python GUI
              application, which displays the live camera feed, processes the
              hand-tracking data in real time, and sends the binary commands to
              the Arduino over serial communication. The interface was
              intentionally designed to be simple and intuitive so that anyone
              could easily control the hand.
              <br />
              <br />
              The application was built using the PySide library, where I
              created classes and implemented OOD design to keep the interface
              modular. I used PySide’s QProperty system to neatly encapsulate
              state changes such as the current binary hand code and relied on
              signals and slots to update the GUI in real time and transmit
              commands to the Arduino as soon as the computer-vision data
              changed.
              <br />
              <br />
              To keep the interface responsive, I ran the computer-vision
              processing in a separate worker thread. The worker class handled
              the live camera feed and landmark detection in the background,
              while the main GUI class focused on rendering the interface and
              managing user interactions.
            </p>
            <div className="image-row">
              <img src="/img/Robot/HandApp.png" alt="GUI app" />
              <img
                src="/img/Robot/AppHandDetection.png"
                alt="GUI app detecting a hand"
              />
            </div>
          </div>
        </div>

        <div className="project-part">
          <h3 className="subheading">EMG</h3>
          <div className="part-body">
            <p>
              The final thing I wanted to add was allowing the user to be able
              to control the robotic arm with their own hand. By connecting
              three electrodes from my arm to the circuit, I was able to track
              when the user created a fist with their hand.
              <br /> <br />
              The circuit I designed was to get the EMG signal from the user's
              forearm through an instrumental amplifier. It would then go
              through a high and low pass filter in order to filter out the DC
              offset and electrical noise.
            </p>
            <div className="image-row">
              <img
                src="/img/Robot/ElectrodePlacement.jpeg"
                alt="Electrode placement on the forearm"
              />
              <img
                src="/img/Robot/InstrumentalAmplifierCircuit.jpeg"
                alt="Instrumentation amplifier circuit"
              />
            </div>
            <p className="after-media">
              The video below displays me testing just the instrument amplifier.
              I connected the output of the instrumental amplifier to an analog
              pin on an Arduino board and plotted the voltage it received. In
              the video, you can see it jump from 1000 mV to around 3000 mV when
              I put my hand in a fist.
            </p>
            <video controls>
              <source
                src="/img/Robot/TestingWhenFistingHand.mp4"
                type="video/mp4"
              />
              Cannot load video.
            </video>
          </div>
        </div>
      </section>
    </main>
  );
}
