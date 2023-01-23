import beautybebo from "../../Images/beauty-bebo.png";
import frazo from "../../Images/frazo.png";
import outlook from "../../Images/outlook.png";
import urban from "../../Images/urban.png";
import "./Project.css";
import React from "react";

const Allproject = [
  {
    img: outlook,
    title: "Outlook",
    description:
      "Outlook covers the latest India news, analysis, business news and long-form stories on culture, money market and personal finance",
    git: "https://github.com/RoshanAAS/Outlook-Team",
    link: "https://incomparable-tanuki-7c67dc.netlify.app/",
    tech: "HTML | CSS",
  },
  {
    img: beautybebo,
    title: "Beauty Bebo",
    description:
      "Beauty Bebo is India’s fastest growing online retail store for the day to day and special occasion need of the Makeup, Skin care, Hair care, Personal care, Mom and Baby care, Fragrance and Ayurveda products. ",
    git: "https://github.com/lokesh-dc/Beauty-Bebo-Clone",
    link: "https://bright-puppy-c195ee.netlify.app/",
    tech: "HTML | CSS | Javascript ",
  },
  {
    img: frazo,
    title: "Fraazo",
    description:
      "FRAAZO is the best online vegetables, fruits & grocery ordering app with over 1.5Mn+ happy customers. We provide the largest variety of farm-fresh vegetables & fruits with FREE home delivery options with our VALET plan. Fresh organic veggies & fruits are directly procured from various nearby farms every day",

    git: "https://github.com/saurabhrana7699/frazoo-clone",
    link: "https://shiny-cupcake-6dab31.netlify.app/",
    tech: "HTML | CSS | Javascript ",
  },
  {
    img: urban,
    title: "UrbanCompany",
    description:
      "Urban Company is your one-stop destination for expert local services. Get dozens of trusted professionals near you to take care of all your home",
    git: "https://github.com/Vaishnavi-Borkar/UrbanCompany",
    link: "https://helpinghand-gamma.vercel.app/",
    tech: "HTML | CSS | React | Chakra-Ui",
  },
];
const Project = () => {
  return (
    <div id="project">
      <div id="portfolio">
        <h2 className="pro-title">Project</h2>
        <div className="container portfolio__container">
          {Allproject.map(({ img, title, tech, description, git, link }) => {
            return (
              <article className="portfolio__item">
                <div className="protfolio__item-image">
                  <img src={img} alt={title} className="project-img" />
                </div>
                <h3 className="project-title">{title}</h3>
                <h4 className="project-des">{description}</h4>
                <h4 className="tech">Tech Stack : {tech}</h4>
                <div className="portfolio__item-cta">
                  <a href={git} className="gitbtn" target="_blank">
                    Github
                  </a>
                  <a href={link} className="gitbtn" target="_blank">
                    Deploy Link
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
