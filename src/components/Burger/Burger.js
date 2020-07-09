import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import style from './Burger.module.scss';

const burger = (props) => {

    return (
        <div className={style.burger}>
            <BurgerIngredient type="bread-top" />
            {Object.keys(props.ingredients).map(
                igKey => {
                    return ([...Array(props.ingredients[igKey])].map((_, i) => (
                        < BurgerIngredient key={igKey + i} type={igKey} />
                    )))
                }
            )}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;