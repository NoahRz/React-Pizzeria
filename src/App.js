import React, {useState} from 'react';
import './index.css';
import  {BrowserRouter as Router, Switch,  Route, Link, Redirect} from 'react-router-dom';
import Home from './pages';
import { Navbar, Sidebar} from './components';


function App() {

  const [isOpen, setIsOpen] = useState(false);

    const openHandle = () => {
        setIsOpen(!isOpen);
    }

  return (
    <Router>
      <div className="App">
        <Sidebar isOpen={isOpen} openHandle={openHandle}/>
        <Navbar openHandle={openHandle} />
        <Switch>
          <Route exact path="/" component={Home}/> 
          <Route path="/about"> {/* when we go to the path (route) "/about" we are gonna render the component "About"*/}
            <div/>
          </Route>
          <Route path="/shop">
            <div />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
