import { FunctionComponent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import api from "../../includes/api";
import styles from "./Dashboard.module.css";

interface DashboardProps {}

const Dashboard: FunctionComponent<DashboardProps> = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const loadCurrentUser = async () => {
    const { data } = await api.get("/api/user");
    setUser(data);
  };

  const logout = async () => {
    const { data } = await api.delete("/api/session");
    navigate("/login");
  };

  useEffect(() => {
    loadCurrentUser();
  }, []);

  return (
    <div>
      <div>
        <h1>Dashboard</h1>
      </div>
      <div>{user ? `Currently logged in as ${user.name}` : null}</div>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
};

export default Dashboard;
