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
                        I’ve been learning and experimenting with Unity by following a 
                        tutorial called Kitchen Chaos. <br/> <br/>
                        During this project, I've been exploring the 
                        fundamentals of game development including subscribers and listeners, event-driven programming,
                        colliders, animation systems, camera behavior, relays, and host vs client authoritative. <br/> <br/>
                        <a href="https://play.unity.com/en/games/37192677-74ce-4619-bc19-984ecf092ae3/kitchen-chaos-multiplayer" target="_blank" rel="noopener noreferrer">
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
            <p>
                This project was split into two phases: single and multiplayer.
                <br/>
                Each step below highlights concepts I implemented as part of building this game.
            </p>

            {/* Single Player */}
            <h2>Singleplayer</h2>
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

            <br/>

            {/* Multiplayer */}
            <h2>Multiplayer</h2>
            <p>
                The second part of this project was allowing this game to be played on its own server
                so that anyone can join a person's game. The first step was synchronizing all of the game states
                so that normal game objects would be connected via network variables. This involved deciding whether
                an action should be server or client authoritative.
                <br/> <br/>
                Using Unity's Netcode library, the game starts the player as either a host or client depending on
                whether they create or join a lobby. Finally, I implemented Unity's Relay, to connect players
                together even behind a firewall. This relay acted as an accessible/reachable server that any player could connect to.
                All players connect to the relay and after connection is established, the Relay sends packets back and forth between the
                connected Host and Clients. 
            </p>
            <section className="schematic-section">
                <div className="schematic-grid">
                    {[
                    {
                        src: "/img/imgKitchenChaos/SyncingGameState.mp4",
                        title: "Syncing Game State",
                        desc: "Network Behavior/Variable, Client vs Server Authoritative."
                    },
                    {
                        src: "/img/imgKitchenChaos/MultiplayerCharacterSelection.mp4",
                        title: "Joining Public Lobby",
                        desc: "Authentication Service, Player Data"
                    },
                    {
                        src: "/img/imgKitchenChaos/PrivateLobby.mp4",
                        title: "Joining Private Lobbies",
                        desc: "Authentication Service, Relay, Lobby UI"
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