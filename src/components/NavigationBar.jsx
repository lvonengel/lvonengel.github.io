import { Link, useLocation } from "react-router-dom";
import "./NavigationBar.css";

export default function NavigationBar() {
  const { pathname } = useLocation();
  const onHome = pathname === "/";
  const toFor = (id) => (onHome ? `#${id}` : { pathname: "/", hash: `#${id}` });

  return (
    <header className="navigation-bar">
      <h2 className="nav-logo">
        <Link
          to="/"
          onClick={() =>
            window.scrollTo({ top: 0, behavior: onHome ? "smooth" : "instant" })
          }
        >
          Liu von Engelbrechten
        </Link>
      </h2>
      <nav className="nav-right">
        <ul className="nav-links">
          <li>
            <Link to={toFor("about")}>About</Link>
          </li>
          <li>
            <Link to={toFor("projects")}>Projects</Link>
          </li>
          <li>
            <Link to={toFor("timeline")}>Work</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
