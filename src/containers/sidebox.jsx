import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import createCarForm from "../components/createcar";

class SideBox extends Component {
  render() {
    return (
      <Router>
        <div className="sidebox">
          <img src={'http://placehold.it/800x200&text=slide1'} alt="boohoo" className="img-sidebox" />
          Our Garage is the Best Kept Secret in Town
          <Link to="/CreateCar">
            Create a New Ca
          </Link>

          <Switch>
            <Route path={"/CreateCar"} component={createCarForm} />
          </Switch>
        </div>

      </Router>


    );
  }
};


export default SideBox;

