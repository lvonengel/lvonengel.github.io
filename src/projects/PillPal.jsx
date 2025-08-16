export default function PillPal() {
    return (
        <main>
            <h1>Pill Pal</h1>
            <div class="columns">
                <img src="/img/imgPillDispenser/PillPalLogo.png"
                style={{ height: "300px", width: "auto" }}/>
                <h2>
                Pill Pal is is a pill dispensing robot pal made by a team of 7 product development engineers that
                makes taking medication with kids all the more safe and consistent. Pill pal will make sure kids don't
                get to their pills when they don't need to while also promoting healthy habits. Competitors lack a
                fun and interactive user experience while we bring both the fun and the interaction with our LCD screen and robot
                pal design.
                </h2>
            </div>

            <h1 class="heading">Personal Contributions (Press Buttons Below)</h1>

            {/* Contribution Buttons */}
            <div class="buttonContributions">
                <button id="electricalButton">Electrical Contribution</button>
                <button id="softwareButton">Software Contribution</button>
                <button id="resultButton">Final Result</button>
            </div>

            {/* Electrical */}
            <div class="electrical">
                <h2>Electrical</h2>
                <h2>Block Diagram</h2>

                <div class="columns">
                <img src="/img/imgPillDispenser/BlockDiagram.png"
                style={{ height: "300px", width: "auto" }}/>
                <p>
                    Here is a block diagram that was used to create an outline of our electrical components
                </p>
                </div>
                <h2>Components</h2>
                <div class="columns">
                <figure>
                    <img src="/img/imgPillDispenser/GigaR1Fingerprint.png"
                    style={{ height: "300px", width: "auto" }}/>
                </figure>
                <figure>
                    <img src="/img/imgPillDispenser/GigaR1Stepper.png"
                    style={{ height: "300px", width: "auto" }}/>
                </figure>
                </div>
                <ul>
                <li>Designed Giga R1 Wifi circuit to interface user inputs with a LCD screen (Giga Display Shield).</li>
                <li> Implemented a fingerprint sensor to authorize specific users and the ability to change or delete select
                    fingerprint ids.</li>
                </ul>
            </div>

            {/* Software */}
            <div className="software">
                <h2>Software</h2>
                <h2>Figma Outline</h2>

                <div class="columns">
                    <img src="/img/imgPillDispenser/FigmaOutline.png"
                    style={{ height: "300px", width: "auto" }}/>
                    <p>
                        Here is the initial wirefame made in Figma for the LCD UI
                    </p>
                </div>

                <div class="columns">
                    <div class="videoContainer">
   
                    </div>
                </div>

                <div class="columns">
                    <ul>
                        <li>Built an engaging screen utilizing an Arduino Giga Shield with LVGL for UI integration</li>
                        <li>Created a user and parent mode that controls the dual stepper motors and fingerprint sensor</li>
                        <li>Created a number pad that stores information and prints out to user</li>
                    </ul>
                </div>
            </div>

            {/* Final Result */}
            <div class="result">
                <h2>Final Result</h2>

                <div class="videoContainer">
 
                </div>
                <ul>
                    <li>Example of a child taking pills</li>
                    <li>From the parent mode, they can change the amount of pills per day </li>
                    <li>Simulation if the user is not the registered fingerprint</li>
                </ul>
            
            </div>

        </main>
    )
}