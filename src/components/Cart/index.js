import React, { useState, useEffect } from 'react';
import PizzaItem from './pizzaCart';
import DessertItem from './dessertCart';
import DrinkItem from './drinkCart';

import { Grid } from './styles';

import { connect } from 'react-redux';

import axios from 'axios';

import { removeAllItems as removeAllDrinks } from '../../redux/drinkShop/actions';
import { removeAllItems as removeAllDesserts } from '../../redux/dessertShop/actions';
import { removeAllItems as removeAllPizzas } from '../../redux/pizzaShop/actions';

import { v4 as uuidv4 } from 'uuid';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';

import 'date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const style = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 35,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
};

async function makePostOrderRequest(url, newPizzas, newDesserts, newDrinks, newOrderDate, newTakeaway) {

    let res = await axios.post(url, {
        pizzas: newPizzas,
        desserts: newDesserts,
        drinks: newDrinks,
        orderDate: newOrderDate,
        takeaway: newTakeaway
    });
    return res;
}

async function makeUpdateUserRequest(url, orderID) {

    let res = await axios.put(url, {
        order: orderID
    });
    return res;
}

const Cart = ({ pizzaCart, dessertCart, drinkCart, auth, removeAllPizzas, removeAllDesserts, removeAllDrinks }) => {

    const { isAuthenticated } = auth;

    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let items = 0;
        let price = 0;

        pizzaCart.forEach(item => {
            items += item.qty;
            price += item.qty * item._price;
        })

        dessertCart.forEach(item => {
            items += item.qty;
            price += item.qty * item._price;
        })

        drinkCart.forEach(item => {
            items += item.qty;
            price += item.qty * item._price;
        })

        setTotalItems(items);
        setTotalPrice(price);

    }, [pizzaCart, dessertCart, drinkCart, totalItems, totalPrice, setTotalItems, setTotalPrice])

    const transformToList = (cart) => {
        let res = [];
        cart.forEach(item => {
            res.push({ item: item._id, size: item._size, quantity: item.qty })
        })
        return res;
    }

    const handleSubmit = () => {
        // ... submit to API
        if (isAuthenticated) {
            makePostOrderRequest('http://localhost:3000/api/v1/order',
                transformToList(pizzaCart), transformToList(dessertCart), transformToList(drinkCart), selectedDate, takeaway)
                .then((res) => {
                    console.log(res.data);
                    const orderId = res.data._id;
                    const url = 'http://localhost:3000/api/v1/updateOrder/'
                    makeUpdateUserRequest(url.concat(auth.user._id), orderId) // add order id to user
                        .then((res) => {
                            console.log(res.data);
                            removeAllPizzas();
                            removeAllDesserts();
                            removeAllDrinks();
                        })
                        .catch((err) => console.log(err))

                }) // received order id
                .catch((err) => console.log(err))
        } else {
            console.log("Please sign in");
        }
    };

    const [takeaway, setTakeaway] = React.useState(false);

    const handleTakeawayChange = (e) => {
        setTakeaway(e.target.checked);
    };

    const [selectedDate, setSelectedDate] = React.useState(Date.now());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <>
            <h1>Pizza</h1>
            <Grid>
                {pizzaCart.map((item) => (
                    <PizzaItem key={uuidv4()} itemData={item} />
                ))}
            </Grid>

            <h1>Dessert</h1>
            <Grid>
                {dessertCart.map((item) => (
                    <DessertItem key={uuidv4()} itemData={item} />
                ))}
            </Grid>

            <h1>Drink</h1>
            <Grid>
                {drinkCart.map((item) => (
                    <DrinkItem key={uuidv4()} itemData={item} />
                ))}
            </Grid>

            <Divider variant="middle" />

            <Card>
                <CardActionArea>
                    <CardContent>
                        <Typography variant="h5" component="h1" >
                            Cart summary
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            TOTAL: ( {totalItems} items)
                        </Typography>
                        <Typography variant="h5" color="textSecondary" component="h4">
                            Total price : $ {totalPrice}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardContent>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            label="Order date"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                        <KeyboardTimePicker
                            margin="normal"
                            id="time-picker"
                            label="Time"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change time',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={takeaway}
                                onChange={handleTakeawayChange}
                                color="primary"
                            />
                        }
                        label="Takeaway"
                    />
                </CardContent>
                <CardActions>
                    <Button size="small" style={style} onClick={handleSubmit}>
                        Proceed To Checkout
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}

const mapStateToProps = state => {
    return {
        pizzaCart: state.pizzaShop.cart,
        dessertCart: state.dessertShop.cart,
        drinkCart: state.drinkShop.cart,
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeAllPizzas: () => dispatch(removeAllPizzas()),
        removeAllDesserts: () => dispatch(removeAllDesserts()),
        removeAllDrinks: () => dispatch(removeAllDrinks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

