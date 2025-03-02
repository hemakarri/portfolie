import React, { useEffect, useState } from 'react';
import { CiCircleList } from "react-icons/ci";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Header from './header';
import laundry from './images/laundry.png';
import prnews from './images/prnews.png';
import teens from './images/teens.png';
import dc from './images/DC.png';
import "./data.css";

function Data() {
  const skills = ["React.js", "JavaScript", "CSS", "MongoDB", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "REST APIs"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSkillRevealed, setIsSkillRevealed] = useState(false);
  const [isProjectRevealed, setIsProjectRevealed] = useState(false);
  const [isContactRevealed, setIsContactRevealed] = useState(false);

  const { text } = useTypewriter({
    words: ["Frontend Developer", "React Developer", "Web Developer"],
    loop: true,
    deleteSpeed: 50,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % skills.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="data-container">
      <Header />
      <div className="data-middle-body">
        <h1 className="data-heading">
          Hello, I'm <span className="highlight">Karri Hema Prasad</span>
        </h1>
        <h2 className="data-subtitle">
          I am a {text} <span className="highlight"><Cursor /></span>
        </h2>
        <h3 className="data-skill-text">
          Skilled in <span className="dynamic-skill">{skills[currentIndex]}</span>
        </h3>

        {/* Skills Section */}
        <button onClick={() => setIsSkillRevealed(!isSkillRevealed)} className="reveal-btn">
          {isSkillRevealed ? "Hide Skills" : "Show Skills"}
        </button>

        <div className={`skills-box ${isSkillRevealed ? "show" : ""}`}>
          {skills.map((skill, index) => (
            <div key={index} className="skill-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <CiCircleList className="icon" />
              <p>{skill}</p>
            </div>
          ))}
        </div>

        {/* Projects Section */}
        <button onClick={() => setIsProjectRevealed(!isProjectRevealed)} className="reveal-btn">
          {isProjectRevealed ? "Hide Projects" : "Show Projects"}
        </button>

        <div className={`projects-box ${isProjectRevealed ? "show" : ""}`}>
          {[{
            title: "Laundry Service", img: laundry, link: "https://sparkling-mandazi-61fae9.netlify.app/"
          }, {
            title: "PRNews Today", img: prnews, link: "https://www.prnews.today/"
          }, {
            title: "Teens Fashions", img: teens, link: "https://teensfashions.in/"
          }, {
            title: "The Draperays Coutuers", img: dc, link: "https://thedraperayscoutuers.netlify.app/"
          }].map((project, index) => (
            <div key={index} className="project-card">
              <a href={project.link} target="_blank" rel="noreferrer">
                <img src={project.img} alt={project.title} />
                <h3>{project.title}</h3>
              </a>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <button onClick={() => setIsContactRevealed(!isContactRevealed)} className="reveal-btn">
          {isContactRevealed ? "Hide Contact" : "Show Contact"}
        </button>

        <div className={`contact-box ${isContactRevealed ? "show" : ""}`}>
          <a href="mailto:karrihemaprasad12@gmail.com"><FaEnvelope /> Email</a>
          <a href="tel:6302814600"><FaPhone /> Phone</a>
          <a href="https://github.com/hemakarri" target="_blank"><FaGithub /> GitHub</a>
          <a href="https://www.linkedin.com/in/karri-hemaprasad-5759a7226" target="_blank"><FaLinkedin /> LinkedIn</a>
        </div>

        <button className="download-resume">
          <a href="/resume.pdf" download>Download Resume</a>
        </button>
      </div>
    </div>
  );
}

export default Data;
