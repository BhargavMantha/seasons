import "./SeasonDisplay.css";
import React from "react";
const getMonth = () => {
  return new Date().getMonth() + 1;
};
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};
const SeasonDisplay = props => {
  const { lat } = props;
  const month = getMonth();
  const season = getSeason(lat, month);
  const seasonObject =
    season === "summer"
      ? { seasonText: "Lets Head the Beach", icon: "sun", color: "yellow" }
      : { seasonText: "Burr, Its chilli", icon: "snowflake", color: "blue" };

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left  massive ${seasonObject.icon} icon`} />
      <h1>{seasonObject.seasonText}</h1>
      <i className={`icon-right massive ${seasonObject.icon} icon`} />
    </div>
  );
};

export default SeasonDisplay;
