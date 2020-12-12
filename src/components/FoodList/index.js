import React, { useEffect } from 'react';
import DessertCard from './dessertCard';
import PizzaCard from './pizzaCard';
import DrinkCard from './drinkCard';

import { FoodGrid } from './styles';

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
            <FoodGrid>
                {pizzas.map((pizza) => (
                    <PizzaCard key={pizza._id} productData={pizza} />
                ))}
            </FoodGrid>
            <h1>Dessert</h1>
            <FoodGrid>
                {desserts.map((dessert) => (
                    <DessertCard key={dessert._id} productData={dessert} />
                ))}
            </FoodGrid>
            <h1>Drink</h1>
            <FoodGrid>
                {drinks.map((drink) => (
                    <DrinkCard key={drink._id} productData={drink} />
                ))}
            </FoodGrid>
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