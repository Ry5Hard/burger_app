import React from 'react';
import style from './IngredientControl.module.scss';
// import Hoc from '../../hoc/Hoc';

const ingredientControl = (props) => {

    console.log(props);

    return(
        <div className={style.ingredientControl}>
            <span className={style.label}>{props.label}</span>
            <button onClick={props.added} className={style.add}>+</button>
            <button onClick={props.removed} disabled={props.disabled} className={style.remove}>-</button>
        </div>
    )
}


export default ingredientControl;