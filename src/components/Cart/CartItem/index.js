import React, { useState } from 'react';

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

    const [input, setInput] = useState(itemData.qty);

    const onChangeHandler = (e) => {
        setInput(e.target.value);
        adjustQty(itemData._id, e.target.value, itemData._size);
    }

    return (
        <>
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="300"
                        src={`/images/${itemData.name}.jpg`}
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
                        label="Price/unit"
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

export default CartItem;