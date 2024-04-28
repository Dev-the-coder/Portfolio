import React from "react";
import Card from "./ProjectCard";



export default function Project() {
  const githubProject = [
    {
      id: -1,
      Name: "Netropolis-Hackathon",
      github: "https://github.com/Dev-the-coder/Netropolis-hackathon",
      Live: "https://netropolis-community.vercel.app/",
      img: 'Netropolis.png',
    },
    {
      id: 0,
      Name: "BookEasy",
      github: "https://github.com/Dev-the-coder/BookEasy",
      Live: "https://github.com/Dev-the-coder/BookEasy",
      img: 'BookEasy.png',
      intro: ""
    },
    {
      // id: 3,
      // Name: "E-Shopify",
      // github: 'https://github.com/Dev-the-coder/E-shopify',
      // img: 'E-Shopify.png',
      // Live: "https://gorgeous-kleicha-1cbf44.netlify.app/"
   },
   {
    id: 8,
    Name: "I-News",
    github:'https://github.com/Dev-the-coder/Golang-Bill',
    Live: 'https://github.com/Dev-the-coder/Golang-Bill',
    img: 'I-news.png',
  },
    {
      id: 1,
      Name: "Frontend Music Clone",
      github: "https://github.com/Dev-the-coder/Frontend-music-clone",
      Live: "https://dev-the-coder.github.io/Frontend-music-clone/",
      img: 'Music.png',
      intro: ''
    },
    {
      id: 6,
      Name: 'Pixel Perfect',
      github: 'https://github.com/Dev-the-coder/pixel_perfect',
      Live: 'https://pixelperfectdesigns.netlify.app/',
      img: 'Pixel Perfect.png',
      intro : ''
    },
    {
      id: 2,
      Name: "Golang-Bills",
      Live: "https://visionmap.netlify.app",
      github: 'https://github.com/Dev-the-coder/Golang-Bill',
      img: 'Bills.jpg',
      intro:''
    },
    // {
    //   id: 7,
    //   Name: "Tindog",
    //   github:'https://github.com/ajaykrmnc/tindog',
    //   Live: 'https://ajaykrmnc.github.io/tindog/',
    //   img: 'tindog.png',
    //   intro : ''
    // },
    // {
    //   id: 4,
    //   Name: "Tata Suceess",
    //   github: 'http://github.com/ajaykrmnc/',
    //   Live: 'https://tata-success.netlify.app',
    //   img: 'tata-success.png',
    //   intro : '',
    // },

    
  ];
  return (
    <div className = "about-wrapper">
    <div><h1>Project</h1></div>
    <div className = "ProjectBox">
      {githubProject.map((item) => (
        <div className = "">
          <Card Name={item.Name} github={item.github} Live={item.Live} img={item.img} intro = {item.intro}/>
        </div>
      ))}
    </div>
    </div>
  );
}
