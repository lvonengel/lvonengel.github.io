import './projects.css'
import { useState } from "react";

export default function StoreSimulator() {
    const [activeSection, setActiveSection] = useState(null);

    return (
        <main>
            {/* Introduction */}
            <h1 className='title'>Store Simulator</h1>
            <div className="columns">
                <img src="/img/imgStoreSimulator/InsideStore.png" style={{ height: "300px", width: "auto" }}/>
                <div className="projectOverview">
                    <h2>Project Overview</h2>
                    <p>
                        <br/><br/>
                        My most recent Unity project has been creating a 3D store simulator where users
                        can manage prices and inventory, decorate their store, and upgrade furniture. 
                        <br/> <br/>
                        This project is still in progress and will be updated.
                        <br/> <br/>
                        <a 
                        href="https://github.com/lvonengel/StoreSimulator" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="github-link"
                        >
                            View Project on GitHub →
                        </a>
                    </p>
                </div>
            </div>

            {/* Skills Learned */}
            <h2 className="heading">Skills Learned</h2>
            <p>Software: C#, Unity, Animation</p>

            {/* Development Milestones */}
            <section>
                <h2 className="heading">Development Milestones (Press Buttons Below)</h2>

                <div className="buttonContributions">
                    <button onClick={() => setActiveSection(activeSection === "basicStoreSimulator" ? null : "basicStoreSimulator")}
                        className={activeSection === "basicStoreSimulator" ? "activeButton": ""}>
                        Store Simulator Cycle
                    </button>

                    <button onClick={() => setActiveSection(activeSection === "collectibleCards" ? null : "collectibleCards")}
                        className={activeSection === "collectibleCards" ? "activeButton": ""}>
                        Collectible Cards
                    </button>

                </div>
            </section>

            {/* Store Simulator Cycle */}
            {activeSection == "basicStoreSimulator" && (
                <div className="basicStoreSimulator">

                    <h2>Basic Store Simulator Cycle</h2>
                    <p>
                        I first wanted to begin by creating a classic store simulator loop: 
                        stocking items, selling them, unlocking new items, repeat.
                        <br/>
                        Each step below highlights concepts I implemented as part of the core mechanics of this game.
                    </p>
                    <section className="schematic-section">
                        <div className="schematic-grid">
                            {[
                            {
                                src: "/img/imgStoreSimulator/BuyingItemsFromStore.mp4",
                                title: "Buying Inventory",
                                desc: "Creating a money system/UI to buy and place items on shelves."
                            },
                            {
                                src: "/img/imgStoreSimulator/BuyingFurniture.mp4",
                                title: "Buying Furniture",
                                desc: "Buying and moving different types of furniture."
                            },
                            {
                                src: "/img/imgStoreSimulator/CustomersGoingToShelves.mp4",
                                title: "Customer Navigation",
                                desc: "Spawning customers and checking stocked shelves."
                            },
                            {
                                src: "/img/imgStoreSimulator/CheckingOutCustomers.mp4",
                                title: "Checking Out Customers",
                                desc: "Queuing customers in line and checking out their items."
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

                    
                    {/* Additional Features */}
                    <h2>Additional Features</h2>
                    <p>
                        Once I got the basic store simulator cycle finished, I wanted to focus
                        on adding cool touches. Below are some of the features that I
                        have implemented. 
                        <br/>
                    </p>
                    <section className="schematic-section">
                        <div className="schematic-grid">
                            {[
                            {
                                src: "/img/imgStoreSimulator/BuyingWithCart.mp4",
                                title: "Buying Items with a Cart",
                                desc: "Creating a cart and delivery fee."
                            },
                            {
                                src: "/img/imgStoreSimulator/UnlockingStockWithLevel.mp4",
                                title: "Store Level System",
                                desc: "Unlocking stock with store level."
                            },
                            {
                                src: "/img/imgStoreSimulator/ExpandingStoreSpace.mp4",
                                title: "Upgrading Store Space",
                                desc: "Unlocking more store space with licenses."
                            },
                            {
                                src: "/img/imgStoreSimulator/CreatedSaveSystem.mp4",
                                title: "Creating 3 Save Profiles",
                                desc: "Saves money, store upgrades, furniture, and stock."
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

                </div>
            )}


            {/* Collectible Cards */}
            {activeSection == "collectibleCards" && (
                <div classNameName="collectibleCards">
                    <h2>Collectible Cards</h2>
                    <p>
                        I've always loved Pokemon and the excitement of buying a new pack
                        of cards and hoping to get your favorite pokemon. I wanted to replicate
                        this feeling and I thought implementing this feature in the game would be very 
                        cool. The player has the option to either sell the card pack for profit or open 
                        it themselves. The game has an internal book of all cards the player has 
                        collected with the aim to collect every one!
                    </p>
                    <section className="schematic-section">
                        <div className="schematic-grid">
                            {[
                            {
                                src: "/img/imgStoreSimulator/OpeningCardPacks.mp4",
                                title: "Opening Card Packs",
                                desc: "Collecting different cards."
                            },
                            {
                                src: "/img/imgStoreSimulator/CardBookInventory.mp4",
                                title: "Card Inventory",
                                desc: "Storing and seeing all cards collected"
                            },
                            {
                                src: "/img/imgStoreSimulator/MultipleCardPacks.mp4",
                                title: "Multiple Card Packs",
                                desc: "Progress tracking for different card packs"
                            },
                            {
                                src: "/img/imgStoreSimulator/CreatingCustomDecks.mp4",
                                title: "Creating and Saving Custom Decks",
                                desc: "Creating decks with cards the user has collected to play against AI"
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

                    <h2>Battle Cards</h2>
                    <p>
                        <a href="https://play.unity.com/en/games/3e257543-23b1-4b2f-9162-d00d36a4c1f7/card-battle" target="_blank" rel="noopener noreferrer">
                            Click Here To Play The Full Card Battle Game
                        </a>
                        <br/> <br/> 
                        In addition to collecting cards, I wanted to add an actual card game where the player can use
                        the cards they collected and play against different types of AI. 
                        <br/> <br/>
                        The scope of this project included creating a turn based game with player and AI
                        mana pool and health. Every turn, the mana pool is refreshed and the player must choose
                        which cards they want to play to defeat the enemy cards. In addition, the user can choose different
                        battles that have different AI in which the AI play more aggressively or more defensively.

                        <br/><br/>
                        <a 
                        href="https://github.com/lvonengel/CardBattle" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="github-link"
                        >
                            View Project on GitHub →
                        </a>
                    </p>
                    <section className="schematic-section">
                        <div className="schematic-grid">
                            {[
                            {
                                src: "/img/imgStoreSimulator/PlacingCardsDown.mp4",
                                title: "Placing Cards Down",
                                desc: "Creating a player hand and placing cards onto the field."
                            },
                            {
                                src: "/img/imgStoreSimulator/DrawingCards.mp4",
                                title: "Drawing Cards",
                                desc: "Choosing to draw additional cards for mana."
                            },
                            {
                                src: "/img/imgStoreSimulator/PlayingGameWithTurn.mp4",
                                title: "Turn System Against Enemy Cards",
                                desc: "Attacking enemy cards and them attacking back."
                            },
                            {
                                src: "/img/imgStoreSimulator/PlayingAgainstDifferentAI.mp4",
                                title: "Full Game Against Multiple Types of AI",
                                desc: "Menu screens with unique AI that have different strategies"
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

                </div>
            )}

        </main>
    )
}