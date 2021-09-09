import React, { Component } from "react";
import Slider from "react-slick";
import css from './slick.module.css'


export default class Slick extends Component {
  render() {
    const settings = {
      arrows: true,  
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
          <div className={css.slider}>
                <div className={css.slider__left}>
                    <img src="./images/adidas.svg" alt="" />
                    <div className={css.slider__texts}>
                        <p className={css.slider__text}>Stan Smith 
                            <span>, Forever!</span></p>
                        <button className={css.slider__btn}>Купить</button>
                    </div>
                </div>
                <div className={css.slider__right}>
                    <img className={css.slider__rigth} src="./images/krosgreen.svg" alt="" />
                </div>
            </div>
          </div>
          <div>
          <div className={css.slider}>
                <div className={css.slider__left}>
                    <img src="./images/adidas.svg" alt="" />
                    <div className={css.slider__texts}>
                        <p className={css.slider__text}>Stan Smith 
                            <span>, Forever!</span></p>
                        <button className={css.slider__btn}>Купить</button>
                    </div>
                </div>
                <div className={css.slider__right}>
                    <img className={css.slider__rigth} src="./images/krosgreen.svg" alt="" />
                </div>
            </div>
          </div>
          <div>
          <div className={css.slider}>
                <div className={css.slider__left}>
                    <img src="./images/adidas.svg" alt="" />
                    <div className={css.slider__texts}>
                        <p className={css.slider__text}>Stan Smith 
                            <span>, Forever!</span></p>
                        <button className={css.slider__btn}>Купить</button>
                    </div>
                </div>
                <div className={css.slider__rigth}>
                    <img className={css.slider__right} src="./images/krosgreen.svg" alt="" />
                </div>
            </div>
          </div>
          <div>
          <div className={css.slider}>
                <div className={css.slider__left}>
                    <img src="./images/adidas.svg" alt="" />
                    <div className={css.slider__texts}>
                        <p className={css.slider__text}>Stan Smith 
                            <span>, Forever!</span></p>
                        <button className={css.slider__btn}>Купить</button>
                    </div>
                </div>
                <div className={css.slider__rigth}>
                    <img className={css.slider__right} src="./images/krosgreen.svg" alt="" />
                </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}