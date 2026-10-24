import { useState } from "react";
import ProjectCard from "./components/ProjectCard";
import Experience from "./components/Experience";
import About from "./components/About";
import "./App.css";

const projects = [
  {
    title: "luX-Ray",
    image: "/img/Luxray/InitialCAD.png",
    to: "/projects/Luxray",
    type: "hardware",
    desc: "A robotic machine that automates the radiation emissions survey for assembled Lumafield CT scanners.",
    tags: ["Leadership", "Altium", "Robotics", "Automation"],
  },
  {
    title: "Pendar (Co-op)",
    image: "/img/Home/pendar.png",
    to: "/projects/Pendar",
    type: "both",
    desc: "A photonics co-op focused on automating spectrometer manufacturing and testing through a 6-DOF robot, computer vision, and image processing.",
    tags: ["Robotics", "Multithreading", "Python", "KiCad"],
  },
  {
    title: "Air Filter",
    image: "/img/GCE/KeyShotRender.png",
    to: "/projects/GCE",
    type: "hardware",
    desc: "A machine that automatically places separators between air filter pleats for GCE, replacing a slow manual step.",
    tags: ["Altium", "Python", "CV2", "Automation"],
  },
  {
    title: "River Gauge",
    image: "/img/RiverGauge/RiverGaugeBox.png",
    to: "/projects/RiverGauge",
    type: "both",
    desc: "A low cost, autonomous river monitoring device that measures water level and sends real time data to a public website for a client in Maine.",
    tags: ["Altium", "C", "Zephyr RTOS", "Low Power"],
  },
  {
    title: "Robotic Arm",
    image: "/img/Robot/ArmWhite.jpg",
    zoomOut: true,
    to: "/projects/Robot",
    type: "hardware",
    desc: "A servo-controlled robotic arm with EMG sensor integration, computer vision, and adjustable motion control.",
    tags: ["Python", "EMG", "CV2", "FDM Printing"],
  },
  {
    title: "RoboBuddy",
    image: "/img/Robobuddy/RobobuddyWhite.jpg",
    zoomOut: true,
    to: "/projects/Robobuddy",
    type: "hardware",
    desc: "Project lead for a desktop robot companion built around sensing, feedback, and an expressive face.",
    tags: ["Python", "Raspberry Pi", "Linux", "LVGL"],
  },
  {
    title: "Pill Pal",
    image: "/img/PillDispenser/PillPalWhite.png",
    zoomOut: true,
    to: "/projects/PillPal",
    type: "hardware",
    desc: "An automated pill dispenser designed for safety, authentication, and guided user interaction.",
    tags: ["C++", "LVGL", "Motors"],
  },
  {
    title: "Farmadillo",
    image: "/img/Greenhouse/FinalProductWhite.png",
    zoomOut: true,
    to: "/projects/Farmadillo",
    type: "hardware",
    desc: "An automated greenhouse system that responds to environmental data and keeps plants growing at optimal conditions.",
    tags: ["C++", "Arduino", "Figma"],
  },
  {
    title: "Spider Robot",
    image: "/img/EmbeddedSpider/embeddedSpider.jpg",
    to: "/projects/EmbeddedSpider",
    type: "software",
    desc: "A multi legged robot simulation that explores embedded control logic and coordinated motion.",
    tags: ["C++", "Embedded", "Quartus", "MobaXterm"],
  },
  {
    title: "Store Simulator",
    image: "/img/StoreSimulator/MainMenu.png",
    to: "/projects/StoreSimulator",
    type: "software",
    desc: "A 3D retail simulation featuring stocking inventory, pricing, and card collections.",
    tags: ["Unity", "C#", "Animation"],
  },
  {
    title: "Kitchen Chaos",
    image: "/img/KitchenChaos/KitchenChaosMainMenu.png",
    to: "/projects/KitchenChaos",
    type: "software",
    desc: "A fast paced multiplayer cooking game where coordination and timing are the difference between chaos and success.",
    tags: ["Unity", "C#", "Netcode"],
  },
  {
    title: "Portfolio",
    image: "/img/PersonalPortfolio/Website.png",
    to: "/projects/PersonalPortfolio",
    type: "software",
    desc: "A responsive portfolio website built to showcase my engineering projects and skills.",
    tags: ["React", "Vite", "Node.js"],
  },
  {
    title: "Music Box",
    image: "/img/MusicBox/MusicBoxLogo.png",
    to: "/projects/MusicBox",
    type: "software",
    desc: "An interactive and engaging website to showcase your recent songs through Spotify.",
    tags: ["React", "Spotify API", "CSS"],
  },
];

function Home() {
  const [filter, setFilter] = useState("all");
  //filters projects
  const filteredProjects = projects.filter((p) => {
    if (filter === "all") return true;
    if (filter === "hardware")
      return p.type === "hardware" || p.type === "both";
    if (filter === "software")
      return p.type === "software" || p.type === "both";
    return true;
  });

  return (
    <>
      <section id="about">
        <About />
      </section>

      <section id="projects" className="projects">
        <h1 className="section-title">Projects</h1>
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
        <div className="project-grid">
          {filteredProjects.map((p) => (
            <ProjectCard
              key={p.title}
              title={p.title}
              image={p.image}
              zoomOut={p.zoomOut}
              to={p.to}
              desc={p.desc}
              tags={p.tags}
            />
          ))}
        </div>
      </section>

      <section id="timeline">
        <h1 className="section-title">Work Experience</h1>
        <Experience />
      </section>
    </>
  );
}

export default Home;
