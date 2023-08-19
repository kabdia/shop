import React from "react";
import Item from "./item/item";
import style from "./items.module.css"

function Items(props){
    return(<main className={style.main}>
       {props.items.map(t =>       
       <Item key={t.id} items={t}/>
       )}
    </main>)
}

export default Items;