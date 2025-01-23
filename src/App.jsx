import "./App.css";
import Navigation from "./components/Navigation/Navigation.jsx";
import Logo from "./components/Logo/Logo.jsx";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm.jsx";
import Rank from "./components/Rank/Rank.jsx";
import ParticlesBg from "particles-bg";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const onInputChange = ({ target: { value } }) => {
    console.log(value);
    setInput(value);
  };

  const onButtonSubmit = () => {
    console.log("onButtonSubmit", input);
  };

  return (
    <div className="App">
      <ParticlesBg type="cobweb" num={200} bg={true} />
      <Navigation />
      <Logo />
      <Rank name={"Janusz"} entries={"#1"} />
      <ImageLinkForm
        onInputChange={onInputChange}
        onButtonSubmit={onButtonSubmit}
        value={input}
      />
    </div>
  );
}

export default App;
