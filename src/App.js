import React, {useEffect, useState} from 'react';
import axios from 'axios';
import  {BrowserRouter as Router, Switch,  Route, Link, Redirect} from 'react-router-dom';

import './index.css';
import {Home, About, Order, Menus, ReserveTable, Signin, Setting, Signup} from './pages';
import { Navbar, Sidebar} from './components';

/* async function makeGetRequest(url) {

  let res = await axios.get(url);

  let data = res.data;
  
  return data;
}

async function makePostRequest(url) {

  let res = await axios.post(url, {
    name : "a pizza",
    description : "my a pizza"
  });
 // console.log("2",res);
  return res;
}

const initialFormData = Object.freeze({
  name: "good pizza",
  description: "my good pizza",
}); */

function App() {

 /*  const [tests, setTests] = useState([]);

  useEffect(() => {
    //addTest();
    //fetchTests();
  }, [])

  const fetchTests = () => {
    makeGetRequest('http://localhost:3000/api/v1/pizzas')
    .then((data) => setTests(data))
    .catch((err) => console.log(err))
  }

  const addTest = () => {
    makePostRequest('http://localhost:3000/api/v1/pizza', initialFormData.name, initialFormData.description)
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
  }
  */

   const [isOpen, setIsOpen] = useState(false);

    const openHandle = () => {
        setIsOpen(!isOpen);
    } 
 
    return (
    <Router>
      <div className="App">
        {/* <ul>
          {
            tests.map((value, index) => {
              return <li key={index}>{value.name}</li>
            })
          }
        </ul> */}
        <Sidebar isOpen={isOpen} openHandle={openHandle}/>
        <Navbar openHandle={openHandle} />
        <Switch>
          <Route exact path="/" component={Home}/> 
          <Route path="/about" component={About}/> {/* when we go to the path (route) "/about" we are gonna render the component "About"*/}
          <Route path="/order" component={Order}/>
          <Route path="/menus" component={Menus}/>
          <Route path="/reserveTable" component={ReserveTable}/>
          <Route path="/signin" component={Signin}/>
          <Route path="/setting" component={Setting}/>
          <Route path="/signup" component={Signup}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
