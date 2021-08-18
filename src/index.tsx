import { StrictMode } from "react";
import { render } from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { pageview, initialize, ga } from "react-ga";

initialize("UA-197711520-1");

render(
  <StrictMode>
    <App pageview={pageview} />
  </StrictMode>,
  document.getElementById("root")
);

function sendToAnalytics({ id, name, value }) {
  ga("send", "event", {
    eventCategory: "Web Vitals",
    eventAction: name,
    eventValue: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
    eventLabel: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate
  });
}

reportWebVitals(sendToAnalytics);
 