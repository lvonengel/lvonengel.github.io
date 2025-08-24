import ProjectCard from './components/ProjectCard'
import Experience from './components/Experience'
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
        <div>
          <h1>Hello! My name is</h1>
          <h1>Liu von Engelbrechten</h1>
        </div>
        <div className="columns">
          <img src="/img/imghome/profile.png" style={{ height: "300px", width: "auto" }}/>
          <h3>
            I am a second-year Computer Engineer and Computer Science major at Northeastern University from Cleveland, Ohio. 
            I'm passionate about robotics and building systems that bridge software and hardware together. <br /> <br />

            In my free time, I love hiking, playing tennis, and going out to try new foods. <br /> <br />
          </h3>
        </div>
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
