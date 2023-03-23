import React, { useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CityContext from "../store/CityContext";

export const SearchForm = () => {
  const cityEntered = useRef();
  const cityCtx = useContext(CityContext);

  const redirect = useNavigate();
  const [receivedCities, setReceivedCities] = useState([]);
  const dynamicHandler = () => {
    if (cityEntered.current.value !== undefined) {
      setTimeout(() => {
        axios
          .get(
            ` http://api.weatherapi.com/v1/search.json?key=42e1fcddf9104958a63160856232203&q=${cityEntered.current.value}`
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
      <h1>SearchForm</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="city"> Enter City Name</label>
        <input
          type="text"
          id="city"
          ref={cityEntered}
          onChange={dynamicHandler}
        />
      </form>
      {receivedCities.map((city) => {
        return (
          <button key={city.id} onClick={clickHandler.bind(null, city)}>
            country : {city.country}, id : {city.id} lat : {city.lat} lon :
            {city.lon} name :{city.name}
          </button>
        );
      })}
    </>
  );
};
export default SearchForm;
