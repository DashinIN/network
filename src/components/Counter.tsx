import { useState } from "react";
import "./Counter.scss"

export const Counter = () => {

    const [count, setCount] = useState(0);


    return(
        <div>
            <div>{count}</div>
            <button className="count__button">+</button> 
            <button className="count__button">-</button>    
        </div>
    );
}

