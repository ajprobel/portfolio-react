import resume from '../assets/images/AJP_Resume.png'
import download from '../assets/downloadable/AJP_Resume_2024.pdf'

export default function Resume() {
    const resumeStyle = {
        border: "3px solid black",
        height: "1000px",
    }

    return (
        <div className='my-3'>
            <h1>Resume</h1>
            <h4>Download PDF version <a href={download} download>here</a></h4>
            <img src={resume} alt="Probel Resume 2024" className="img-fluid rounded m-3 shadow-lg" style={resumeStyle}></img>
        </div>
    )
}