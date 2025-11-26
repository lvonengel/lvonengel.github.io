import { useState } from 'react'
import ProjectCard from './components/ProjectCard'
import Experience from './components/Experience'
import About from './components/About'
import './App.css'

const projects = [
  { title: "Air Filter", image: "/img/imgGCE/GCELogoShort.png", to: "/projects/GCE", type: "both"},
  { title: "Robotic Arm", image: "/img/imgRobot/Arm.jpg", to: "/projects/Robot", type: "hardware"},
  { title: "Kitchen Chaos", image: "/img/imgKitchenChaos/KitchenChaos.png", to: "/projects/KitchenChaos", type: "software"},
  { title: "RoboBuddy", image: "/img/imgRobobuddy/robobuddyLogo.png", to: "/projects/Robobuddy", type: "hardware"},
  { title: "Pill Pal", image: "/img/imgPillDispenser/PillPalLogo.png", to: "/projects/PillPal", type: "hardware"},
  { title: "Farmadillo", image: "/img/imgGreenhouse/FarmadilloLogo.png", to: "/projects/Farmadillo", type: "hardware"},
  { title: "Portfolio", image: "/img/imgPersonalPortfolio/PersonalPortfolioCrop.png", to: "/projects/PersonalPortfolio", type: "software"},
  { title: "Spider Robot", image: "/img/imgEmbeddedSpider/embeddedSpider.jpg", to: "/projects/EmbeddedSpider", type: "software"},
  { title: "Music Box", image: "/img/imgMusicBox/MusicBoxLogo.png", to: "/projects/MusicBox", type: "software"},
];

function Home() {
  const [filter, setFilter] = useState("all")
  //filters projects
  const filteredProjects = projects.filter((p) => {
    if (filter === "all") return true
    if (filter === "hardware") return p.type === "hardware" || p.type === "both"
    if (filter === "software") return p.type === "software" || p.type === "both"
    return true
  })

  return (
    <>
      <section id='about'>
        <About /> 
      </section>
      
      <section id='projects' className='projects'>
        <h1>Projects</h1>
        <div className="filter-buttons">
          <button
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={filter === "hardware" ? "active" : ""}
            onClick={() => setFilter("hardware")}
          >
            Hardware
          </button>
          <button
            className={filter === "software" ? "active" : ""}
            onClick={() => setFilter("software")}
          >
            Software
          </button>
        </div>
        <div className='project-grid'>
          {filteredProjects.map((p) => (<ProjectCard key={p.title} title={p.title} image={p.image} to={p.to} />))}
        </div>
      </section>

      <section id="timeline">
        <h1>Work Experience</h1>
        <Experience />
      </section>
    </>
  )
}

export default Home
