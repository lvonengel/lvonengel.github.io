import { useState } from 'react'
import ProjectCard from './components/ProjectCard'
import Experience from './components/Experience'
import About from './components/About'
import './App.css'

const projects = [
  { 
    title: "Pendar (Co-op)", 
    image: "/img/imghome/pendar.png", 
    to: "/projects/Pendar", 
    type: "both",
    desc: "A photonics coop focused on automating spectrometer manufacturing and testing through a 6-DOF robot, computer vision, and image processing.",
    tags: ["Robotics", "Python", "CV"]
  },
  { 
    title: "Air Filter", 
    image: "/img/imgGCE/KeyShotRender.png", 
    to: "/projects/GCE", 
    type: "both",
    desc: "A custom air pleat separator mechanism integrating PCB and iterative prototyping through real world constraints.",
    tags: ["Altium PCB", "CV", "BLDC"]
  },
  { 
    title: "Robotic Arm", 
    image: "/img/imgRobot/Arm.jpg", 
    to: "/projects/Robot", 
    type: "hardware",
    desc: "A servo-controlled robotic arm with EMG sensor integration and tunable motion control.",
    tags: ["PWM", "EMG", "CV2", "FDM Printing"]
  },
  { 
    title: "Store Simulator", 
    image: "/img/imgStoreSimulator/MainMenu.png", 
    to: "/projects/StoreSimulator", 
    type: "software",
    desc: "A 3D Unity retail simulation featuring stocking inventory, pricing, and interactive environments.",
    tags: ["Unity", "C#", "Animation"]
  },
  { 
    title: "Kitchen Chaos", 
    image: "/img/imgKitchenChaos/KitchenChaosMainMenu.png", 
    to: "/projects/KitchenChaos", 
    type: "software",
    desc: "A fast paced multiplayer Unity cooking game where coordination and timing are the difference between chaos and success.",
    tags: ["Unity", "C#", "Netcode"]
  },
  { 
    title: "RoboBuddy", 
    image: "/img/imgRobobuddy/robobuddyLogo.png", 
    to: "/projects/Robobuddy", 
    type: "hardware",
    desc: "Project lead for a desktop robot companion built around sensing, feedback, and an expressive face.",
    tags: ["Raspberry Pi", "Linux", "LVGL"]
  },
  { 
    title: "Pill Pal", 
    image: "/img/imgPillDispenser/PillPalLogo.png", 
    to: "/projects/PillPal", 
    type: "hardware",
    desc: "An automated pill dispenser designed for safety, authentication, and guided user interaction.",
    tags: ["C++", "LVGL", "Servos"]
  },
  { 
    title: "Farmadillo", 
    image: "/img/imgGreenhouse/FarmadilloLogo.png", 
    to: "/projects/Farmadillo", 
    type: "hardware",
    desc: "An automated greenhouse system that responds to environmental data and keeps plants growing at optimal conditions.",
    tags: ["C++", "Arduino", "Figma"]
  },
  { 
    title: "Portfolio", 
    image: "/img/imgPersonalPortfolio/PersonalPortfolioCrop.png", 
    to: "/projects/PersonalPortfolio", 
    type: "software",
    desc: "A responsive portfolio website built to showcase my engineering projects and skills.",
    tags: ["React", "Vite", "Node.js"]
  },
  { 
    title: "Spider Robot", 
    image: "/img/imgEmbeddedSpider/embeddedSpider.jpg", 
    to: "/projects/EmbeddedSpider", 
    type: "software",
    desc: "A multi legged robot simulation that explores embedded control logic and coordinated motion.",
    tags: ["C++", "Embedded"]
  },
  { 
    title: "Music Box", 
    image: "/img/imgMusicBox/MusicBoxLogo.png", 
    to: "/projects/MusicBox", 
    type: "software",
    desc: "An interactive and engaging website to showcase your latest favorite song through Spotify.",
    tags: ["React"]
  },
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
          {filteredProjects.map((p) => (
            <ProjectCard 
            key={p.title} 
            title={p.title} 
            image={p.image} 
            to={p.to} 
            desc={p.desc} 
            tags={p.tags} 
            />))}
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
