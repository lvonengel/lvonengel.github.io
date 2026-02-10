import './ProjectCard.css'
import { Link } from "react-router-dom"

const ProjectCard = ({image, title, to, desc, tags = []}) => {
    return (
        <Link to={to} className="project-card">
            <div className="project-card-img-wrap">
                <img src={image} alt={title} className="project-card-img" />
            </div>
            <div className="project-card-body">
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
            </div>
        </Link>
    )
}

export default ProjectCard;