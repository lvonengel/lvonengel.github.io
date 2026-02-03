import './projects.css'
export default function EmbeddedSpider() {
    return (
        <main>
            <h1 className='title'>Spider Robot</h1>
            <div className="columns">
                <img src="/img/imgEmbeddedSpider/embeddedSpider.jpg" style={{ height: "400px", width: "auto" }}/>
                <div className="projectOverview">
                    <h2>Project Overview</h2>
                    <p>
                    This project used a DE1-SoC and DE10Nano-Soc to code and control a 6 legged spider.<br /> <br />  
                    I designed movement control logic in C++ for initialization and walking.
                    <br/> <br/>
                    <a 
                        href="https://github.com/lvonengel/SpiderRobot" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="github-link"
                        >
                            View Project on GitHub →
                        </a>
                    </p>
                    
                </div>
            </div>
            <h2 className="heading">Skills Learned</h2>
            <p>Software: C++, Quartus, MobaXterm</p>
            <p>Concepts: Memory Mapping, PWM, Linux</p>
            
            <h2>Spider Moving</h2>
            <video width="400" controls>
                <source src="/img/imgEmbeddedSpider/spiderMoving.mp4" type="video/mp4" />
                Cannot load video.
            </video>

            <h2>Spider Moving With a Sensor</h2>
            <video width="400" controls>
                <source src="/img/imgEmbeddedSpider/SpiderWithSensor.mp4" type="video/mp4" />
                Cannot load video.
            </video>

        </main>
    )
}