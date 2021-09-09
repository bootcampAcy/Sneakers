import React from 'react'
import css from './cardModal.module.css'

export default function CardModal(){
    return (
        <div>
           <div className={css.card}>
               <img className={css.kros__img} src="./images/kros.svg" alt="" />
               <div className={css.card__texts}>
                   <p className={css.name__kros}>Мужские Кроссовки Nike Air Max 270</p>
                   <p className={css.price__kros}>12 999 руб.</p>
               </div>
               <img className={css.x__icon} src="./images/x.png" />
           </div>
        </div>
    )
} 