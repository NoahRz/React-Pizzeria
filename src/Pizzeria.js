import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './index.css';
import { Home, AboutPage, myOrder, Menus, ReserveTable, Signin, Signup, CartPage, Profile } from './pages';
import { Navbar, Sidebar, Footer } from './components';

const userInitialForm = Object.freeze({
  username: "",
  logged: false
});

function Pizzeria() {

  const [isOpen, setIsOpen] = useState(false);

  const openHandle = () => {
    setIsOpen(!isOpen);
  }

  const [user, setUser] = useState(userInitialForm);


  return (
    <Router>
      <div className="App">
        <Sidebar isOpen={isOpen} openHandle={openHandle} />
        <Navbar openHandle={openHandle} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={AboutPage} /> {/* when we go to the path (route) "/about" we are gonna render the component "About"*/}
          <Route path="/myorder" component={myOrder} />
          <Route path="/menus">
            <Menus user={user} setUser={setUser} />
          </Route>
          <Route path="/reserveTable" component={ReserveTable} />
          <Route path="/signin">
            <Signin user={user} setUser={setUser} />
          </Route>
          <Route path="/cart" component={CartPage} />
          <Route path="/profile" component={Profile} />
          <Route path="/signup">
            <Signup user={user} setUser={setUser} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default Pizzeria;