import { FunctionComponent } from "react";
import { Link, useNavigate } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import styles from "./Projects.module.css";

interface ProjectsProps {}

const Projects: FunctionComponent<ProjectsProps> = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: "1",
      name: "Lorem Ipsum",
    },
  ];

  return (
    <div>
      <div>
        <h1>Projects</h1>
        <Breadcrumbs>
          <Link to="/projects">Projects</Link>
        </Breadcrumbs>
      </div>
      <div className={styles.Projects}>
        {projects.map((project) => (
          <div
            key={project.id}
            className={styles.Project}
            onClick={() => navigate(`/projects/${project.id}`)}
          >
            <h2>{project.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
