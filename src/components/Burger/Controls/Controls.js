import React from 'react';
import style from './Controls.module.scss';
import IngredientControl from './IngredientControl/IngredientControl';
// import Hoc from '../../hoc/Hoc';

const controls = (props) => {

    console.log(props);

    const ingredientsLabels = [
        {label: "Sałata", type: "salad"},
        {label: "Bekon", type: "bacon"},
        {label: "Mięso", type: "meat"},
        {label: "Ser", type: "cheese"},
    ];

    return(
        <div className={style.controlPanel}>

            <div className={style.priceLabel}>
                Do zapłaty: <span className={style.bigger}>{props.price.toFixed(2)} zł</span>
            </div>
            {ingredientsLabels.map(el => 
                <IngredientControl 
                    key = {el.type} 
                    label = {el.label}
                    disabled = {!props.ingredients[el.type]}
                    added = {() => props.addIngredient([el.type])}
                    removed = {() => props.removeIngredient([el.type])}/>
                )}
            <button className={style.OrderButton} disabled={!props.orderable} onClick={props.openModal}>ZAMÓW</button>
        </div>
    )
}


export default controls;