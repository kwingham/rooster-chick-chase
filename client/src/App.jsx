import React from "react";
import ClickTracker from "./components/ClickTracker";
import "./styles/App.css";
import sadRooster from "./assets/sad-rooster.webp";

function App() {
  return (
    <div className="app-container">
      <h1>Rooster Chick Chase</h1>
      <ClickTracker />
      <img src={sadRooster} alt="Sad Rooster" className="sad-rooster" />{" "}
    </div>
  );
}

export default App;
