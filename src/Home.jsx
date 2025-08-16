import ProjectCard from './components/ProjectCard'

import './App.css'

const projects = [
  { title: "BuddyBot", image: "/img/imgClubs/Forge.png", to: "/projects/BuddyBot"},
  { title: "Pill Pal", image: "/img/imgPillDispenser/PillPalLogo.png", to: "/projects/PillPal" },
  { title: "Farmadillo", image: "/img/imgClubs/Forge.png", to: "/projects/Farmadillo" },
  { title: "Music Box", image: "/img/imgMusicBox/MusicBoxLogo.png", to: "/projects/MusicBox" },
];

function Home() {

  return (
    <>
      <div id='home'>
        <h1>Hello! My name is</h1>
        <h1>Liu von Engelbrechten</h1>
      </div>
      <div className="columns">
        <img src="/img/imghome/profile.png"
        style={{ height: "300px", width: "auto" }}/>
        <h3>
          Hello! My name is Liu I am a second-year at Northeastern University from Cleveland, Ohio. 
          I'm passionate about robotics and building systems that bridge software and hardware together. <br /> <br />

          In my free time, I love hiking and playing tennis in my free time. <br /> <br />

          Please feel free to explore other pages here to look at my past projects!
        </h3>
      </div>
      
      <section id='projects' className='projects'>
        <h1>Projects</h1>
        <div className='project-grid'>
          {projects.map((p) => (<ProjectCard key={p.title} title={p.title} image={p.image} to={p.to} />))}
        </div>
      </section>

      <section id="timeline">
        <h1>Timeline</h1>
      </section>
      
    </>
  )
}

export default Home
