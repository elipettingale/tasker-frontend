import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import styles from "./Projects.module.css";

interface ProjectsProps {}

const Projects: FunctionComponent<ProjectsProps> = () => {
  return (
    <div>
      <div>
        <h1>Projects</h1>
        <Breadcrumbs>
          <Link to="/projects">Projects</Link>
        </Breadcrumbs>
      </div>
      <div></div>
    </div>
  );
};

export default Projects;
