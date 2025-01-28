import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Typewriter from "typewriter-effect";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Fade from "react-reveal/Fade";
import "./home.css";

const Home = () => {
  const [theme, setTheme] = useTheme();

  // Handle theme toggle
  const handleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>

        <div className="container home-content">
          <Fade right>
            <h2>Hi 👋 I'm Aditya Pawar</h2>
            <h1>
              <Typewriter
                options={{
                  strings: ["FullStack Developer!", "MERN Stack Developer!"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>

          <Fade bottom>
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=8217660375"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hire Me
              </a>

              <a
                className="btn btn-cv"
                href="https://drive.google.com/file/d/1XHBvNtueyJAHYJkyBwDcr3iZsX4jrLfL/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                My Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
