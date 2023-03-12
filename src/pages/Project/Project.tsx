import { FunctionComponent } from "react";
import styles from "./Project.module.css";
import Kanban from "../../components/Kanban/Kanban";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { Link, useParams } from "react-router-dom";

interface ProjectProps {}

const Project: FunctionComponent<ProjectProps> = () => {
  const { id } = useParams();

  return (
    <div>
      <div>
        <h1>Lorem Ipsum</h1>
        <Breadcrumbs>
          <Link to="/projects">Projects</Link>
          <Link to={`/projects/${id}`}>Lorem Ipsum</Link>
        </Breadcrumbs>
      </div>
      <div>
        <Kanban />
      </div>
    </div>
  );
};

export default Project;
