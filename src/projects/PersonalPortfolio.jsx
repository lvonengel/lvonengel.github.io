import './projects.css'
export default function PersonalPortfolio() {
    return (
        <main>
            <h1 className='title'>Website Portfolio</h1>
            <div class="columns">
                <img src="/img/imgPersonalPortfolio/PersonalPortfolioCode.png" style={{ height: "300px", width: "auto" }}/>
                <div className="projectOverview">
                    <h2>Project Overview</h2>
                    <p>
                    My most recent web development project has been updating my website portfolio. <br /> <br />
                    I originally coded my portfolio in HTML, CSS, and JS, but it looked outdated and unprofessional.
                    For my new website, I used React and Vite to create a cleaner and friendlier design including animations. <br /> <br />
                    <a href="https://github.com/lvonengel/Old-Website-Portfolio" target="_blank">
                        Here is a link to my old website.
                    </a>                    
                    </p>
                </div>
            </div>
            <h2 className="heading">Skills Learned</h2>
            <p>Software: React, Vite, Node.js</p>
            

        </main>
    )
}