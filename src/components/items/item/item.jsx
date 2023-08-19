import React from "react";
import style from './item.module.css';

function Item(props){
    return(<div className={style.item}>
        <img className={style.item__img} src={props.items.img}/>
       <h1 className={style.item__h1}>{props.items.name}</h1>
       <p className={style.item__country}>{props.items.country}</p>
       <p className={style.item__price}>{props.items.price}</p>
       <p className={style.item__material}>{props.items.material}</p>
       <button className={style.item__button}>Купить</button>
    </div>)
}

export default Item;