import project1 from "../assets/projects/Movie.png";
import project2 from "../assets/projects/Breach.png";
import project3 from "../assets/projects/Social.png";
import project4 from "../assets/projects/Simon.png";

export const HERO_CONTENT = `I am a passionate software developer with a knack for crafting robust and scalable web applications. With 1 year of hands-on experience, I have honed my skills in front-end technologies like React.js, as well as back-end technologies like Node.js,Java, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 1 year of professional experience, I have worked with a variety of technologies, including React, Node.js, MySQL, Java and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "October 2023 - October 2024",
    role: "Software Developer - Apprentice",
    company: "Fidelity Investments",
    description: `Worked in a team developing and maintaining web applications using JavaScript, React.js, and Node.js. Supporting Java Based application in prod server throughout. Implemented RESTful APIs and integrated with databases. Collaborated with Other team members to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Node.js","Java", "database"],
  },
  {
    year: "May 2023 - July 2023",
    role: "Freelancer - Software Developer",
    company: "Freelancing",
    description: `Designed and developed user interfaces for web applications using React. Worked closely with backend development freelancers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "React.js", "mySQL"],
  },
];

export const PROJECTS = [
  {
    title: "Movie Review System (Web development Project)",
    image: project1,
    description:
      "A movie review website with interactive web elements and a dashboard with unique profile, giving user ratings and write reviews for movies. Developed using MERN Stack .",
    technologies: ["MySQL", "React.js", "Express.js", "Node.js", "Postman API"],
  },
  {
    title: "Breach Checker using React.js and SHA algorithm",
    image: project2,
    description:
      "An improvised secured web development project by getting the user sensitive digest to check their credentials were leaked in Internet/Dark-Net.",
    technologies: ["HTML", "CSS", "React.js", "AXIOS (HTTP Client)", "SHA-algorithm"],
  },
  {
    title: "Sociopedia - Social App (Web Development Project)",
    image: project3,
    description:
      "A well developed social media application highly inspired from Facebook and Twitter, using CRUD API for data access/process.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Postman"],
  },
  {
    title: "Simon Game (JavaScript Project)",
    image: project4,
    description:
      "A Simple frontend webpage for Simon Game with interactive design and easy to play User Interface.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const CONTACT = {
  address: "71/8, Meenakshi Nagar, Thiruvottiyur, Chennai 600019 ",
  phoneNo: "+91 72002 41415 ",
  email: "vishalprasanth0701@gmail.com",
};
