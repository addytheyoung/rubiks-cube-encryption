import React from "react";
import { Route, Switch } from "react-router-dom";
import Cube from "./components/Cube";
import LandingPage from "./components/Landing";

export default function Routing() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/encrypt" component={Cube} />
      <Route path="/decrypt" component={Cube} />
    </Switch>
  );
}
