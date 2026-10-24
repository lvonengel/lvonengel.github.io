import "./projects.css";
import ProjectHeader from "../components/ProjectHeader";

export default function Robobuddy() {
  return (
    <main>
      {/* Introduction */}
      <ProjectHeader
        title="RoboBuddy"
        image="/img/Robobuddy/robobuddyLogo.png"
        role="Project Lead"
        timeline="January 2025 – April 2025"
        tools={["Python", "C++", "Raspberry Pi", "Linux", "LVGL", "Arduino"]}
      />

      <section className="project-block">
        <h2 className="section-heading">Purpose</h2>
        <p>
          "The friendliest coworker you’ll ever meet." <br /> <br />
          For my third semester in Forge, I was the Project Lead for RoboBuddy,
          a desk companion that helps you stay focused, calm, and connected{" "}
          <br /> <br />I managed a multidisciplinary team of 7 engineers by
          creating a project timeline, hosting team meetings, facilitating
          communication, motivating the team, and delegating tasks, culminating
          in a product pitch to 100+ audience members.
        </p>
      </section>

      <section className="project-block">
        <h2 className="section-heading">Design Process</h2>

        {/* Electrical */}
        <div className="project-part">
          <h3 className="subheading">Electrical</h3>
          <div className="part-body">
            <h4 className="topic">Infrared Sensor</h4>
            <p>
              The infrared sensor tracks the user's position to determine if
              they are working efficiently.
            </p>
            <div className="media-row">
              <img
                src="/img/Robobuddy/infraredSensor.png"
                alt="Infrared sensor circuit"
              />
              <video controls>
                <source
                  src="/img/Robobuddy/infraredSensor.mp4"
                  type="video/mp4"
                />
                Cannot load video.
              </video>
            </div>

            <h4 className="topic">Motor Control</h4>
            <p>
              The slider on the UI controls the speed of the motor. This is
              connected to the diffuser to control the strength of the diffuser.
            </p>
            <div className="media-row">
              <img src="/img/Robobuddy/motorCircuit.png" alt="Motor circuit" />
              <video controls>
                <source src="/img/Robobuddy/motorSlider.mp4" type="video/mp4" />
                Cannot load video.
              </video>
            </div>
          </div>
        </div>

        {/* Software */}
        <div className="project-part">
          <h3 className="subheading">Software</h3>
          <div className="part-body">
            <h4 className="topic">Calendar Data</h4>
            <div className="flow-row">
              <img
                src="/img/Robobuddy/calendarRaspberryPi.png"
                alt="Raspberry Pi calendar code"
              />
              <img
                className="flow-arrow"
                src="/img/Greenhouse/arrow.png"
                alt=""
              />
              <img
                src="/img/Robobuddy/calendarArduino.png"
                alt="Arduino calendar code"
              />
            </div>
            <ol>
              <li>Arduino Giga requests calendar data from Raspberry Pi</li>
              <li>Raspberry Pi grabs user's Google API</li>
              <li>Raspberry Pi sends data to the Arduino Giga</li>
              <li>Arduino Giga displays information</li>
            </ol>

            <h4 className="topic">User Interface</h4>
            <img
              src="/img/Robobuddy/sensorScreenUI.png"
              alt="RoboBuddy screen UI"
            />
          </div>
        </div>

        {/* Final Result */}
        <div className="project-part">
          <h3 className="subheading">Final Result</h3>
          <div className="part-body">
            <img src="/img/Robobuddy/Robobuddy.jpg" alt="Finished RoboBuddy" />
          </div>
        </div>
      </section>
    </main>
  );
}
