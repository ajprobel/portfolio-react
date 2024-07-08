import image from "../assets/images/20240214_174207.jpg";

export default function About() {

  const linkStyle = {
    color: "rgb(184, 135, 0)",
  }

  const imgStyle = {
    maxWidth: "80%",
    boxShadow: "0px 0px 15px 5px rgb(184, 135, 0)"
  }

  return (
    <div>
      <h1 className="mb-3">About Me</h1>
      <img src={image} alt="picture of me" className="img-fluid rounded m-3" style={imgStyle} />
      <div className="my-4">
        <p>
          Originally from Cincinnati, OH, and now living in Los Angeles, CA, I'm
          a developer with a background in Audio Engineering, Music
          Recording, and designing Interactive Music Systems for video games.
          I've had the pleasure of working with such a variety of teams in
          different environments and disciplines; problem-solving and bringing a
          fresh perspective to the table are my specialty!
        </p>
        <p>
          Music has been a major part of my life since I was a child; starting
          from playing piano when I was 6, up to touring multiple states in the
          Midwest and East Coast playing Double Bass in multiple ensembles. This
          passion led me to study audio engineering and music production at my
          Alma Mater: Ohio University in Athens, OH.
        </p>
        <p>
          After college, I moved to Los Angeles to pursue a career in recording
          music for film, TV, and video games. I found my home at Sony
          PlayStation; working as a Music Engineer to help record, edit, and mix
          soundtracks for AAA games. Throughout my time, I began gaining more
          skills, and while doing music engineering I started dipping my toes
          into the world of implementation. I worked with music editors,
          programmers, and project leads to help design and implement
          interactive music systems.
        </p>
        <p>
          I fell in love with designing systems and getting into the technical
          side of video games. After parting ways with Sony, I found myself
          wanting to develop applications and tools...and here we are! I'm now
          working towards being a certified full stack web developer. My past
          experiences and roles give me a unique insight into the world of
          programming and have sharpened my abilities for working out complex
          problems.
        </p>
        <p>
          Please find my contact information using the "Contact" link above, or
          click the icons below - I look forward to meeting you!
        </p>
      </div>
      <div className="my-3">
        <a className="p-2" href="https://github.com/ajprobel" style={linkStyle}>GitHub</a>
        <a className="p-2" href="https://www.linkedin.com/in/james-probel-568354136/" style={linkStyle}>LinkedIn</a>
        <a className="p-2" href="https://www.instagram.com/jprobel/" style={linkStyle}>Instagram</a>
      </div>
    </div>
  );
}
