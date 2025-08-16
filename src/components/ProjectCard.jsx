import React, { useState } from "react";

const ProjectCard = ({image, title}) => {
    return (
        <div className="project-card" >
            <div className="project-card-imgWrap">
                <img src={image} alt={title} className="project-card-img" />
            </div>
            <div className="project-card-title">
                {title}
            </div>
        </div>
    )
}

export default ProjectCard;