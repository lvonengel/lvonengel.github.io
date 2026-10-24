import "./projects.css";
import ProjectHeader from "../components/ProjectHeader";
import VideoGrid from "../components/VideoGrid";

export default function StoreSimulator() {
  return (
    <main>
      {/* Introduction */}
      <ProjectHeader
        title="Store Simulator"
        image="/img/StoreSimulator/InsideStore.png"
        role="Solo developer"
        timeline="November 2025 – February 2026"
        tools={["Unity", "C#", "Animation"]}
      />

      <section className="project-block">
        <h2 className="section-heading">Purpose</h2>
        <p>
          My most recent Unity project has been creating a 3D store simulator
          where users can manage prices and inventory, decorate their store, and
          upgrade furniture.
          <br /> <br />
          This project is still in progress and will be updated.
        </p>
        <p>
          <a
            href="https://github.com/lvonengel/StoreSimulator"
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
          <h3 className="subheading">Basic Store Simulator Cycle</h3>
          <div className="part-body">
            <p>
              I first wanted to begin by creating a classic store simulator
              loop: stocking items, selling them, unlocking new items, repeat.
              <br />
              Each step below highlights concepts I implemented as part of the
              core mechanics of this game.
            </p>
            <VideoGrid
              videos={[
                {
                  src: "/img/StoreSimulator/BuyingItemsFromStore.mp4",
                  title: "Buying Inventory",
                  desc: "Creating a money system/UI to buy and place items on shelves.",
                },
                {
                  src: "/img/StoreSimulator/BuyingFurniture.mp4",
                  title: "Buying Furniture",
                  desc: "Buying and moving different types of furniture.",
                },
                {
                  src: "/img/StoreSimulator/CustomersGoingToShelves.mp4",
                  title: "Customer Navigation",
                  desc: "Spawning customers and checking stocked shelves.",
                },
                {
                  src: "/img/StoreSimulator/CheckingOutCustomers.mp4",
                  title: "Checking Out Customers",
                  desc: "Queuing customers in line and checking out their items.",
                },
              ]}
            />
          </div>
        </div>

        <div className="project-part">
          <h3 className="subheading">Additional Features</h3>
          <div className="part-body">
            <p>
              Once I got the basic store simulator cycle finished, I wanted to
              focus on adding cool touches. Below are some of the features that
              I have implemented.
            </p>
            <VideoGrid
              videos={[
                {
                  src: "/img/StoreSimulator/BuyingWithCart.mp4",
                  title: "Buying Items with a Cart",
                  desc: "Creating a cart and delivery fee.",
                },
                {
                  src: "/img/StoreSimulator/UnlockingStockWithLevel.mp4",
                  title: "Store Level System",
                  desc: "Unlocking stock with store level.",
                },
                {
                  src: "/img/StoreSimulator/ExpandingStoreSpace.mp4",
                  title: "Upgrading Store Space",
                  desc: "Unlocking more store space with licenses.",
                },
                {
                  src: "/img/StoreSimulator/CreatedSaveSystem.mp4",
                  title: "Creating 3 Save Profiles",
                  desc: "Saves money, store upgrades, furniture, and stock.",
                },
              ]}
            />
          </div>
        </div>

        <div className="project-part">
          <h3 className="subheading">Collectible Cards</h3>
          <div className="part-body">
            <p>
              I've always loved Pokemon and the excitement of buying a new pack
              of cards and hoping to get your favorite pokemon. I wanted to
              replicate this feeling and I thought implementing this feature in
              the game would be very cool. The player has the option to either
              sell the card pack for profit or open it themselves. The game has
              an internal book of all cards the player has collected with the
              aim to collect every one!
            </p>
            <VideoGrid
              videos={[
                {
                  src: "/img/StoreSimulator/OpeningCardPacks.mp4",
                  title: "Opening Card Packs",
                  desc: "Collecting different cards.",
                },
                {
                  src: "/img/StoreSimulator/CardBookInventory.mp4",
                  title: "Card Inventory",
                  desc: "Storing and seeing all cards collected",
                },
                {
                  src: "/img/StoreSimulator/MultipleCardPacks.mp4",
                  title: "Multiple Card Packs",
                  desc: "Progress tracking for different card packs",
                },
                {
                  src: "/img/StoreSimulator/CreatingCustomDecks.mp4",
                  title: "Creating and Saving Custom Decks",
                  desc: "Creating decks with cards the user has collected to play against AI",
                },
              ]}
            />
          </div>
        </div>

        <div className="project-part">
          <h3 className="subheading">Battle Cards</h3>
          <div className="part-body">
            <p>
              <a
                href="https://play.unity.com/en/games/3e257543-23b1-4b2f-9162-d00d36a4c1f7/card-battle"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here To Play The Full Card Battle Game
              </a>
              <br /> <br />
              In addition to collecting cards, I wanted to add an actual card
              game where the player can use the cards they collected and play
              against different types of AI.
              <br /> <br />
              The scope of this project included creating a turn based game with
              player and AI mana pool and health. Every turn, the mana pool is
              refreshed and the player must choose which cards they want to play
              to defeat the enemy cards. In addition, the user can choose
              different battles that have different AI in which the AI play more
              aggressively or more defensively.
            </p>
            <p>
              <a
                href="https://github.com/lvonengel/CardBattle"
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                View Project on GitHub →
              </a>
            </p>
            <VideoGrid
              videos={[
                {
                  src: "/img/StoreSimulator/PlacingCardsDown.mp4",
                  title: "Placing Cards Down",
                  desc: "Creating a player hand and placing cards onto the field.",
                },
                {
                  src: "/img/StoreSimulator/DrawingCards.mp4",
                  title: "Drawing Cards",
                  desc: "Choosing to draw additional cards for mana.",
                },
                {
                  src: "/img/StoreSimulator/PlayingGameWithTurn.mp4",
                  title: "Turn System Against Enemy Cards",
                  desc: "Attacking enemy cards and them attacking back.",
                },
                {
                  src: "/img/StoreSimulator/PlayingAgainstDifferentAI.mp4",
                  title: "Full Game Against Multiple Types of AI",
                  desc: "Menu screens with unique AI that have different strategies",
                },
              ]}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
