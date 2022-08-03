import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import Overview from "../Overview/Overview";
import TodayPanel from "../TodayPanel/TodayPanel";
import styles from "./App.module.scss";

const App = () => {
  return (
    <body className={styles.body}>
      <Overview />
      <main className={styles.main}>
        <AppHeader />
        <TodayPanel />
      </main>
    </body>
  );
};

export default App;