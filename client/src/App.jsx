import React, { useEffect, useState } from "react";
import ClickTracker from "./components/ClickTracker";
import "./styles/App.css";
import sadRooster from "./assets/sad-rooster.webp";
import egg1 from "./assets/egg-1.webp";
import chick1 from "./assets/chick-1.webp";
import chick2 from "./assets/chick-2.webp";
import chicken1 from "./assets/chicken-1.webp";
import firstRoosterSound from "./assets/first-rooster.mp3";
import babyChickSound from "./assets/baby-chick.mp3";
import chickenSound from "./assets/chickens.mp3";
import "./styles/background.css"; // Background CSS

function App() {
  const [clickCount, setClickCount] = useState(0);
  const [showStartButton, setShowStartButton] = useState(true);
  const [showEgg, setShowEgg] = useState(false);
  const [showChick1, setShowChick1] = useState(false);
  const [showChick2, setShowChick2] = useState(false);
  const [showChicken1, setShowChicken1] = useState(false);

  // Function to handle start button click
  const handleStartClick = () => {
    setShowStartButton(false); // Hide start button
    playRoosterSound(); // Play first rooster sound
  };

  const playRoosterSound = () => {
    const audio = new Audio(firstRoosterSound);
    audio.play();
    audio.onended = () => {
      setShowEgg(true);
    };
  };

  const handleEggClick = () => {
    setClickCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    // Handle egg click rotation and transition to chick after 5 clicks
    if (clickCount === 5) {
      setShowEgg(false); // Hide egg
      setShowChick1(true); // Show chick-1
      playBabyChickSound(); // Play chick sound
    }
  }, [clickCount]);

  const playBabyChickSound = () => {
    const audio = new Audio(babyChickSound);
    audio.play();
    audio.onended = () => {
      setShowChick1(false); // Hide chick-1
      setShowChick2(true); // Show chick-2
      setShowChicken1(true); // Show first chicken
      playChickenSound(); // Play chicken sound
    };
  };

  const playChickenSound = () => {
    const audio = new Audio(chickenSound);
    audio.play();
  };

  return (
    <div className="app-container">
      <div className="stars"></div>
      <h1>Rooster Chick Chase</h1>
      <ClickTracker />

      {/* Start Button */}
      {showStartButton && (
        <button className="start-button" onClick={handleStartClick}>
          Click me to begin
        </button>
      )}
      <img src={sadRooster} alt="Sad Rooster" className="sad-rooster" />
      {/* Show egg when rooster sound finishes */}
      {showEgg && (
        <img src={egg1} alt="Egg" onClick={handleEggClick} className="egg" />
      )}
      {showChick1 && <img src={chick1} alt="Chick 1" className="chick" />}
      {showChick2 && <img src={chick2} alt="Chick 2" className="chick" />}
      {showChicken1 && (
        <img src={chicken1} alt="Chicken 1" className="chicken" />
      )}
    </div>
  );
}

export default App;
