import "./ProjectCard.css";
import { Link } from "react-router-dom";

// Image-only card; the name, description and skills fade in over a blurred image on hover.
const ProjectCard = ({
  image,
  title,
  to,
  desc,
  tags = [],
  zoomOut = false,
}) => {
  return (
    <Link to={to} className="project-card">
      <img
        src={image}
        alt={title}
        className={zoomOut ? "project-card-img zoomed-out" : "project-card-img"}
      />

      <div className="project-card-overlay">
        <div className="project-card-title">{title}</div>

        {desc ? <div className="project-card-desc">{desc}</div> : null}

        {tags.length ? (
          <div className="project-card-tags">
            {tags.map((t) => (
              <span key={t} className="project-tag">
                {t}
              </span>
            ))}
          </div>
        ) : null}

        <span className="project-card-cta">View project →</span>
      </div>
    </Link>
  );
};

export default ProjectCard;
