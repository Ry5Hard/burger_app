import React from 'react';
import style from './Layout.module.css';
import Hoc from '../../hoc/Hoc';

const layout = (props) => (
    <Hoc>
        <div>TOOLBAR BACKDROP</div>
        <div className={style.content}>
            {props.children}
        </div>
    </Hoc>
)

export default layout;