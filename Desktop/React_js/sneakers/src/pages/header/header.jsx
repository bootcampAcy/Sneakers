import React from "react";
import css from "./header.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import CardModal from "../../components/cards/cardModal";
import Slick from "../../components/slick/slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from "react-router-dom"



function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    right: 0,
    border: "none",
    outline: "none",
    width: 385,
    height: "100vh",
    background: "white",
    padding: 30,
  },
}));

export const Header = () => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <header>
        <Link to="/" className={css.container__left}>
          <img className={css.logo} src="/images/logo.svg" alt="logo" />
          <div className={css.box__text}>
            <h1 className={css.title}>REACT SNEAKERS</h1>
            <p className={css.description}>Магазин лучших кроссовок</p>
          </div>
        </Link>
        <div className={css.container__right}>
          <div className={css.box__basket} onClick={handleOpen}>
            <img src="/images/basket.png" alt="basket" />
            <p className={css.money}>1205 руб.</p>
          </div>
          <Link to="/favorites"><img src="/images/like.png" alt="like" /></Link>
          <img src="/images/profile.png" alt="ptofile" />
        </div>
      </header>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper}>
          <div className={css.modal_box}>
            <p className={css.modal_title}>Корзина</p>
            <img src="./images/x.png" onClick={handleClose} />
          </div>
          <div className={css.cards}>
            <CardModal />
          </div>
          <div className={css.buy}>
            <div className={css.buy__price}>
              <p className={css.buy__priceq}>Итого: </p>
              <p className={css.buy__prices}>21 498 руб. </p>
            </div>
            <div className={css.buy__all}>
              <p className={css.buy__priceq}>Налог 5%: </p>
              <p className={css.buy__prices}>1074 руб. </p>
            </div>
            <button className={css.buy__btn}>Оформить заказ </button>
          </div>
        </div>
      </Modal>
      <Slick />
    </div>
  );
};
