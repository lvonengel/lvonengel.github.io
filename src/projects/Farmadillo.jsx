
export default function Farmadillo() {
    return (
        <main>
            <h1>Farmadillo</h1>

            <div class="column3">
                <figure>
                    <img src="/img/imgGreenhouse/FinalProduct.png"
                    style={{ height: "300px", width: "auto" }}/>
                <figcaption>Farmadillo Shell</figcaption>
                </figure>

                <figure>
                    <img src="/img/imgGreenhouse/ControlBox.png"
                    style={{ height: "300px", width: "auto" }}/>
                </figure>
                <p>
                The automatic greenhouse, known as Farmadillo, is an easy-to-assemble produt that allows users to keep
                their plant in a safe and controlled environment outdoors, keeping away pests and shading it
                from excessive light. Using the controlled box, users can wirelessly assign unique plant profiles
                to each Farmadillo "shell," allowing a system of easily-controlled greenhouses to be set up across one yard.
                The control box will provide information on the optimal amount of sunlight, closing or opening the dome.
                </p>
            </div>

            <h1 class="heading">Personal Contributions (Press Buttons Below)</h1>
            <div class="buttonContributions">
                <button id="electricalButton">Electrical Contribution</button>
                <button id="softwareButton">Software Contribution</button>
            </div>

            {/* Electrical Contributions */}
            <div class="electrical">
                <h2>The Dome</h2>
                <div class="columns">
                    <img src="/img/imgGreenhouse/GreenhouseMaterial.png"
                    style={{ height: "300px", width: "auto" }}/>
                    <img src="/img/imgGreenhouse/arrow.png"
                    style={{ height: "300px", width: "auto" }}/>
                    <img src="/img/imgGreenhouse/CoverClosed.png"
                    style={{ height: "300px", width: "auto" }}/>
                </div>

                {/* Video for Servos */}
                <div class="videoContainer">

                </div>

                {/* Electical Components */}
                <h2>Electrical Components</h2>
                <div class="columns">
                <figure>
                    <img src="/img/imgGreenhouse/LuxSensor.png"
                    style={{ height: "300px", width: "auto" }}/>
                </figure>

                <figure>
                    <img src="/img/imgGreenhouse/MoistureSensor.png"
                    style={{ height: "300px", width: "auto" }}/>
                </figure>
                </div>

                <ul>
                <li>Programmed and controlled dual servos for dome actuation for a fully automated 
                    and responsive greenhouse environment</li>
                </ul>
            </div>

            {/* Software Contribution */}
            <div class="software">
                <h2>App Design</h2>

                <div class="columns">
                    <img src="/img/imgGreenhouse/OutlineFigma.png"
                    style={{ height: "300px", width: "auto" }}/>
                    <p>
                        <a href="https://www.figma.com/proto/9EvpaHiCn66HPtarekhZex/Forge-App-Idea?node-id=0-1&t=56Wz9oQddgJ1smLV-1">Here</a> 
                        is an outline of the app created in Figma. In this app, the user can store different plant profiles that require
                        different amount of sunlight.
                    </p>
                </div>

                {/* LCD Screen */}
                <h2>LCD Screen</h2>
                <div class="columns">

                    <figure>
                        <img src="/img/imgGreenhouse/LCDScreen.png"
                        style={{ height: "300px", width: "auto" }}/>
                    </figure>

                    <ul>
                        <li>Developed an automatic greenhouse system with integrated lux and soil moisture sensors to optimize
                        plant protection by dynamically opening and closing a dome based on sunlight and soil moisture levels</li>
                    </ul>
                    
                </div>
            </div>

        </main>
    )
}