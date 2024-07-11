import { Link } from "react-router-dom";
import './Nav.css'

export default function Nav() {
  const navStyle = {
    color: "black",
    backgroundColor: "rgb(250, 182, 0)",
    backgroundImage: "linear-gradient(rgb(255, 185, 0),  rgb(60, 40, 0))",
    boxShadow: "0px 0px 8px 3px rgb(80, 50, 0)",
    height: "auto",
    textDecoration: "none",
  };

  const linkStyle = {
    color: "purple",
    backgroundColor: "green",
    textDecoration: "none"
  }

  return (
    <section className="mb-5 d-flex justify-content-around align-items-center" style={navStyle}>
      <h2 className="p-2 px-5">James Probel</h2>
      <ul className="nav d-flex justify-content-center">
        
        <li className="navItem m-2 p-2">
          <Link to="/">About Me</Link>
        </li>
        <li className="navItem m-2 p-2">
          <Link to="/Portfolio">Portfolio</Link>
        </li>
        <li className="navItem m-2 p-2">
          <Link to="/Contact">Contact</Link>
        </li>
        <li className="navItem m-2 p-2">
          <Link to="/JP-Resume">Resume</Link>
        </li>
      </ul>
    </section>
  );
}
