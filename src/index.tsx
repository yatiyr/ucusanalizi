import React from "react";
import ReactDOM from "react-dom";
import "../resources/scss/index.scss";
import "leaflet/dist/leaflet.css";
import Analiz from './analiz/Analiz';


ReactDOM.render(
  <Analiz />,
  document.getElementById("root")
);