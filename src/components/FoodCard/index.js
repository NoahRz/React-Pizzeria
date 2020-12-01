import React, {useState} from 'react';
import {Button} from '../ButtonStyles';
import {
    FoodCardContainer,
    FoodCardImage,
    FoodCardWrapper,
} from './style';

import Pizza1 from '../../images/graziepizza.jpg';




const FoodCard = ({name, description}) => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <>
            <FoodCardContainer>
                <FoodCardImage src= {Pizza1} />
                <FoodCardWrapper>
                    <h1>{name}</h1>
                    <p>{description}</p>
                    <Button to="/" onMouseEnter= {onHover} onMouseLeave={onHover} primary="true" dark="true">
                            Order
                        </Button>
                </FoodCardWrapper>
            </FoodCardContainer>
        </>
    )
}

export default FoodCard;