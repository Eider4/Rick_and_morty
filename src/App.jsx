import { useState } from "react";
import "./App.css";
import Header from "./section/header/Header";
import { ShowCharacters } from "./section/show-characters/ShowCharacters";

function App() {

  return (
    <div className="div_prinsipal">
      <Header />
      <ShowCharacters />
    </div>
  );
}

export default App;
