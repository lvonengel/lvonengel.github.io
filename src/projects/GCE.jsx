import './projects.css'
import PCBViewer from '../components/PCBViewer'

export default function GCE() {
    return (
        <main>
            <h1 className='title'>Autonomous Air Filter Pleat Separation</h1>
            <div class='columns'>
                <img src="/img/imgGCE/GCELogo.png" style={{ height: "150px", width: "auto" }}/>
            </div>
            <h2 className='heading'>Problem Statement</h2>
            <p>
                The manual insertion of separators between pleats in GCE’s air filters currently takes 50–70 seconds per unit, creating a bottleneck in production.
                Labor shortages have made this process increasingly difficult to scale, limiting the company’s ability to meet rising demand. <br/>
                GCE is seeking an electromechanical solution to perform this task more quickly and consistently.<br/><br/>
                The objectives are to:

                <div className='columns'>
                    <ul>
                        <li>Reduce assembly time</li>
                        <li>Enable continuous, high-volume production</li>
                    </ul>
                </div>

            </p>
            <h2 className='heading'>Skills Learned</h2>
            <p>Hardware: PCB Design, BLDC, Hall Sensors, PWM </p>
            <p>Software: Altium</p>

            <h2>3D PCB Render</h2>
            
            <PCBViewer/>

        </main>
    )
}