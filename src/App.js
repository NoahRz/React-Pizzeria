import React, {useEffect, useState} from 'react';
import './index.css';
import  {BrowserRouter as Router, Switch,  Route, Link, Redirect} from 'react-router-dom';
import Home from './pages';
import { Navbar, Sidebar} from './components';
import axios from 'axios';
import About from './components/About';

async function makeGetRequest(url) {

  let res = await axios.get(url);

  let data = res.data;
  
  return data;
}

async function makePostRequest(url) {

  let res = await axios.post(url, {
    name : "fourth pizza",
    description : "my fourth pizza"
  });
  console.log("2",res);
  return res;
}

function App() {

  const [tests, setTests] = useState([]);

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
    makePostRequest('http://localhost:3000/api/v1/pizza')
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
  }

  const [isOpen, setIsOpen] = useState(false);

    const openHandle = () => {
        setIsOpen(!isOpen);
    }

  console.log(tests);
  return (
    <Router>
      <div className="App">
        {/*<ul>
          {
            tests.map((value, index) => {
              return <li key={index}>{value.name}</li>
            })
          }
        </ul>*/}
        <Sidebar isOpen={isOpen} openHandle={openHandle}/>
        <Navbar openHandle={openHandle} />
        <Switch>
          <Route exact path="/" component={Home}/> 
          <Route path="/about"> {/* when we go to the path (route) "/about" we are gonna render the component "About"*/}
            <About/>
          </Route>
          <Route path="/order">
            <h1>Something2</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
