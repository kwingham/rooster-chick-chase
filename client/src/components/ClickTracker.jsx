import React, { useState, useEffect } from "react";

export default function ClickTracker() {
  const [count, setCount] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);

  // Fetch total clicks from server on component mount
  useEffect(() => {
    fetch("http://localhost:5000/clicks")
      .then((response) => response.json())
      .then((data) => setTotalClicks(data.totalClicks));
  }, []);

  // Handle click event and send to server
  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);

    // Send the click count to the server
    fetch("http://localhost:5000/clicks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newClick: 1 }),
    })
      .then((response) => response.json())
      .then((data) => setTotalClicks(data.totalClicks));
  };

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <p>Local Click Count: {count}</p>
      <p>Total Clicks on Server: {totalClicks}</p>
    </div>
  );
}
