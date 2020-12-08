import React, { useState, useEffect } from 'react';
import {
    FoodCardContainer,
    FoodCardImage,
    FoodCardWrapper,
} from './styles';

import { connect } from 'react-redux';
import { removeFromCart, adjustQty } from '../../../redux/shopping/shopping-actions';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


const style = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 35,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
};



const CartItem = ({ itemData, removeFromCart, adjustQty }) => {

    //console.log([id]);
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    const [input, setInput] = useState(itemData.qty);

    const onChangeHandler = (e) => {
        setInput(e.target.value);
        adjustQty(itemData._id, e.target.value, itemData._size);
    }

    return (
        <>
            {/* <FoodCardContainer>
                <FoodCardImage src={itemData.image} />
                <FoodCardWrapper>
                    <h1>{itemData.name}</h1>
                    <p>{itemData.description}</p>
                    <input
                        min="1"
                        type="number"
                        id="qty"
                        name="qty"
                        value={input}
                        onChange={onChangeHandler}
                    />
                    <p>size : {itemData._size}</p>
                    <p>price/unite : $ {itemData._price} </p>
                    <Button to='#' onMouseEnter={onHover} onMouseLeave={onHover} onClick={() => removeFromCart(itemData._id, itemData._size)} primary="true" dark="true">
                        Remove
                    </Button>
                </FoodCardWrapper>
            </FoodCardContainer> */}

            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={itemData.image}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {itemData.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {itemData.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <TextField
                        type="number"
                        value={input}
                        onChange={onChangeHandler}
                        InputProps={{
                            inputProps: {
                                min: 1
                            }
                        }}
                        label="Quantity"
                    />
                    <TextField
                        disabled
                        label="Size"
                        defaultValue={itemData._size}
                        variant="outlined"
                    />
                    <TextField
                        disabled
                        label="Price/unite"
                        defaultValue={"$ " + itemData._price}
                        variant="outlined"
                    />
                    <Button size="small" style={style} onClick={() => removeFromCart(itemData._id, itemData._size)}>
                        Remove
                        </Button>
                </CardActions>
            </Card>

        </>
    )
}


const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: (id, size) => dispatch(removeFromCart(id, size)),
        adjustQty: (id, value, size) => dispatch(adjustQty(id, value, size))
    }
}

export default connect(null, mapDispatchToProps)(CartItem);