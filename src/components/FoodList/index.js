import React, { useEffect } from 'react';
import DessertCard from './dessertCard';
import PizzaCard from './pizzaCard';
import DrinkCard from './drinkCard';

//import { FoodGrid } from './styles';
import Grid from '@material-ui/core/Grid';

import { connect } from 'react-redux';

import { getProducts as getPizzas } from '../../redux/pizzaShop/actions';
import { getProducts as getDesserts } from '../../redux/dessertShop/actions';
import { getProducts as getDrinks } from '../../redux/drinkShop/actions';


const FoodList = ({ pizzas, getPizzas, desserts, getDesserts, drinks, getDrinks }) => {

    useEffect(() => {
        getPizzas();
        getDesserts();
        getDrinks();
    }, [getPizzas, getDesserts, getDrinks])

    return (
        <>
            <h1>Pizza</h1>
            <Grid container spacing={3}>
                {pizzas.map((pizza) => (
                    <Grid item xs={12} sm={6} md={4} key={pizza._id}>
                        <PizzaCard key={pizza._id} productData={pizza} />
                    </Grid>
                ))}
            </Grid>
            <h1>Dessert</h1>
            <Grid container spacing={3}>
                {desserts.map((dessert) => (
                    <Grid item xs={12} sm={6} md={4} key={dessert._id}>
                        <DessertCard key={dessert._id} productData={dessert} />
                    </Grid>
                ))}
            </Grid>
            <h1>Drink</h1>
            <Grid container spacing={3}>
                {drinks.map((drink) => (
                    <Grid item xs={12} sm={6} md={4} key={drink._id}>
                        <DrinkCard key={drink._id} productData={drink} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

const mapStateToProps = (state) => ({
    pizzas: state.pizzaShop.products,
    desserts: state.dessertShop.products,
    drinks: state.drinkShop.products
})

const mapDispatchToProps = dispatch => {
    return {
        getPizzas: () => dispatch(getPizzas()),
        getDesserts: () => dispatch(getDesserts()),
        getDrinks: () => dispatch(getDrinks()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodList);