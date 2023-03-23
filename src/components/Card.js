import React, { useContext } from "react";
import CityContext from "../store/CityContext";
import "./styles/Card.css";
let data;
const Card = () => {
  const cityCtx = useContext(CityContext);

  if (cityCtx.forecast.length !== 0) {
    console.log(cityCtx.forecast);
    let c = 0;

    data = cityCtx.forecast[0].hour.map((hr) => {
      return (
        // <div className={`${"a" + c++}`}>
        <div key={hr.time_epoch} className={`card_header ${"a" + c++}`}>
          <div className="month">
            <p>
              {new Date(hr.time).toLocaleString("default", { month: "long" })},
              {new Date(hr.time).toLocaleString("default", {
                day: "numeric",
              })}
            </p>
          </div>
          <div>
            <p>
              {new Date(hr.time).toLocaleString("default", {
                weekday: "long",
              })}
              ,
              {new Date(hr.time).toLocaleString("default", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
          <div>Condition: {hr.condition.text}</div>
          <div>
            <img src={hr.condition.icon} alt="" />
          </div>
        </div>
        // </div>
      );
    });
  }
  return (
    <>
      <div className="card_container">
        {cityCtx.city === undefined ? (
          <h1>Please Search for a Place to Show Details</h1>
        ) : (
          <h1>Weather at {cityCtx.city.name}</h1>
        )}
        <div className="card_div">{data}</div>
      </div>
    </>
  );
};

export default Card;

// {console.log(
//   new Date(hr.time).toLocaleString("default", { month: "long" })
// )}

// {console.log(
//   new Date(hr.time).toLocaleString("default", {
//     weekday: "long",
//   })
// )}

// {console.log(
//   new Date(hr.time).toLocaleString("default", {
//     day: "numeric",
//   })
// )}

// {console.log(
//   new Date(hr.time).toLocaleString("default", {
//     hour: "2-digit",
//     minute: "2-digit",
//   })
// )}
