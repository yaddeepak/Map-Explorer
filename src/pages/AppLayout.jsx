import React from "react";
import Sidebar from "../components/Sidebar";
import styles from "./AppLayout.module.css";
import Map from "../components/Map";
import { useAuth } from "../contexts/FakeAuthoContext";
import User from "../components/User";
const AppLayout = () => {
  const { isAuthenticated } = useAuth();
  return (
    <div className={styles.app}>
      <User />
      <Sidebar />
      <Map />
    </div>
  );
};

export default AppLayout;
