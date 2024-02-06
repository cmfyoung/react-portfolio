import React from "react";
import Project from "./Project.jsx";
import TechBlogMania from "../Images/TechBlogMania.png";
import CodeQuiz from "../Images/CodeQuiz.png";
import Weather from "../Images/Weather.png";
import SquadUp from "../Images/SquadUp.png";
import EmployeeTracker from "../Images/EmployeeTracker.png";
import Jate from "../Images/Jate.png";



// Portfolio component
function Portfolio() {
  return (
        // Portfolio container
    <div className="portfolio-wrapper">
      <h1 className="portfolio-title">Portfolio</h1>
      <div className="container">
        <div className="row">
          {[
            {
              title: "Tech Blog",
              description: "CMS-Style Model View Controller Blog",
              imgSrc: TechBlogMania,
              deployedLink:
                "https://tech-blog-mania-00c5095b0f1d.herokuapp.com/",
              githubLink:
                "https://github.com/cmfyoung/MVC_Tech-Blog",
            },
            {
              title: "(JATE) Just Another Text Editor",
              description: "Single Page Text editor Application",
              imgSrc: Jate,
              deployedLink:
                "https://text-editor-p1qc.onrender.com/",
              githubLink:
                "https://github.com/cmfyoung/PWA-Text-Editor",
            },
            {
              title: "Employee Tracker",
              description: "Command Line App to manage employee databases",
              imgSrc: EmployeeTracker,
              deployedLink:
                "https://drive.google.com/file/d/1yqGNimaMvMUA4X8Zxhd5Jvkk1SjwLe_k/view",
              githubLink:
                "https://github.com/cmfyoung/Employee-Tracker",
            },
            {
              title: "Java Script: WEB API Quiz",
              description: "Web API quiz game.",
              imgSrc: CodeQuiz,
              deployedLink:
                "https://cmfyoung.github.io/code-quiz/",
              githubLink:
                "https://github.com/cmfyoung/code-quiz",
            },
            {
              title: "Squad Up",
              description: "Social Media Application",
              imgSrc: SquadUp,
              deployedLink:
                "https://squad-up-efc106e9fd47.herokuapp.com/",
              githubLink:
                "https://github.com/mforte215/squad-up",
            },
            {
              title: "Weather Dashboard",
              description: "Server-Side APIs: (5) Day Weather Dashboard.",
              imgSrc: Weather,
              deployedLink:
                "https://cmfyoung.github.io/Weather-Dashboard/",
              githubLink:
                "https://https://github.com/cmfyoung/Weather-Dashboard",
            },
          ].map((project, index) => (
            <div className="col-12 col-md-6 col-lg-4 my-2" key={index}>
              <Project
                title={project.title}
                description={project.description}
                imgSrc={project.imgSrc}
                deployedLink={project.deployedLink}
                githubLink={project.githubLink}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
// Export Portfolio
export default Portfolio;