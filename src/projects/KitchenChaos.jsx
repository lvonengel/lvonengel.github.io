import "./projects.css";
import ProjectHeader from "../components/ProjectHeader";
import VideoGrid from "../components/VideoGrid";

export default function KitchenChaos() {
  return (
    <main>
      {/* Introduction */}
      <ProjectHeader
        title="Kitchen Chaos"
        image="/img/KitchenChaos/InGame.png"
        role="Solo developer"
        timeline="August 2025 – October 2025"
        tools={["Unity", "C#", "Netcode"]}
      />

      <section className="project-block">
        <h2 className="section-heading">Purpose</h2>
        <p>
          <a
            href="https://play.unity.com/en/games/37192677-74ce-4619-bc19-984ecf092ae3/kitchen-chaos-multiplayer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click Here To Play The Full Game
          </a>
        </p>
        <p>
          I’ve been learning and experimenting with Unity by following a
          tutorial called Kitchen Chaos. <br /> <br />
          During this project, I've been exploring the fundamentals of game
          development including subscribers and listeners, event-driven
          programming, colliders, animation systems, camera behavior, relays,
          and host vs client authoritative.
        </p>
        <p>
          <a
            href="https://github.com/lvonengel/KitchenChaosMultiplayer"
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
        <p>
          This project was split into two phases: single and multiplayer.
          <br />
          Each step below highlights concepts I implemented as part of building
          this game.
        </p>

        <div className="project-part">
          <h3 className="subheading">Singleplayer</h3>
          <div className="part-body">
            <VideoGrid
              videos={[
                {
                  src: "/img/KitchenChaos/HighlightsCounter.mp4",
                  title: "Highlighting Counters",
                  desc: "Raycasting and event handlers to detect when the player is facing an object.",
                },
                {
                  src: "/img/KitchenChaos/PlaceFoodOnCounter.mp4",
                  title: "Placing Food on Counters",
                  desc: "Object management, prefabs, and interactions to spawn items.",
                },
                {
                  src: "/img/KitchenChaos/CuttingBoardWithFood.mp4",
                  title: "Cutting Food",
                  desc: "Animations, UI bar, and logic to allow players to place or cut food.",
                },
                {
                  src: "/img/KitchenChaos/StoveCookingAndBurning.mp4",
                  title: "Cooking and Burning Food",
                  desc: "State machines and timers to cook/burn food.",
                },
                {
                  src: "/img/KitchenChaos/AddingFoodToPlate.mp4",
                  title: "Plating and UI",
                  desc: "Structs and image icons to show ingredients on plate.",
                },
                {
                  src: "/img/KitchenChaos/ServingFood.mp4",
                  title: "Serving Food and Timer",
                  desc: "Generating recipes and completing them.",
                },
                {
                  src: "/img/KitchenChaos/MainMenuAndRebinding.mp4",
                  title: "Main Menu and Key Rebinding",
                  desc: "State machine and player input systems.",
                },
              ]}
            />
          </div>
        </div>

        <div className="project-part">
          <h3 className="subheading">Multiplayer</h3>
          <div className="part-body">
            <p>
              The second part of this project was allowing this game to be
              played on its own server so that anyone can join a person's game.
              The first step was synchronizing all of the game states so that
              normal game objects would be connected via network variables. This
              involved deciding whether an action should be server or client
              authoritative.
              <br /> <br />
              Using Unity's Netcode library, the game starts the player as
              either a host or client depending on whether they create or join a
              lobby. Finally, I implemented Unity's Relay, to connect players
              together even behind a firewall. This relay acted as an
              accessible/reachable server that any player could connect to. All
              players connect to the relay and after connection is established,
              the Relay sends packets back and forth between the connected Host
              and Clients.
            </p>
            <VideoGrid
              videos={[
                {
                  src: "/img/KitchenChaos/SyncingGameState.mp4",
                  title: "Syncing Game State",
                  desc: "Network Behavior/Variable, Client vs Server Authoritative.",
                },
                {
                  src: "/img/KitchenChaos/MultiplayerCharacterSelection.mp4",
                  title: "Joining Public Lobby",
                  desc: "RPCs, Authentication Service, Player Data",
                },
                {
                  src: "/img/KitchenChaos/PrivateLobby.mp4",
                  title: "Joining Private Lobbies",
                  desc: "Authentication Service, Relay, Lobby UI",
                },
              ]}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
