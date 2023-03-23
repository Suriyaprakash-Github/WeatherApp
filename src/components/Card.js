import React, { useContext } from "react";
import CityContext from "../store/CityContext";
import "./styles/Card.css";
let data;
const Card = () => {
  const cityCtx = useContext(CityContext);

  if (cityCtx.forecast.length !== 0) {
    console.log(cityCtx.forecast);
    data = cityCtx.forecast[0].hour.map((hr) => {
      return (
        <div key={hr.time_epoch} className="card_header">
          <span>Time: {hr.time}</span>
          <span>Condition: {hr.condition.text}</span>
          <img src={hr.condition.icon} alt="" />
        </div>
      );
    });
  }
  return (
    <>
      <h1>Weather at {cityCtx.city.name}</h1>
      <div className="header_div">{data}</div>
    </>
  );
};

export default Card;
