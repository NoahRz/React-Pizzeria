import React, {useState} from 'react';
import {Pizza} from'../index';

const PizzaList = ({pizzas}) => {

    return (
        <div>
            <ul className="todo-list">
                {pizzas.map(pizza => ( // map permet de parcourir la liste todos
                    <Pizza 
                        pizzas={pizzas}
                        key={pizza._id}
                        name={pizza.name}
                        description={pizza.description}
                        pizza={pizza}/> // on doit spécifier une id lorsque l'on parcourt la liste, ça aide react au rending de la page
                        // todo c'est un objet todo
                ) )}
            </ul>

        </div>
    )
}

export default PizzaList;