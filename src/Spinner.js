import React from "react";
const Spinner = ({ spinnerText }) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{spinnerText}</div>
    </div>
  );
};
Spinner.defaultProps = {
  spinnerText: "Loading..."
};
export default Spinner;
