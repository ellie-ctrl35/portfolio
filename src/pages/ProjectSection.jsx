import { useState } from "react";
import "./Projects.css";
import DesktopProjects from "../components/Projects/DesktopProjects";
import MobileProjects from "../components/Projects/MobileProjects";
import WebProjects from "../components/Projects/WebProjects";

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
            <WebProjects />
          ) : selectedTab === "mobile" ? (
            <MobileProjects/>
          ) : (
            <DesktopProjects/>
          )
        }
      </div>
    </div>
  );
};

export default ProjectSection;
