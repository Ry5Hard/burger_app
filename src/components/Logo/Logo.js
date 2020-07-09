import React from 'react';
import style from './Logo.module.scss';
import burgerLogo from '../../assets/images/burger-logo.png';

const logo = () => (
    <div className={style.logoWrapper}>
        <img src={burgerLogo} alt="Custom Burger" />
    </div>
)

export default logo;