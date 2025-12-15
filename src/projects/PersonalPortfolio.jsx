import './projects.css'
export default function PersonalPortfolio() {
    return (
        <main>
            {/* Introduction */}
            <h1 className='title'>Website Portfolio</h1>
            <div className="columns">
                <img src="/img/imgPersonalPortfolio/PersonalPortfolio.png" style={{ height: "300px", width: "auto" }}/>
                <div className="projectOverview">
                    <h2>Project Overview</h2>
                    <p>
                    My most recent web development project has been updating my website portfolio. <br /> <br />
                    I originally coded my portfolio in HTML, CSS, and JS, but it looked outdated and unprofessional.
                    For my new website, I used React and Vite to create a cleaner and friendlier design including animations. <br /> <br /> 
                    <a 
                        href="https://github.com/lvonengel/lvonengel.github.io" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="github-link"
                        >
                            View New Website on GitHub →
                        </a>              
                    </p>
                </div>
            </div>

            {/* Skills Learned */}
            <h2 className="heading">Skills Learned</h2>
            <p>Software: React, Vite, Node.js</p>
            

        </main>
    )
}