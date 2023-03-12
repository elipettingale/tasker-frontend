import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Projects from "./pages/Projects/Projects";
import Project from "./pages/Project/Project";
import NotFound from "./pages/NotFound/NotFound";
import Auth from "./layouts/Auth/Auth";
import Register from "./pages/Register/Register";
import Guest from "./layouts/Guest/Guest";
import Login from "./pages/Login/Login";

function App() {
  return (
    <Routes>
      <Route element={<Auth />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/projects">
          <Route index element={<Projects />} />
          <Route path=":id" element={<Project />} />
        </Route>
      </Route>

      <Route element={<Guest />}>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
