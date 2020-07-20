import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home'
import Teams from './modules/team/views/Teams'
import TeamDetails from './modules/team/views/TeamDetails'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/teams" component={Teams} />
        <Route exact path="/teams/:id" component={TeamDetails} />
      </Switch>
    </Router>
  );
}

export default App;
