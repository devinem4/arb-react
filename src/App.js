import "./App.css";
import BetInputs from "./components/BetInputs";
import ArbOutputs from "./components/ArbOutputs";
import { useState } from "react";

function App() {
  const [fav, setFav] = useState("");
  const [dog, setDog] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    setFav(e.target["favorite"].value);
    setDog(e.target["dog"].value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Can we Arb?</h1>
        <BetInputs onSubmit={(e) => handleSubmit(e)} />
        {fav && dog && <ArbOutputs fav={fav} dog={dog} />}
      </header>
    </div>
  );
}

export default App;
