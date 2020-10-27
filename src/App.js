import React from 'react';
import './index.css';
import { Navbar, Sidebar } from './components';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Navbar/>
      </div>
    </Router>
  );
}

export default App;
