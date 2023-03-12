import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styles from "./Dashboard.module.css";

interface DashboardProps {}

const Dashboard: FunctionComponent<DashboardProps> = () => {
  return (
    <div>
      <div>
        <h1>Dashboard</h1>
      </div>
      <div></div>
    </div>
  );
};

export default Dashboard;
