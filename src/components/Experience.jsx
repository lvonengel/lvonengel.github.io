import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Experience.css";

const experiences = [
  {
    title: "Photonics Automation Engineer",
    company: "Pendar Technologies",
    date: "July 2025 - December 2025",
    image: "/img/imghome/pendar.png",
    link: "https://www.pendar.com/",
  },
  {
    title: "FPGA Firmware Engineer (Research Lab)",
    company: "Silicon Synapse Lab",
    date: "March 2025 - Present",
    skills: "Skills: C++",
    image: "/img/imghome/Northeastern.png",
    link: "https://siliconsynapse.sites.northeastern.edu/",
  },
  {
    title: "TA for Web Development",
    company: "CodePath",
    date: "January 2025 - April 2025",
    image: "/img/imghome/codepath.jpg",
    link: "https://www.codepath.org/",
  },
  {
    title: "IT Intern",
    company: "System Seals",
    date: "June 2023 - August 2023",
    image: "/img/imghome/Systemseals.png",
    link: "https://www.systemseals.com/",
  },
  {
    title: "CNC Operator and Programmer",
    company: "System Seals",
    date: "June 2022 - August 2022",
    image: "/img/imghome/Systemseals.png",
    link: "https://www.systemseals.com/",
  },
];

function ExperienceCard({ title, company, date, image, link }) {
  return (
    <VerticalTimelineElement
      intersectionObserverProps={{
        rootMargin: "0px 0px -200px 0px",
        triggerOnce: false,
      }}
      date={date}
      iconStyle={{ overflow: "hidden" }}
      icon={<img src={image} alt={company} className="experience-icon" />}
    >
      <a href={link} target="_blank" rel="noopener noreferrer" className="experience-link">
        <h3>{title}</h3>
        <p>{company}</p>
      </a>
    </VerticalTimelineElement>
  );
}

export default function Experience() {
  return (
    <div>
      <VerticalTimeline>
        {experiences.map((exp, i) => (
          <ExperienceCard key={i} {...exp} />
        ))}
      </VerticalTimeline>
    </div>
  );
}
