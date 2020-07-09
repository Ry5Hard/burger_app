import React from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import style from './Layout.module.css';
import Hoc from '../../hoc/Hoc';

const layout = (props) => (
    <Hoc>
        <Toolbar />
        <div className={style.content}>
            {props.children}
        </div>
    </Hoc>
)

export default layout;