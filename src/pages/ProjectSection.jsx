import { useState } from "react";
import "./Projects.css";

const ProjectSection = () => {
  const [selectedTab, setSelectedTab] = useState("web");
  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <div className="container2">
      <nav className="project-nav">
        <div className="project-header">
          <div className="dash"></div>
          <h1>Projects</h1>
        </div>
        <ul className="project-ul">
          <li
            onClick={() => handleTabChange("web")}
            selected={selectedTab === "web" ? "true" : "false"}
          >
            Web
          </li>
          <li
            onClick={() => handleTabChange("mobile")}
            selected={selectedTab === "mobile" ? "true" : "false"}
          >
            Mobile
          </li>
          <li
            onClick={() => handleTabChange("desktop")}
            selected={selectedTab === "desktop" ? "true" : "false"}
          >
            Desktop
          </li>
        </ul>
      </nav>
      <div className="project-container">
        {
          selectedTab === "web" ? (
            <div className="project-card">
              
            </div>
          ) : selectedTab === "mobile" ? (
            <div className="project-card">
              
            </div>
          ) : (
            <div className="project-card">
              
            </div>
          )
        }
      </div>
    </div>
  );
};

export default ProjectSection;
