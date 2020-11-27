import React, {useState} from 'react';
import {Food} from'../index';

const PizzaList = ({foods}) => {

    return (
        <div>
            <ul>
                {foods.map(food => ( // map permet de parcourir la liste todos
                    <Food 
                        key={food._id}
                        name={food.name}
                        description={food.description}/> // on doit spécifier une id lorsque l'on parcourt la liste, ça aide react au rending de la page
                        // todo c'est un objet todo
                ) )}
            </ul>

        </div>
    )
}

export default PizzaList;