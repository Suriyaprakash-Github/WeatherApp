import React, { useContext } from "react";
import CityContext from "../store/CityContext";
import axios from "axios";

const CityDetail = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const cityCtx = useContext(CityContext);
  if (cityCtx.city) {
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityCtx.city.lat},${cityCtx.city.lon}&days=2`
      )
      .then((res) => {
        const forecast1 = res.data.forecast.forecastday;
        cityCtx.addForecast(forecast1);
      });
  }

  return <></>;
};

export default CityDetail;
