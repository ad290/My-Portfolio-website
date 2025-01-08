import React from "react";
import Jump from "react-reveal/Jump";
import ProfilePic from "../../assets/Profile.jpg"; // Update the path if stored elsewhere
import "./About.css";

const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src={ProfilePic} // Use the imported image
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                I am a passionate undergraduate student at <b>Polaris School of Technology</b>, specializing in <b>Artificial Intelligence</b> and <b>Machine Learning</b>. I have a strong academic background, having scored <b>93.28%</b> in my <b>10th grade</b> and <b>91.16%</b> in my <b>12th grade</b>, reflecting my commitment to excellence. Alongside my core specialization, I am enhancing my technical skill set by exploring <b>Full-Stack Development</b> and honing my proficiency in <b>Data Structures and Algorithms</b>.
                <br />
                <br />
                My technical expertise includes the <b>MERN Stack</b>, <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, and <b>Docker</b>, enabling me to build robust and scalable applications.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
