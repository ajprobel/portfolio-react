import { Link } from "react-router-dom";

export default function Nav() {
  const navStyle = {
    color: "black",
    backgroundColor: "aliceblue",
    height: "50px",
  }
  return (
    <ul className="mb-5 nav d-flex justify-content-center" style={navStyle}>
      <h3 className="p-2">James Probel</h3>
      <li className="navItem p-2">
        <Link to='/'>
        About Me
        </Link>
      </li>
      <li className="navItem p-2">
        <Link to='/Portfolio'>
        Portfolio
        </Link>
      </li>
      <li className="navItem p-2">
        <Link to='/Contact'>
        Contact
        </Link>
      </li>
      <li className="navItem p-2">
        <Link to='/JP-Resume'>
        Resume
        </Link>
      </li>
    </ul>
  );
}
