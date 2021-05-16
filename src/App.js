import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [message, setMessage] = useState("");
  // const fetchHello = async () => {
  //   const { data } = await axios.get("/.netlify/functions/hello");
  //   setMessage(data.message);
  // };
  const fetchHello = async () => {
    const { data } = await axios.post("/.netlify/functions/hello", {
      name: "muhammet",
    });
    setMessage(data.message);
  };
  useEffect(() => {
    fetchHello();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>{message}</p>
      </header>
    </div>
  );
};

export default App;
