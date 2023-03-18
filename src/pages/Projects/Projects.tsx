import { FunctionComponent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Button from "../../components/Button/Button";
import Icon from "../../components/Icon/Icon";
import NewProjectForm from "../../components/NewProjectForm/NewProjectForm";
import Toolbar from "../../components/Toolbar/Toolbar";
import styles from "./Projects.module.css";
import api from "../../includes/api";

interface ProjectsProps {}

const Projects: FunctionComponent<ProjectsProps> = () => {
  const navigate = useNavigate();
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [projects, setProjects] = useState<{}[]>([]);

  useEffect(() => {
    api.get("/api/projects").then(({ data }) => {
      setProjects(data);
    });
  }, []);

  const handleOnSaved = (data: {}) => {
    setFormIsOpen(false);

    setProjects((previous) => {
      return [...previous, data];
    });
  };

  return (
    <div>
      <div>
        <h1>Projects</h1>
        <Breadcrumbs>
          <Link to="/projects">Projects</Link>
        </Breadcrumbs>
      </div>
      <div>
        <Toolbar>
          <Button onClick={() => setFormIsOpen(true)}>
            New Project <Icon name="plus" />
          </Button>
        </Toolbar>
        <div className={styles.Projects}>
          {projects.map((project) => (
            <div
              key={project._id}
              className={styles.Project}
              onClick={() => navigate(`/projects/${project._id}`)}
            >
              <h2>{project.name}</h2>
            </div>
          ))}
        </div>
        <NewProjectForm
          isOpen={formIsOpen}
          setIsOpen={setFormIsOpen}
          onSaved={handleOnSaved}
        />
      </div>
    </div>
  );
};

export default Projects;
