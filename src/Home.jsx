import ProjectCard from './components/ProjectCard'
import Experience from './components/Experience'
import About from './components/About'
import './App.css'

const projects = [
  { title: "Spider Robot", image: "/img/imgEmbeddedSpider/embeddedSpider.jpg", to: "/projects/EmbeddedSpider"},
  { title: "Portfolio", image: "/img/imgPersonalPortfolio/PersonalPortfolioCode.png", to: "/projects/PersonalPortfolio"},
  { title: "RoboBuddy", image: "/img/imgRobobuddy/robobuddyLogo.png", to: "/projects/Robobuddy"},
  { title: "Pill Pal", image: "/img/imgPillDispenser/PillPalLogo.png", to: "/projects/PillPal" },
  { title: "Farmadillo", image: "/img/imgGreenhouse/FarmadilloLogo.png", to: "/projects/Farmadillo" },
  { title: "Music Box", image: "/img/imgMusicBox/MusicBoxLogo.png", to: "/projects/MusicBox" },
];

function Home() {

  return (
    <>
      <section id='about'>
        <About /> 
      </section>
      
      <section id='projects' className='projects'>
        <h1>Projects</h1>
        <div className='project-grid'>
          {projects.map((p) => (<ProjectCard key={p.title} title={p.title} image={p.image} to={p.to} />))}
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
