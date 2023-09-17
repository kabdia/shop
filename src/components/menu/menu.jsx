import React, { useState} from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import style from './menu.module.css';
import { FaShoppingCart } from "react-icons/fa";
import { calcTotalPrice } from "./utils";
import CartMenu from "./cart/cart";

function Menu() {
    //состояние кнопки "Корзина" (изменение цвета при нажатии)
    let [cartOpen, setCartOpen] = useState(false);
    //изменение цены в области меню (рядом с корзиной)
    const items = useSelector(state=>state.cart.itemsInCart);
    const totalPrice = calcTotalPrice(items)
    return (<>
        <nav className={style.nav}>

            <div className={style.nav__items}>
                <div className={style.items__item_kat}>
                <div class="nav-item zhs-menu-event">Каталог
                    <div class="zhs"></div>
                </div>
                </div>

                <div className={style.items__item_about}>О нас</div>
                <div className={style.items__item_kontakts}>Контакты</div>
            </div>

            <div className={style.nav__busket}>
                <div className={style.busket__item}><div>{(totalPrice > 0) ? (totalPrice+` руб.`): null} </div><a><FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} class={cartOpen ? style.item_a + ` ` + style.active : style.item_a + ` ` + style.nonactive} /> </a></div>
            </div>
            {cartOpen && (
                <CartMenu items={items} onClick={()=>null} />
            )}
        </nav>

    </>

    )
}

export default Menu;