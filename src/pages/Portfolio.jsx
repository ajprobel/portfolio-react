import github from "../assets/icons/github_icon.png";
import testPic from "../assets/images/20240214_174207.jpg";

export default function Portfolio() {
  const cardStyle = {
    width: "19rem",
    backgroundColor: "rgb(238, 233, 223)",
  };

  const iconStyle = {
    width: "50px",
  };

  return (
    <div>
      <h1 className="mb-4">My Work</h1>
      <section className="d-flex justify-content-around align-items-center">
        <div className="card" style={cardStyle}>
          <img
            className="card-img-top"
            src="https://th-thumbnailer.cdn-si-edu.com/ii_ZQzqzZgBKT6z9DVNhfPhZe5g=/fit-in/1600x0/filters:focal(1061x707:1062x708)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/55/95/55958815-3a8a-4032-ac7a-ff8c8ec8898a/gettyimages-1067956982.jpg"
          />
          <div className="card-body">
            <a href="">
              <h4 className="card-title">Project Title</h4>
            </a>
            <a href="">
              <img src={github} style={iconStyle}></img>
            </a>
            <p className="card-text">Description</p>
          </div>
        </div>

        <div className="card" style={cardStyle}>
          <img
            className="card-img-top"
            src="https://th-thumbnailer.cdn-si-edu.com/ii_ZQzqzZgBKT6z9DVNhfPhZe5g=/fit-in/1600x0/filters:focal(1061x707:1062x708)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/55/95/55958815-3a8a-4032-ac7a-ff8c8ec8898a/gettyimages-1067956982.jpg"
          />
          <div className="card-body">
            <a href="">
              <h4 className="card-title">Project Title</h4>
            </a>
            <a href="">
              <img src={github} style={iconStyle}></img>
            </a>
            <p className="card-text">Description</p>
          </div>
        </div>

        <div className="card" style={cardStyle}>
          <img
            className="card-img-top"
            src="https://th-thumbnailer.cdn-si-edu.com/ii_ZQzqzZgBKT6z9DVNhfPhZe5g=/fit-in/1600x0/filters:focal(1061x707:1062x708)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/55/95/55958815-3a8a-4032-ac7a-ff8c8ec8898a/gettyimages-1067956982.jpg"
          />
          <div className="card-body">
            <a href="">
              <h4 className="card-title">Project Title</h4>
            </a>
            <a href="">
              <img src={github} style={iconStyle}></img>
            </a>
            <p className="card-text">Description</p>
          </div>
        </div>

        <div className="card" style={cardStyle}>
          <img
            className="card-img-top"
            src="https://th-thumbnailer.cdn-si-edu.com/ii_ZQzqzZgBKT6z9DVNhfPhZe5g=/fit-in/1600x0/filters:focal(1061x707:1062x708)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/55/95/55958815-3a8a-4032-ac7a-ff8c8ec8898a/gettyimages-1067956982.jpg"
          />
          <div className="card-body">
            <a href="">
              <h4 className="card-title">Project Title</h4>
            </a>
            <a href="">
              <img src={github} style={iconStyle}></img>
            </a>
            <p className="card-text">Description</p>
          </div>
        </div>
      </section>
    </div>
  );
}
