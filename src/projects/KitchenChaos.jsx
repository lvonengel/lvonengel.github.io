import './projects.css'
export default function KitchenChaos() {
    return (
        <main>
            {/* Introduction */}
            <h1 className='title'>Kitchen Chaos</h1>
            <div class="columns">
                <img src="/img/imgKitchenChaos/KitchenChaos.png" style={{ height: "400px", width: "auto" }}/>
                <div className="projectOverview">
                    <h2>Project Overview</h2>
                    <p>
                        In my free time, I’ve been learning and experimenting with Unity by following a 
                        tutorial called Kitchen Chaos. During this ongoing project, I've been exploring the 
                        fundamentals of game development including event-driven programming, animation systems, 
                        camera behavior, and player input.
                    </p>
                </div>
            </div>

            {/* Skills Learned */}
            <h2 className="heading">Skills Learned</h2>
            <p>Software: C#, Unity</p>

            {/* Contribution */}
            <h2 className="heading">Development Milestones</h2>
            <p>Each step below highlights a new concept I learned and implemented as part of building this game.</p>

            <section className="schematic-section">
                <div className="schematic-grid">
                    {[
                    {
                        src: "/img/imgKitchenChaos/HighlightsCounter.mp4",
                        title: "Highlighting Counters",
                        desc: "Learned about raycasting and event handlers to detect when the player is facing an object."
                    },
                    {
                        src: "/img/imgKitchenChaos/PlaceFoodOnCounter.mp4",
                        title: "Placing Food on Counters",
                        desc: "Implemented object management, prefabs, and interactions to spawn items."
                    },
                    {
                        src: "/img/imgKitchenChaos/CuttingBoardWithFood.mp4",
                        title: "Cutting Food",
                        desc: "Added animations, UI bar, and logic to allow players to place or cut food."
                    },
                    {
                        src: "/img/imgKitchenChaos/StoveCookingAndBurning.mp4",
                        title: "Cooking and Burning Food",
                        desc: "Added state machines and timers to cook/burn food."
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