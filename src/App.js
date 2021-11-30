import React from "react";
import Header from "./Components/Header/Header";
import TinderCards from "./Containers/TinderCards/TinderCards";
import SwipeButtons from "./Components/SwipeButtons/SwipeButtons";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
