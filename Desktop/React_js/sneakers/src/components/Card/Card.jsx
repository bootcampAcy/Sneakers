import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './Card.module.scss';

import Heart from '../../assets/img/heart.svg'
import Check from '../../assets/img/check.svg'
import HertWhite from '../../assets/img/heart_white.svg'
import CheckWhite from '../../assets/img/check_white.svg'



export const Card = (props) => {
    const [add, setAdd] = useState(false);
    const [save, setSave] = useState(false);
    return (

            <div className={styles.card}>
                {!add && <img src={HertWhite} onClick={() => setAdd(!add)} />}
                {add && <img src={Heart} onClick={() => setAdd(!add)} />}
                <img width="100%" height={135} src={props.imageUrl} alt="Sneakers" />
                <h5>{props.title}</h5>
                <div className={styles.card__price}>
                    <div className={styles.card__text}>
                        <span>Цена:</span>
                        <b>{props.price} руб.</b>
                    </div>
                    <div className={styles.plus}>
                        {!save && <img src={CheckWhite} onClick={() => setSave(!save)} />}
                        {save && <img src={Check} onClick={() => setSave(!save)} />}
                    </div>
                </div>
            </div>                                                          
        
        

    )
}