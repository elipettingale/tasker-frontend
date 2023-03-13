import { FunctionComponent, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import api from "../../includes/api";
import { AuthContext } from "../../layouts/Auth/Auth";
import styles from "./Dashboard.module.css";

interface DashboardProps {}

const Dashboard: FunctionComponent<DashboardProps> = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const logout = async () => {
    await api.delete("/api/session");
    navigate("/login");
  };

  return (
    <div>
      <div>
        <h1>Dashboard</h1>
      </div>

      <div>
        <p>
          {currentUser ? `Currently logged in as ${currentUser.name}` : null}
        </p>
        <p>
          View your <Link to="/projects">projects</Link>.
        </p>
      </div>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
};

export default Dashboard;
