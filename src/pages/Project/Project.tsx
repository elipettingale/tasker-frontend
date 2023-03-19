import { FunctionComponent, useEffect, useState } from "react";
import styles from "./Project.module.css";
import Kanban from "../../components/Kanban/Kanban";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { Link, useParams } from "react-router-dom";
import Toolbar from "../../components/Toolbar/Toolbar";
import Button from "../../components/Button/Button";
import Icon from "../../components/Icon/Icon";
import api from "../../includes/api";
import { ListTasksType, ProjectType } from "../../includes/types";

interface ProjectProps {}

const Project: FunctionComponent<ProjectProps> = () => {
  const { id } = useParams();
  const [project, setProject] = useState<ProjectType | null>(null);

  useEffect(() => {
    api.get(`/api/projects/${id}`).then(({ data }) => {
      setProject(data);
    });
  }, []);

  if (!project) {
    return null;
  }

  const setListTasks = (listTasks: ListTasksType) => {
    let newData = { ...project, listTasks: listTasks };

    setProject(newData);

    api.put(`/api/projects/${id}`, newData).catch((response) => {
      // todo: handle error
    });
  };

  return (
    <div>
      <div>
        <h1>{project.name}</h1>
        <Breadcrumbs>
          <Link to="/projects">Projects</Link>
          <Link to={`/projects/${id}`}>{project.name}</Link>
        </Breadcrumbs>
      </div>
      <div>
        <Toolbar>
          <Button>
            New Task <Icon name="plus" />
          </Button>
          <Button>
            Edit Project <Icon name="edit" />
          </Button>
        </Toolbar>
        <Kanban
          lists={project.lists}
          listTasks={project.listTasks}
          setListTasks={setListTasks}
        />
      </div>
    </div>
  );
};

export default Project;
