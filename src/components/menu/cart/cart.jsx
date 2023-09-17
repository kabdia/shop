import React from "react";
import style from "./cart.module.css"
import { calcTotalPrice } from "../utils";

function CartMenu({items,onClick}){
    return <div className={style.shop__cart}>
                    <div className={style.cart__items}>
                    {
                       items.length > 0 ? 
                       items.map(item=>
                        <div className={style.items__item}>{item.name}</div>)
                       : 'Корзина пуста'
                    }
                    </div>   
                    <hr />            
                    {
                        items.length > 0 ?
                        <div className={style.cart__totalprice}>
                            <span className={style.totalprice__price}>Итого: {calcTotalPrice(items)} руб.</span><br/>                            
                            <button className={style.totalprice__button} onClick={()=>null} >
                                Оформить заказ
                            </button>
                        </div>  
                        :null
                    }

                    
                </div>
}

export default CartMenu;