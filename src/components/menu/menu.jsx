import React from "react";
import style from './menu.module.css'

function Menu(){
    return(<>
        <nav className={style.nav}>
            
            <div className={style.nav__items}>
                <div className={style.items__item_kat}>Каталог
                <div className={style.kategory}>
                <ul className={style.kategory_items}>
                    <li className={style.kategory_items__item}><a href="#">Обувь</a></li>
                    <li className={style.kategory_items__item}><a href="#">Платья</a></li>
                    <li className={style.kategory_items__item}><a href="#">Штаны</a></li>
                    <li className={style.kategory_items__item}><a href="#">Нижнее белье</a></li>
                    <li className={style.kategory_items__item}><a href="#">Футболки</a></li>
                    <li className={style.kategory_items__item}><a href="#">Спортивная одежда</a></li>
                    <li className={style.kategory_items__item}><a href="#">Аксессуары</a></li>                  
                </ul>
            </div>
                </div>        

                <div className={style.items__item_about}>О нас</div>
                <div className={style.items__item_kontakts}>Контакты</div>
            </div>
            
            <div className={style.nav__busket}>
            <div className={style.busket__item}>Корзина</div>
            </div> 
                      
        </nav>
        
        </>
        
    )
}

export default Menu;