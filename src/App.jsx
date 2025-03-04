import { useState } from "react";
import phrases from "./data/phrases.json";
import "./App.css";


import bg1 from "./assets/bg1.jpg";
import bg2 from "./assets/bg2.jpg";
import bg3 from "./assets/bg3.jpg";
import bg4 from "./assets/bg4.jpg";

const backgrounds = [bg1, bg2, bg3, bg4];

function App() {
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);
  const [background, setBackground] = useState(backgrounds[0]);

  const changePhrase = () => {
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    setCurrentPhrase(randomPhrase);
    setBackground(randomBg);
  };

  return (
    <div className="app" style={{ backgroundImage: `url(${background})` }}>
      <h1>Galletas de la Fortuna</h1>
      <div className="phrase-box">
        <p>{currentPhrase.phrase}</p>
        <small>- {currentPhrase.author}</small>
      </div>
      <button onClick={changePhrase}>Ver otro</button>
    </div>
  );
}

export default App;
