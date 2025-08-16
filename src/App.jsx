import ProjectCard from './components/ProjectCard'
import NavigationBar from './components/NavigationBar';
import './App.css'

const projects = [
  { title: "BuddyBot", image: "/img/imgClubs/Forge.png" },
  { title: "Pill Pal", image: "/img/imgPillDispenser/PillPalLogo.png" },
  { title: "Farmadillo", image: "/img/imgClubs/Forge.png" },
  { title: "FPGA Elevation Mapping", image: "/img/imghome/Northeastern.png" },
];

function App() {

  return (
    <>
      <NavigationBar />
      <div className="columns">
        <div className='home'>
          <h1>Hello! I'm</h1>
          <h1>Liu von Engelbrechten</h1>
        </div>
        <img src="/img/imghome/profile.png"
        style={{ height: "300px", width: "auto" }}/>
      </div>
      <section className='projects'>
        <h1>Projects</h1>
        <div className='project-grid'>
          {projects.map((p) => (<ProjectCard key={p.title} title={p.title} image={p.image} />))}
        </div>
      </section>

      <section className="timeline">
        <h1>Timeline</h1>
      </section>
      
    </>
  )
}

export default App
