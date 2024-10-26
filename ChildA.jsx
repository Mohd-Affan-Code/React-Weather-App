import React, { useState } from "react";

function ChildA() {
  const [city, setCity] = useState("");
  const [weather, setweather] = useState();
  const [error, seterror] = useState("");
  const API_Key = "c6014a43f64432cb656a40c1292e45f7";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_Key}`;

  let handleonChange = (e) => {
    setCity(e.target.value);
  };

  async function fetchData() {
    try {
      let response = await fetch(url);
      let data = await response.json();
      if (response.ok) {
        setweather(data);
        console.log(data);
        seterror("");
      } else {
        seterror("No data found, please enter a valid city name");
      }
    } catch (error) {}
  }

  return (
    <>
      <div className="card">
        <div className="city">
          <input
            type="text"
            value={city}
            placeholder="Enter a City name"
            onChange={handleonChange}
          />
          <button onClick={() => fetchData()}>Search</button>
        </div>

        {error && <p className="error-message">{error}</p>}
        {weather && weather.weather && (
          <div className="content">
            <div className="weather-img">
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt=""
              />
              <h3 className="desc">{weather.weather[0].description}</h3>
            </div>
            <div className="weather-temp">
              <h2>
                {weather.main.temp} <span>&deg;C</span>
              </h2>
            </div>
            <div className="weather-city">
              <div className="location">
                <h1>
                  {weather.name}, <span>{weather.sys.country}</span>
                </h1>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ChildA;
