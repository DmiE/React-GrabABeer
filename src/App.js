import React from 'react';
import './App.scss';
import Header from './components/Header/header';
import Section from './components/Section/section';
import SimpleForm from './components/SearchForms/SimpleForm/simpleForm';
import AdvancedForm from './components/SearchForms/AdvForm/advancedForm';

import barImage from './assets/background.jpg';
import formImage from './assets/background2.jpg';
import mapImage from './assets/background3.jpg';

function App() {
  return (
    <div className="App">
      <Header />
      <Section backgroundImage={barImage} sectionId="Hero">
        <p>Hero</p>
        <SimpleForm />
      </Section>
      <Section backgroundImage={formImage} sectionId="Search">
        <p>Form</p>
        <AdvancedForm />
      </Section>
      <Section backgroundImage={mapImage} sectionId="Map">
        <p>Map</p>
      </Section>
    </div>
  );
}

export default App;
