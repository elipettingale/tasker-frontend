import styles from "./App.module.css";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";
import Icon from "./components/Icon/Icon";
import Kanban from "./components/Kanban/Kanban";

function App() {
  return (
    <div>
      <div>
        <h1>Lorem Ipsum</h1>
        <div className={styles.Breadcrumbs}>
          <Breadcrumb>Projects</Breadcrumb>
          <Icon name="chevron-right" />
          <Breadcrumb>Lorem Ipsum</Breadcrumb>
        </div>
      </div>
      <Kanban />
    </div>
  );
}

export default App;
