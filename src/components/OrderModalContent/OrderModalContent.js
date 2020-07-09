import React from 'react';
import Hoc from '../../hoc/Hoc';
import Button from '../UX/Button/Button';
import style from './OrderModalContent.module.scss';

const orderModal = (props) => {

    const typeToName = (type) => {
        let translation = '';

        switch (type){
            case 'bacon':
                translation = 'Bekon';
                break;
            case 'salad':
                translation = 'Sałata';
                break;
            case 'meat':
                translation = 'Mięso';
                break;
            case 'cheese':
                translation = 'Ser';
                break;
            default:
                translation = null;
        }

        return translation;

    }

    const ingredients = Object.keys(props.ingredients).map(ing => (
        props.ingredients[ing] > 0 
        ? (
            <li>
                <span className={style.ingredient}>{typeToName(ing)} : </span> {props.ingredients[ing]}
            </li>
        )
        : null
    ));

    console.log(ingredients);

    return(
        <Hoc>
            <h2>Twoje zamówienie jest prawie gotowe!</h2>
            <p>Oto składniki Twojego pysznego burgera:</p>
            <ul>
                {ingredients}
            </ul>
            <div className={style.bottomBar}>
                <hr />
                <div>Do zapłaty: <span className={style.price}>{props.price.toFixed(2)} zł</span></div>
                <Button btnType={"Success"}>KUPUJĘ</Button>
                <Button btnType={"Danger"} clicked={props.closeModal}>...JESZCZE CHWILA</Button>
            </div>
        </Hoc>
    )
}

export default orderModal;