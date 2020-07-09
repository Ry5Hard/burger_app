import React from 'react';
import style from './Modal.module.scss';
import Hoc from '../../../hoc/Hoc';

const modal = (props) => (
    <Hoc>
        <div className={style.modalWrapper} onClick={props.closeModal}></div>
         <div className={style.modalBody}>
            {props.children}
        </div>
    </Hoc>

)

export default modal;