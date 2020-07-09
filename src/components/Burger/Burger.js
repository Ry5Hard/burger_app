import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import style from './Burger.module.scss';

const burger = (props) => {

    {/** BARDZO FAJNY KOD - ZAPAMIĘTAĆ!!!! **/}
    let ingredients = Object.keys(props.ingredients).map(ing => {
        return(
            [...Array(props.ingredients[ing])].map((_, i) => <BurgerIngredient key={ing + i} type={ing} />)
        )
    }).reduce((prev, curr) => {
        return prev.concat(curr);
    },[]);

    if(ingredients.length === 0) ingredients = <p>Proszę dodać składniki!</p>;

    return (
        <div className={style.burger}>
            <BurgerIngredient type="bread-top" />
            {ingredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;