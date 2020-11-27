import React, {useState} from 'react';

const Pizza = ({pizzas, name, description, pizza}) => {

    return (
        <div className="pizza">
            <h1>{name}</h1>
            <h2>{description}</h2>
        </div>
    )
}

export default Pizza;