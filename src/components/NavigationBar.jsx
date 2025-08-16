// src/components/NavigationBar.jsx
import { useLocation } from "react-router-dom";
import "./NavigationBar.css";

export default function NavigationBar() {
  const { pathname } = useLocation();
  const onHome = pathname === "/";

  // in-page anchors when in Home, absolute anchors when in other pages
  const hrefFor = (id) => (onHome ? `#${id}` : `/#${id}`);

  return (
    <header className="navigation-bar">
      <h2 className="nav-logo">Liu von Engelbrechten</h2>
      <nav className="nav-right">
        <ul className="nav-links">
          <li><a href={hrefFor("home")}>Home</a></li>
          <li><a href={hrefFor("about")}>About</a></li>
          <li><a href={hrefFor("projects")}>Projects</a></li>
        </ul>
      </nav>
    </header>
  );
}
