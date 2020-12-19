import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import axios from 'axios';

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Grid from '@material-ui/core/Grid';

import ListItemText from '@material-ui/core/ListItemText';

import Divider from '@material-ui/core/Divider';



import { MdExpandMore } from 'react-icons/md';

async function getOrderRequest(url) {
    let res = await axios.get(url);
    return res.data;
}

const OrderElements = ({ orderId }) => {

    const [pizzas, setPizzas] = useState([]);
    const [desserts, setDesserts] = useState([]);
    const [drinks, setDrinks] = useState([]);
    const [orderDate, setOrderdate] = useState("");
    const [createdAt, setCreatedAt] = useState("");
    const [takeaway, setTakeaway] = useState("");

    useEffect(() => {
        const url = 'https://serene-retreat-39457.herokuapp.com/api/v1/order/';
        getOrderRequest(url.concat(orderId))
            .then((res) => {
                const { pizzas, desserts, drinks, takeaway, orderDate, createdAt } = res
                setPizzas(pizzas);
                setDesserts(desserts);
                setDrinks(drinks);
                setOrderdate(orderDate);
                setTakeaway(takeaway);
                setCreatedAt(createdAt)
            })
            .catch(err => {
                console.log(err);
            })

    }, [orderId])

    const getDate = (date) => {
        return date.split('T')[0];
    }

    const getTime = (date) => {
        if (date !== '') {
            return date.split('T')[1].slice(0, 8);
        }

    }

    return (
        <div style={{ margin: "100px 0px" }} >
            <Grid container>
                <Grid item xs={3}>
                </Grid>
                <Grid item xs={6}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<MdExpandMore />}
                            aria-controls="panel1a-content"
                        >
                            <h2>Order created on {getDate(createdAt)} at {getTime(createdAt)}  </h2>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid container spacing={1}>
                                <Grid item xs={6}>
                                    <Divider orientation="vertical" style={{ float: "right", marginRight: "10px" }} />
                                </Grid>
                                <Grid item xs={6}>
                                    <Grid container>
                                        {pizzas.map((pizza) => (
                                            <Grid item xs={12} key={uuidv4()}>
                                                <div>
                                                    <div>  <h2>{pizza.name}</h2> Size : {pizza.size} Quantity: {pizza.quantity} {takeaway}</div>
                                                </div>
                                            </Grid>
                                        ))}
                                        {desserts.map((dessert) => (
                                            <Grid item xs={12} key={uuidv4()}>
                                                <div>
                                                    <div> <h2>{dessert.name}</h2> Size : {dessert.size} Quantity: {dessert.quantity}</div>
                                                </div>
                                            </Grid>
                                        ))}
                                        {drinks.map(drink => (
                                            <Grid item xs={12} key={uuidv4()}>
                                                <div>
                                                    <ListItemText> <h2>{drink.name}</h2> Size : {drink.size} Quantity: {drink.quantity}</ListItemText>
                                                </div>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </AccordionDetails>
                        <Divider variant="middle" />
                        <div> Takeaway : {takeaway ? "Yes" : "No"} Order date : {getDate(orderDate)} at {getTime(orderDate)} </div>
                    </Accordion>
                </Grid>
                <Grid item xs={3}>
                </Grid>
            </Grid >
        </div>
    )
}


export default OrderElements;