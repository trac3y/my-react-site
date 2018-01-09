import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import './../styles/App.css';
import Home from './Home.js';
import Work from './Work.js';
// TODO: add routing for work subpages
class Main extends Component {

  render() {
    return(
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/work' component={Work} />
      </Switch>
    );
  }
}

export default Main;
