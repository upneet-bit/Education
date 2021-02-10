import React,{Component} from 'react';
import './App.css';
import Home from './Components/Home';
import NavPanel from "./Components/Tabs";

function App() {
  return (
    <div className="row">
      <NavPanel/>
    </div>
  );
}

export default App;
