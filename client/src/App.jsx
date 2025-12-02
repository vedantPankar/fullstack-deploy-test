import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`http://server:4000/api/message`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error fetching message", error));
  }, []);

  return (
    <>
      <h1>Welcome to chai aur code frontend</h1>
      <h2>Data: {message}</h2>
    </>
  );
}

export default App;
