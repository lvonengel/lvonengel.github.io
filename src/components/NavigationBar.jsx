import './NavigationBar.css'

const NavigationBar = () => (
    <div className="navigation-bar">
        <h2>Liu von Engelbrechten</h2>
        <nav className="nav-right">
            <ul className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            </ul>
        </nav>
    </div>
);

export default NavigationBar;
