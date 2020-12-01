import React, {useState} from 'react';
import {FoodCard} from'../index';

import {FoodGrid} from './styles';


const FoodList = ({foods}) => {

    return (
        <>
            <FoodGrid>
                {foods.map(food => ( // map permet de parcourir la liste todos
                    <FoodCard 
                        key={food._id} // key for the map
                        id={food._id} // id to pass to the child
                        name={food.name}
                        description={food.description}
                        /> // on doit spécifier une id lorsque l'on parcourt la liste, ça aide react au rending de la page
                        // todo c'est un objet todo
                ) )}
            </FoodGrid>
        </>
    )
}

export default FoodList;