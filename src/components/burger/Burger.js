import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './burgerIngredient/BurgerIngredient';


const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map(keyIng => {
        return [...Array(props.ingredients[keyIng])].map((_, i) => {
            return <BurgerIngredient key={keyIng + i} type={keyIng} />
        });
    }).reduce((arr, el) => {
        return arr.concat(el);
    }, []);
    

    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please add ingredient</p>
    }

    // console.log(transformedIngredients);
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;