import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);

/* <React.StrictMode>  Add to remove <React.StrictMode> because Material UI's team is not keeping up with the React devs
  <Provider store={store}>
    <App />
  </Provider>
</React.StrictMode> */