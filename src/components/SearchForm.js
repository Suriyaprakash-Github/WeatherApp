import React, { useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CityContext from "../store/CityContext";
import "./styles/Search.css";

export const SearchForm = () => {
  const cityEntered = useRef();
  const API_KEY = process.env.REACT_APP_API_KEY;
  const cityCtx = useContext(CityContext);

  const redirect = useNavigate();
  const [receivedCities, setReceivedCities] = useState([]);
  const dynamicHandler = () => {
    if (cityEntered.current.value !== undefined) {
      setTimeout(() => {
        axios
          .get(
            ` http://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${cityEntered.current.value}`
          )
          .then((res) => {
            setReceivedCities(res.data);
          });
      }, 500);
    }
  };

  const clickHandler = (city) => {
    cityCtx.addCity(city);
    redirect("./detail");
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="search_container">
        <h1>SearchForm</h1>
        <div>
          <form onSubmit={submitHandler}>
            <label htmlFor="city"> Enter City Name: </label>
            <input
              type="text"
              id="city"
              ref={cityEntered}
              onChange={dynamicHandler}
            />
          </form>
        </div>
        {receivedCities.map((city) => {
          return (
            <button key={city.id} onClick={clickHandler.bind(null, city)}>
              {city.name}, {city.country}
            </button>
          );
        })}
      </div>
    </>
  );
};
export default SearchForm;
