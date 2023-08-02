import React from "react";
import "./App.css";

import Header from "./components/Header";
import LeaveForm from "./components/LeaveForm";

const App = () => {
  return (
    <div className="app">
      <Header />
      <LeaveForm />
    </div>
  );
};

export default App;
