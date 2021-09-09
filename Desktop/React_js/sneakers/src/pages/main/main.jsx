import React, { useEffect } from 'react';
import css from './main.module.scss'
import {Card} from "../../components/Card/Card";
import { useState } from 'react';
import axios from 'axios';

export const Main = (props) => {
  const [item,setItem] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch("https://610bc32c66dd8f0017b76a5e.mockapi.io/Cart")
      .then((res) => res.json())
      .then((item) => {
        setItem(item);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  function addBasket(obj) {
    axios.post(`https://610bc32c66dd8f0017b76a5e.mockapi.io` ,obj)
    .then((res) => console.log(res))
    setCart((prev => ([...prev, obj])))
  }           
  
    return(
        <div className={css.main}>
          <h1>Все кроссовки</h1>
          <div className={css.cards}>
          {item.map((obj) => {
              addBasket={addBasket};
              return (
                <Card key={obj.id} title={obj.title} imageUrl={obj.imageUrl} price={obj.price}/>
              )
          })}
          </div>
            </div>
        
    )
}
