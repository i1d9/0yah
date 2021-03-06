import React from 'react';
import './styles/desktop.css';
import './styles/mobile.css';
import { Projects } from "./components/Projects";
import { LaunchBar } from "./components/LaunchBar";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";

const App = () =>{
  return (
    <div>
      <Intro/>
      <Header/>
      <Projects/>
      <LaunchBar/>
    </div>
  );
}

export default App;
