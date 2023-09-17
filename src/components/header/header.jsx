import React from "react";
import style from "./header.module.css"

function Header(){
return(
<header>
<div className={style.header__logo}>
<h1 className={style.header__h1}>Clothes showroom</h1>
</div>
<div className={style.header__slider}>
    <img src="https://www.dutchfashion.info/slide_images/1505216675_1496409064_slider1.jpg" alt="slider" className={style.slider_style} />
</div>
</header>)
}

export default Header;