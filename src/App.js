import React from "react";
import "./App.scss";
import Header from "./components/Header/header";
import Section from "./components/Section/section";

import barImage from "./assets/background.jpg";
import formImage from "./assets/background2.jpg";
import mapImage from "./assets/background3.jpg";

function App() {
  return (
    <div className="App">
      <Header />
      <Section backgroundImage={barImage} sectionId="Hero">
        <p>Hero</p>
      </Section>
      <Section backgroundImage={formImage} sectionId="Form">
        <p>Form</p>
      </Section>
      <Section backgroundImage={mapImage} sectionId="Map">
        <p>Map</p>
      </Section>
    </div>
  );
}

export default App;
