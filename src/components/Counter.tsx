import { useState } from "react";
import s from "./Counter.module.scss"

export const Counter = () => {

    const [count, setCount] = useState(0);


    return(
        <div>
            <div>{count}</div>
            <button className={s.count__button}>+</button> 
            <button className={s.count__button}>-</button>    
        </div>
    );
}

