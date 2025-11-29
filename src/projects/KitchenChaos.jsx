import './projects.css'
export default function KitchenChaos() {
    return (
        <main>
            {/* Introduction */}
            <h1 className='title'>Kitchen Chaos</h1>
            <div class="columns">
                <img src="/img/imgKitchenChaos/InGame.png" style={{ height: "300px", width: "auto" }}/>
                <div className="projectOverview">
                    <h2>Project Overview</h2>
                    <p>
                        In my free time, I’ve been learning and experimenting with Unity by following a 
                        tutorial called Kitchen Chaos. <br/> <br/>
                        During this ongoing project, I've been exploring the 
                        fundamentals of game development including subscribers and listeners, event-driven programming,
                        colliders, animation systems, camera behavior, and player input. <br/> <br/>
                        <a href="https://play.unity.com/en/games/4f844095-bf08-4d68-8e09-d11a981a3ba0/kitchen-chaos" target="_blank" rel="noopener noreferrer">
                            Click Here To Play The Full Game
                        </a>
                    </p>
                </div>
            </div>

            {/* Skills Learned */}
            <h2 className="heading">Skills Learned</h2>
            <p>Software: C#, Unity</p>

            {/* Contribution */}
            <h2 className="heading">Development Milestones</h2>
            <p>Each step below highlights concepts I implemented as part of building this game.</p>

            <section className="schematic-section">
                <div className="schematic-grid">
                    {[
                    {
                        src: "/img/imgKitchenChaos/HighlightsCounter.mp4",
                        title: "Highlighting Counters",
                        desc: "Raycasting and event handlers to detect when the player is facing an object."
                    },
                    {
                        src: "/img/imgKitchenChaos/PlaceFoodOnCounter.mp4",
                        title: "Placing Food on Counters",
                        desc: "Object management, prefabs, and interactions to spawn items."
                    },
                    {
                        src: "/img/imgKitchenChaos/CuttingBoardWithFood.mp4",
                        title: "Cutting Food",
                        desc: "Animations, UI bar, and logic to allow players to place or cut food."
                    },
                    {
                        src: "/img/imgKitchenChaos/StoveCookingAndBurning.mp4",
                        title: "Cooking and Burning Food",
                        desc: "State machines and timers to cook/burn food."
                    },
                    {
                        src: "/img/imgKitchenChaos/AddingFoodToPlate.mp4",
                        title: "Plating and UI",
                        desc: "Structs and image icons to show ingredients on plate."
                    },
                    {
                        src: "/img/imgKitchenChaos/ServingFood.mp4",
                        title: "Serving Food and Timer",
                        desc: "Generating recipes and completing them."
                    },
                    {
                        src: "/img/imgKitchenChaos/MainMenuAndRebinding.mp4",
                        title: "Main Menu and Key Rebinding",
                        desc: "State machine and player input systems."
                    },
                    ].map((video, idx) => (
                    <div className="schematic-card" key={idx}>
                        <h3>{video.title}</h3>
                        <p>{video.desc}</p>
                        <video width="100%" controls>
                        <source src={video.src} type="video/mp4" />
                        Cannot load video.
                        </video>
                    </div>
                    ))}
                </div>
            </section>

        </main>
    )
}