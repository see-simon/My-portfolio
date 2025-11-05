import React, { useState, useEffect } from "react";
import "./Hero.css";
import profile from "../assets/profile.jpg";
import pic from "../assets/pic.jpeg";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Software Developer | Full Stack | Mobile Developer";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      <img src={pic} alt="Profile" className="profile-pic" />
      <h1>Thobejane Mpelemane Simon</h1>
      <h3>{text}</h3>
      <a href="#contact" className="btn">Contact Me</a>
    </div>
  );
};

export default Hero;
