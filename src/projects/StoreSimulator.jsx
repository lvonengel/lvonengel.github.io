import './projects.css'
export default function StoreSimulator() {
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
                        can manage prices and inventory, decorate their store, and upgrade furniture. <br/> <br/>
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
            <p>Software: C#, Unity</p>

            {/* Contribution */}
            <h2 className="heading">Development Milestones</h2>
            <p>
                Each step below highlights concepts I implemented as part of building this game.
            </p>
            <br/><br/><br/>

            {/* Single Player */}
            <h2>Basic Store Simulator Cycle</h2>
            <p>
                I first wanted to begin by creating a classic store simulator loop: 
                stocking items, selling them, unlocking new items, repeat.
                <br/>
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
                        title: "Store Levl System",
                        desc: "Unlocking stock with store level."
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