import React, {useState} from 'react';

const Food = ({name, description}) => {

    return (
        <div>
            <h1>{name}</h1>
            <h2>{description}</h2>
        </div>
    )
}

export default Food;