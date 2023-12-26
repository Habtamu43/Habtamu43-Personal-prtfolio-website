import React from "react";
import './Navbar.css';
import Github from '../Image/Github.png';
import Linkedin from '../Image/Linkedin.png';
const projects = [
    {
      title: "Personal Portfolio",
      description: "A customized personal portfolio showcasing skills, projects, and contact information.",
      githubLink: "https://github.com/Habtamu43/Habtamu43-Personal-prtfolio-website"
    },
    {
      title: "Job Application Form",
      description: "A web form for job applications.",
      githubLink: "https://github.com/Habtamu43/job-application-Form-using-react"
    }
  ];
const Navbar = () =>{
    return(
        <div className="n-wrapper">
              <div className="n-left">
                     <div className="n-name">
                      <p>Welcome to myportfolio </p> 
                      </div>
                     <a href="https://github.com/Habtamu43" target="_blank" rel="noopener noreferrer">
                     <img src={Github} alt="GitHub" />
                    </a> {/* Wrapped social icons in links */}
                    <a href="https://www.linkedin.com/in/habtamu-kassa/" target="_blank" rel="noopener noreferrer">
                    <img src={Linkedin} alt="LinkedIn" />
                    </a>
                </div>
              <div className="n-right">
                    <div className="n-list">
                        <ul className="no-list-style">
                            <li>Home</li>
                            <li>Skill</li>
                            <li>project</li>
                            <li>Resume</li>
                            <li>Contact</li>
                        </ul>
                    </div>
              </div>
        </div>
    )
}
export default Navbar