import { useState } from "react";
import { Hero } from "./components/Hero";
import { ToggleButton } from "./components/ToggleButton";
import "./styles.css";

export default function App() {
  const [btnState, setBtnState] = useState(false);
  const toggleBtnClickHandler = (newState) => {
    setBtnState(newState);
  };
  return (
    <div className="App">
      <h1 className="dark">Toggle light-dark</h1>
      <ToggleButton state={btnState} handler={toggleBtnClickHandler} />
      <Hero buttonState={btnState} />
    </div>
  );
}
