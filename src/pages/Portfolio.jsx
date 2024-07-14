import github from "../assets/icons/github_icon.png";
import datasnake from "../assets/images/datasnake.png";
import recipeRaomer from "../assets/images/recipe-roamer.png";
import eCommerceAPI from "../assets/images/e-commerce-backend.png";
import socialMediaAPI from "../assets/images/social-media-api.png";
import weatherDashboard from "../assets/images/weather-dashboard.png";
import codingQuiz from "../assets/images/coding-quiz.jpg";

export default function Portfolio() {
  const cardStyle = {
    width: "19rem",
    backgroundColor: "rgb(238, 233, 223)",
    boxShadow: "0px 0px 9px 7px rgb(100, 70, 0)",
  };

  const iconStyle = {
    width: "50px",
  };

  const spacer = {
    height: "50px",
  }

  return (
    <div>
      <h1 className="mb-4">My Work</h1>
      <section className="d-flex gap-3 flex-wrap align-self-center justify-content-around align-items-center">
        <div className="card" style={cardStyle}>
          <img
            className="card-img-top"
            src={datasnake}
          />
          <div className="card-body">
            <a href="https://group4-project2-c23a5470e6d9.herokuapp.com/login">
              <h4 className="card-title">DataSnake</h4>
            </a>
            <a href="https://github.com/ajprobel/datasnake">
              <img src={github} style={iconStyle}></img>
            </a>
            <p className="card-text">Simple game application; utilizes RESTful API creation, SQL, MVC framework</p>
          </div>
        </div>

        <div className="card" style={cardStyle}>
          <img
            className="card-img-top"
            src={recipeRaomer}
          />
          <div className="card-body">
            <a href="https://octozek.github.io/RecipeRoamer/">
              <h4 className="card-title">Recipe Roamer</h4>
            </a>
            <a href="https://github.com/Octozek/RecipeRoamer">
              <img src={github} style={iconStyle}></img>
            </a>
            <p className="card-text">Application utilizing 3rd party APIs to help users find new recipes</p>
          </div>
        </div>

        <div className="card" style={cardStyle}>
          <img
            className="card-img-top"
            src={eCommerceAPI}
          />
          <div className="card-body">
            <a href="https://drive.google.com/file/d/1MD8ZADr_7Qp5xTZcRihN-e0PtAysx44B/view">
              <h4 className="card-title">Social Media API</h4>
            </a>
            <a href="https://github.com/ajprobel/social-media-api">
              <img src={github} style={iconStyle}></img>
            </a>
            <p className="card-text">NoSQL API framework for an example social media application</p>
          </div>
        </div>

        <div className="card" style={cardStyle}>
          <img
            className="card-img-top"
            src={socialMediaAPI}
          />
          <div className="card-body">
            <a href="https://drive.google.com/file/d/1ABIOp7sbomU-V-FfYQBsNwa2z-RS-EtB/view">
              <h4 className="card-title">E-Commerce API</h4>
            </a>
            <a href="https://github.com/ajprobel/e-commerce-backend">
              <img src={github} style={iconStyle}></img>
            </a>
            <p className="card-text">SQL back end framework for an example e-commerce website</p>
          </div>
        </div>

        <div className="card" style={cardStyle}>
          <img
            className="card-img-top"
            src={weatherDashboard}
          />
          <div className="card-body">
            <a href="https://ajprobel.github.io/weather-dashboard/">
              <h4 className="card-title">Weather Dashboard</h4>
            </a>
            <a href="https://github.com/ajprobel/weather-dashboard">
              <img src={github} style={iconStyle}></img>
            </a>
            <p className="card-text">Simple searchable 5 day weather dashboard</p>
          </div>
        </div>

        <div className="card" style={cardStyle}>
          <img
            className="card-img-top"
            src={codingQuiz}
          />
          <div className="card-body">
            <a href="https://ajprobel.github.io/coding-quiz/">
              <h4 className="card-title">Coding Quiz</h4>
            </a>
            <a href="https://github.com/ajprobel/coding-quiz">
              <img src={github} style={iconStyle}></img>
            </a>
            <p className="card-text">JavaScript Coding Quiz</p>
          </div>
        </div>
      </section>
      <div style={spacer}></div>
    </div>
  );
}
