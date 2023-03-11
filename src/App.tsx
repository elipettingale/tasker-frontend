import styles from "./App.module.css";
import Badge from "./components/Badge/Badge";
import Kanban from "./components/Kanban/Kanban";

function App() {
  return (
    <div>
      <div>
        <h1>Hello, Elliot &#128075;</h1>
        <p>
          You have <Badge color="#e15abe">15 tasks</Badge> to complete!
        </p>
      </div>
      <Kanban />
    </div>
  );
}

export default App;
