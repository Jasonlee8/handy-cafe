import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Images from './Images.js';
import Maps from './Maps.js'
import './Layout.css'

class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <div>
            <nav>
              <Route exact path="/images" component={Images} />
              <Route exact path="/maps" component={Maps} />

            </nav>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
