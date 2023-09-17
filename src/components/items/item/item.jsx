import React from "react";
import style from './item.module.css';
import { useDispatch,useSelector } from "react-redux";
import { deleteItemFromCart, setItemInCart } from "../../../redux/cart/cart-reducer";

function Item(props) {

    const dispatch = useDispatch();
    const items = useSelector(state=>state.cart.itemsInCart)
    const isItemInCart = items.some(t=>t.id === props.item.id)

    const handleClick = (e) => {
        e.stopPropagation();
        if (isItemInCart){
            dispatch(deleteItemFromCart(props.item.id))
        } else{
            dispatch(setItemInCart(props.item));
        }
        

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
           {isItemInCart ? 'Убрать из корзины':'В корзину'}</button>
    </div>)
}

export default Item;