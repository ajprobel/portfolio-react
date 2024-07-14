import resume from '../assets/images/AJP_Resume.png'
import download from '../assets/downloadable/AJP_Resume_2024.pdf'

export default function Resume() {
    const resumeStyle = {
        border: "3px solid black",
        height: "1000px",
    }

    const linkStyle = {
        color: "rgb(184, 135, 0)",
    }

    const listStyle = {
        listStyleType: "none",
        color: "black",
    }

    return (
        <div className='my-3'>
            <h1>Resume</h1>
            <h4 className='mt-4'>Front End Proficiencies</h4>
            <ul className="gap-4 d-flex justify-content-center" style={listStyle}>
                <li className="" >HTML</li>
                <li className="">CSS</li>
                <li className="">Bootstrap</li>
                <li className="">JavaScript</li>
                <li className="">jQuery</li>
                <li className="">React</li>
            </ul>
            <h4 className='mt-3'>Back End Proficiencies</h4>
            <ul className="gap-4 d-flex justify-content-center" style={listStyle}>
                <li className="">NodeJS</li>
                <li className="">Express</li>
                <li className="">RESTful API creation</li>
                <li className="">SQL / Sequelize</li>
                <li className="">MongoDB / Mongoose</li>
                <li className="">GraphQL</li>
            </ul>
            <h4 className='mt-5'>[ Download PDF version <a style={linkStyle} href={download} download>here</a> ]</h4>
            <img src={resume} alt="Probel Resume 2024" className="img-fluid rounded m-3 shadow-lg" style={resumeStyle}></img>
        </div>
    )
}