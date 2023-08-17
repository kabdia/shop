import React from "react";
import style from "./header.module.css"

function Header(){
return(
<header>
<div className={style.header__logo}>
<h1 className={style.header__h1}>Clothes showroom</h1>
</div>
<div className={style.header__slider}>
    <img src="https://images11.graziamagazine.ru/upload/img_cache/25a/25a27f9c63e166c53031b1dd0b1b0f4b_ce_1080x720x0x76.jpg" alt="slider" className={style.slider_style} />
</div>
</header>)
}

export default Header;