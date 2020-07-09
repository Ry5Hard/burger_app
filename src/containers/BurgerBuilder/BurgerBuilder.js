import React from 'react';
import Burger from '../../components/Burger/Burger';
import Hoc from '../../hoc/Hoc';

class BurgerBuilder extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ingredients: {
                salad: 0,
                cheese: 0,
                meat: 0,
                bacon: 0
            }
        }
    }

    render = () => {
        return (
            <Burger ingredients={this.state.ingredients} />
        )
    }
}

export default BurgerBuilder;