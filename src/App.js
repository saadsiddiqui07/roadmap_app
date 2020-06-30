import React from "react";
import NavBar from "./components/NavBar";
import LanguageReviewCard from "./components/Card";
import FrameCard from "./components/FrameCard";
import BackFrameCard from "./components/BackFrameCard";
import DataBase from "./components/DataBase";
import MainCard from "./components/MainCard";
import JsBackFrame from './components/JsBackFrame'
import './App.css'

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <MainCard />
      <LanguageReviewCard />
      <FrameCard />
      <BackFrameCard />
      <JsBackFrame />
      <DataBase />
    </div>
  );
}
