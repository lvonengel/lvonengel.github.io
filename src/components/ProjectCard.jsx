import './ProjectCard.css'
import { Link } from "react-router-dom"

const ProjectCard = ({image, title, to}) => {
    return (
        <Link to={to} className="project-card">
            <div className="project-card-img-wrap">
                <img src={image} alt={title} className="project-card-img" />
            </div>
            <div className="project-card-title">
                {title}
            </div>
        </Link>
    )
}

export default ProjectCard;