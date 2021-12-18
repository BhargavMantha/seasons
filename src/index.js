import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import SeasonDisplay from "./season-display.component";
import Spinner from "./Spinner";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMessage: "" };
  }
  getLatitudeAndLongitude() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }
  componentDidMount() {
    this.getLatitudeAndLongitude();
  }
  handleErrorAndResult() {
    return this.state.errorMessage && !this.state.lat ? (
      this.state.errorMessage
    ) : !this.state.errorMessage && this.state.lat ? (
      <SeasonDisplay lat={this.state.lat} />
    ) : (
      <Spinner spinnerText="Please allow Permission to location" />
    );
  }
  render() {
    return <div>{this.handleErrorAndResult()}</div>;
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
