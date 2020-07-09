import React from 'react';
import Burger from '../../components/Burger/Burger';
import Controls from '../../components/Burger/Controls/Controls';
import OrderModal from '../../components/OrderModalContent/OrderModalContent';
import Modal from '../../components/UX/Modal/Modal';
import Hoc from '../../hoc/Hoc';

const INGREDIENTS_PRICE = {
    salad: 0.5,
    bacon: 1,
    meat: 2,
    cheese: 1.25,
}

class BurgerBuilder extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ingredients: {
                salad: 0,
                bacon: 0,
                meat: 0,
                cheese: 0,
            },
            price: 8,
            orderable: false,
            showOrderModal: false,
        }
    }

    updateOrderable = (ingredients) => Object.values(ingredients).reduce((sum, next) => sum += next,0) > 0 ? true : false;

    addIngredientHandler = (type) => {
        let {ingredients, price, orderable} = this.state;

        ingredients[type] ++;
        price += INGREDIENTS_PRICE[type];
        orderable = this.updateOrderable(ingredients);

        this.setState({ingredients, price, orderable});

    }

    removeIngredientHandler = (type) => {
        let {ingredients, price, orderable} = this.state;

        if(ingredients[type] > 0){
            ingredients[type] --;
            price -= INGREDIENTS_PRICE[type];
            orderable = this.updateOrderable(ingredients);

            this.setState({ingredients, price, orderable});
        }
    }

    openModalHandler = () => {
        this.setState({showOrderModal: true});
    }

    closeModalHandler = () => {
        this.setState({showOrderModal: false});
    }

    render = () => {
        const { ingredients, price, orderable, showOrderModal } = this.state;

        return (
            <Hoc>
                {showOrderModal && 
                    <Modal closeModal={this.closeModalHandler}>
                        <OrderModal ingredients={ingredients} price={price} closeModal={this.closeModalHandler}/>
                    </Modal>
                }
                <Burger ingredients={ingredients} />
                <Controls 
                    price={price}
                    ingredients={ingredients}
                    orderable = {orderable}
                    openModal = {this.openModalHandler}
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler} />
            </Hoc>
        )
    }
}

export default BurgerBuilder;