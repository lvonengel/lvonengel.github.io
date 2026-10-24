import "./projects.css";
import ProjectHeader from "../components/ProjectHeader";

const demos = [
  {
    title: "Demo",
    src: "https://www.youtube.com/embed/yl68C_u5AXc?si=Jr_JSUpeqUs3Io82",
  },
  {
    title: "HomePage",
    src: "https://www.youtube.com/embed/nj3Go7noo6k?si=b--u78916uil044Q",
  },
  {
    title: "Profile",
    src: "https://www.youtube.com/embed/9eaQpb2sIXk?si=opJsVYVsU1aX8BO0",
  },
  {
    title: "Review",
    src: "https://www.youtube.com/embed/tGnyza_pskM?si=GLoS1LOdqnkd8Vb8",
  },
];

export default function MusicBox() {
  return (
    <main>
      <ProjectHeader
        title="Music Box"
        image="/img/MusicBox/MusicBoxLogo.png"
        role="Software Engineer"
        timeline="September 2023 – December 2023"
        tools={["React", "Spotify API", "CSS"]}
      />

      <section className="project-block">
        <h2 className="section-heading">Purpose</h2>
        <p>
          MusicBox is a website that allows you to rate albums, search for
          songs, write reviews, and share with your friends. I collaborated with
          four other people in GitHub using React.
        </p>
      </section>

      <section className="project-block">
        <h2 className="section-heading">Design Process</h2>

        {demos.map((demo) => (
          <div className="project-part" key={demo.title}>
            <h3 className="subheading">{demo.title}</h3>
            <div className="part-body">
              <div className="video-embed">
                <iframe
                  src={demo.src}
                  title={`Music Box ${demo.title} video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
