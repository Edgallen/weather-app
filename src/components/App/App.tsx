import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import Overview from "../Overview/Overview";
import TodayPanel from "../TodayPanel/TodayPanel";
import "./App.scss";

const App = () => {
  return (
    <body className="body">
      <Overview />
      <main className="main">
        <AppHeader />
        <TodayPanel />
      </main>
    </body>
  );
};

export default App;