import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";

const Projects = () => {
  return (
    <>
      <div className="container project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Top Recent Projects
        </h2>
        <hr />
        <p className="pb-3 text-center">
          I have developed full-stack applications, including a Chat App, Notes App, and Learning Management System (LMS), showcasing expertise in building scalable, secure, and user-friendly solutions.
          <br />
          <strong>Chat App:</strong> Real-time messaging with user authentication and end-to-end encryption.
          <br />
          <strong>Notes App:</strong> Productivity tool for creating, organizing, and searching notes.
          <br />
          <strong>LMS:</strong> Platform for course management, student engagement, and progress tracking with role-based access.
        </p>
        {/* Card Design */}
        <div className="row" id="ads">
          <Spin>
            {/* Chat App Card */}
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img src={require("./ChatApp.png")} alt="Chat Application" />
                </div>
                <div className="card-image-overlay m-auto mt-3">
                  <span className="card-detail-badge">Node.js</span>
                  <span className="card-detail-badge">Express.js</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">MongoDB</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">Chat Application</h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/ad290/My-Chat-App"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>

            {/* LMS Card */}
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img
                    src={require("./LearningApp.png")}
                    alt="Learning Management System"
                  />
                </div>
                <div className="card-image-overlay m-auto mt-3">
                  <span className="card-detail-badge">Node.js</span>
                  <span className="card-detail-badge">Express.js</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">MongoDB</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">
                      Learning Management System
                    </h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/ad290/Leraning-Management-System-"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>

            {/* Notes App Card */}
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img src={require("./NotesApp.png")} alt="Notes Application" />
                </div>
                <div className="card-image-overlay m-auto mt-3">
                  <span className="card-detail-badge">Node.js</span>
                  <span className="card-detail-badge">Express.js</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">MongoDB</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Notes Application</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/ad290/Note_taking_app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;
