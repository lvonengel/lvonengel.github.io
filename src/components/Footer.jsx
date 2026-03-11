import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer">
        <p>
            If you would like to get in touch, here's my contact info!
        </p>
        <p>
            vonengelbrechten.l@northeastern.edu <br />
            or Personal: liuvone@outlook.com
        </p>
        <div className="social-icons">
        <a href="https://www.linkedin.com/in/liu-von-engelbrechten/" target="_blank">
            <img src="img/Home/linkedin.png" style={{ height: "50px", width: "auto" }}/>
        </a>
        <a href="https://github.com/lvonengel" target="_blank">
            <img src="img/Home/github.png" style={{ height: "50px", width: "auto" }}/>
        </a>
        </div>
    </footer>
    )
}