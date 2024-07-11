import github from "../assets/icons/github_icon.png";
import linkedin from "../assets/icons/linkedin_icon.png";
import instagram from "../assets/icons/instagram_icon.png";

import './Footer.css'

export default function Nav() {

  const iconStyle = {
    width: "46px",
    margin: "0px 35px 0px 35px"
  };
  
  return (
    <div className="mt-5" id="footer">
      <a className="p-2" href="https://github.com/ajprobel" >
      <img src={github} className="footerIcon" style={iconStyle}></img>
      </a>
      <a
        className="p-2"
        href="https://www.linkedin.com/in/james-probel-568354136/"
      >
        <img src={linkedin} className="footerIcon" style={iconStyle}></img>
      </a>
      <a
        className="p-2"
        href="https://www.instagram.com/jprobel/"
      >
        <img src={instagram} className="footerIcon" style={iconStyle}></img>
      </a>
    </div>
  );
}
