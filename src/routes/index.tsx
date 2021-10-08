import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import { Home, NotFound } from '../pages';

export function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}