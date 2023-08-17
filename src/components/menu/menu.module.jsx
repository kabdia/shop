import React from "react";

function Menu(){
    return(
        <nav>
            <div className="nav__menu">
            <ul>
                <li>Каталог</li>
                <li>О нас</li>
                <li>Контакты</li>
            </ul>
            </div>
            <div className="busket">
                <p>Корзина</p>
            </div>
            
        </nav>
    )
}

export default Menu;