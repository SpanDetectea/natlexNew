import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import SettingsPage from './Content/SettingsPage/SettingsPage';
import ViewPage from './Content/ViewPage/ViewPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/settings" element = {<SettingsPage/> }/>
        <Route path="/view" element = {<ViewPage/> }/>
      </Routes>
    </div>
  );
}

export default App;
