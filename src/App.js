import React, { Component } from 'react';

import './index.css';

import { loadUser } from './redux/auth/auth-actions';
import store from "./redux/store";
import Pizzeria from './Pizzeria';


class App extends Component {

  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {

    return (
      <div className="App">
        <Pizzeria />
      </div>
    );
  }
}

export default App;
