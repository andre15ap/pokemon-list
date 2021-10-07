import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import { Home, Detail, NotFound } from '../pages';

export function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/detail/:id" exact component={Detail} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}