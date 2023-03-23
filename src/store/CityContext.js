import React, { createContext, useState } from "react";

const CityContext = createContext({
  city: "",
  addCity: () => {},
  forecast: [],
  addForecast: () => {},
});
let flag = false;
export const CityProvider = (props) => {
  const [city, setCity] = useState();
  const [forecast, setForecast] = useState([]);

  const addCityHandler = (city) => {
    setCity(city);
  };

  const forecastHandler = (forecast) => {
    if (!flag) {
      setForecast(forecast);
      flag = true;
    }
  };

  const contextValue = {
    city: city,
    addCity: addCityHandler,
    forecast: forecast,
    addForecast: forecastHandler,
  };

  return (
    <CityContext.Provider value={contextValue}>
      {props.children}
    </CityContext.Provider>
  );
};

export default CityContext;
