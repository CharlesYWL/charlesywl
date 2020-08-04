import ASLogo from "./components/img/AccessSecureLogo.png";
import HMLogo from "./components/img/HalfMileLogo.png";
let resumeData = {
  home: {
    bigTitle: "I am Weili Yin",
    discribtion:
      "I am a Software Developer. I like dabbling in various parts of software development and like to learn edge technology, do some interesting projects or simply play games in my free time.",
    linkedinLink: "https://www.linkedin.com/in/charlesywl/",
    githubLink: "https://github.com/CharlesYWL",
  },
  about: {
    aboutMe:
      "Now I'm seeking a front-end developer or DevOps position in California, but also willing to relocate elsewhere in the US, where exceptional knowledge and skills will be effectively put in agile software development process.",
    imgUrl: "https://charlesywl.github.io/VegiExchange/charlesywl/weili.png",
    contactDetails: {
      email: "xlyin@ucdavis.edu",
      phone: "530-304-9960",
    },
  },
  works: [
    {
      name: "Log Secure",
      imgid: "../img/AccessSecureLogo.png",
      link: "https://logsecure.io",
      info:
        "Middleware and service for access control, logging, anti-spamming, black/white list, ...",
      tech: "React JS CSS",
    },
    {
      name: "Half Mile(Demo)",
      imgid: "../img/HalfMileLogo.png",
      link: "https://halfmile.io",
      info:
        "An All-In-One travel planner including route planning, hotel/flight reservation and auto-generated checklist",
      tech: "React REST'API Firebase",
    },
    {
      name: "Insta Like App",
      imgid: "../img/WyInsta.png",
      link: "http://www.wyinsta.com",
      info:
        "An Insta-like web applicaion that is equipped with majority funciton of Instagram",
      tech: "Django AWS LightSail",
    },
  ],
};

export default resumeData;
