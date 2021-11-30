import React from "react";
import Header from "./Components/Header/Header";
import TinderCards from "./Containers/TinderCards/TinderCards";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <TinderCards />
    </div>
  );
}

export default App;
