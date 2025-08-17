import { Link, useLocation } from "react-router-dom";
import './NavigationBar.css'

export default function NavigationBar() {
  const { pathname } = useLocation();
  const onHome = pathname === "/";
  const toFor = (id) => (onHome ? `#${id}` : { pathname: "/", hash: `#${id}` });

  return (
    <header className="navigation-bar">
      <h2 className="nav-logo">Liu von Engelbrechten</h2>
      <nav className="nav-right">
        <ul className="nav-links">
          <li><Link to={toFor("about")}>About</Link></li>
          <li><Link to={toFor("projects")}>Projects</Link></li>
          <li><Link to={toFor("timeline")}>Work</Link></li>
        </ul>
      </nav>
    </header>
  );
}
