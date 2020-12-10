import React, { useState, Component } from 'react';
import { FoodCard } from '../index';

import { FoodGrid } from './styles';

import { connect } from 'react-redux';

import { getProducts } from '../../redux/shopping/shopping-actions';

import Grid from '@material-ui/core/Grid';




class FoodList extends Component {

    componentDidMount() {
        console.log("componentDidMount()");
        this.props.getProducts()
    }

    render() {

        const { products } = this.props.products;
        console.log("products :", products);

        return (
            <>
                <FoodGrid>
                    {products.map((food) => (
                        <FoodCard key={food._id} productData={food} />
                    ))}
                </FoodGrid>
            </>
        )
    }
}

const mapStateToProps = (state) => ({ products: state.shop })

export default connect(mapStateToProps, { getProducts })(FoodList);


/* const FoodList = ({foods}) => {

    return (
        <>
            <FoodGrid>
                {foods.map((food) => ( // map permet de parcourir la liste todos
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
} */