
import React from 'react';
import './App.css';
import PackageName from '../PackageName/PackageName';
import MainWeather from '../BlockTemperature/MainWeather';
import City from '../City/City';
import { getWeatherApi } from '../FetchApi';

function App() {

    // getWeatherApi();

    return (
    <div className="App">
      <PackageName />
        <div className="line"></div>
        <MainWeather/>
        <div className="line"></div>
                <p className="wind"> </p>
      <City/>
    </div>
  );
  }

export default App;
