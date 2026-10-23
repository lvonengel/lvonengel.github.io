import "./ProjectHeader.css";

// Project header that has the name and details on the left and picture on the right.
export default function ProjectHeader({
  title,
  image,
  role,
  timeline,
  tools = [],
}) {
  return (
    <header className="project-header">
      <div className="project-header-text">
        <h1 className="title project-header-title">{title}</h1>

        <dl className="project-header-meta">
          {role && (
            <div>
              <dt>Role</dt>
              <dd>{role}</dd>
            </div>
          )}
          {timeline && (
            <div>
              <dt>Timeline</dt>
              <dd>{timeline}</dd>
            </div>
          )}
          {tools.length > 0 && (
            <div className="project-header-tools">
              <dt>Tools</dt>
              <dd>{tools.join(", ")}</dd>
            </div>
          )}
        </dl>
      </div>

      <div className="project-header-img">
        <img src={image} alt={title} />
      </div>
    </header>
  );
}
