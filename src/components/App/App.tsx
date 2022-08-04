import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import Overview from "../Overview/Overview";
import TodayPanel from "../TodayPanel/TodayPanel";
import WeeklyTemp from "../WeeklyTemp/WeeklyTemp";
import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.body}>
      <Overview />
      <main className={styles.main}>
        <AppHeader />
        <TodayPanel />
        <WeeklyTemp />
      </main>
    </div>
  );
};

export default App;