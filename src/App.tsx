import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import SettingsPage from './Content/SettingsPage/SettingsPage';
import ViewPage from './Content/ViewPage/ViewPage';
import { useTypedDispatch } from './Hooks/useTypedDispatch';
import { setForecastDays } from './store/contentReducer';
import { weatherApi } from './api/api';

function App() {
  const dispatch = useTypedDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await weatherApi.getWeatherData();
      dispatch(setForecastDays(response));
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/settings" element = {<SettingsPage /> }/>
        <Route path="/view" element = {<ViewPage/> }/>
      </Routes>
    </div>
  );
}

export default App;
