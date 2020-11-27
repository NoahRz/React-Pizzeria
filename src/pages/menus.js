// the menus page

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
    PageContainer,
    PizzaList
} from '../components';

 async function makeGetRequest(url) {

  let res = await axios.get(url);

  let data = res.data;
  
  return data;
}

const Menus = () => {
    const [pizzas, setPizzas] = useState([]);

    const [desserts, setDesserts] = useState([]);

    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        fetchTests();
      }, [])

    const fetchTests = () => {
         makeGetRequest('http://localhost:3000/api/v1/pizzas')
        .then((data) => setPizzas(data))
        .catch((err) => console.log(err));

        makeGetRequest('http://localhost:3000/api/v1/desserts')
        .then((data) => setDesserts(data))
        .catch((err) => console.log(err));

        makeGetRequest('http://localhost:3000/api/v1/drinks')
        .then((data) => setDrinks(data))
        .catch((err) => console.log(err));

      }

    return (
        <div>
            <PizzaList pizzas={pizzas}/>
            <PageContainer/>
        </div>
    )
}

export default Menus;