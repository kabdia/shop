import React from "react";
import style from './item.module.css';
import { useDispatch } from "react-redux";
import { setItemInCart } from "../../../redux/cart/cart-reducer";

function Item(props) {

    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.stopPropagation();
        dispatch(setItemInCart(props.item));

    }
    return (<div className={style.item}>
        <img className={style.item__img} src={props.item.img} />
        <h1 className={style.item__h1}>{props.item.name}</h1>
        <p className={style.item__country}>{props.item.country}</p>
        <p className={style.item__price}>{props.item.price}</p>
        <p className={style.item__material}>{props.item.material}</p>
        <button
            type="primary"
            onClick={handleClick}
            className={style.item__button}>
            Купить</button>
    </div>)
}

export default Item;