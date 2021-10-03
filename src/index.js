import React from "react";
import ReactDOM from "react-dom";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: "" };
    this.getLatitudeAndLongitude();
  }
  getLatitudeAndLongitude() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }
  render() {
    return (
      <div>
        Latitude:
        {this.state.errorMessage !== ""
          ? this.state.errorMessage
          : this.state.lat}
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));