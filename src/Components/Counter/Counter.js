import React, { useEffect, useState } from "react";
import "./Counter.css"

export default function Counter({name,onChange}){
    const [value,setValue] = useState(0)
    const increaseVal = () => {
        setValue(val => val + 1)
        onChange(value + 1)
    }
    const decreaseVal = () => {
        if(value <= 0) return
        setValue(val => val - 1)
        onChange(value - 1)
    }

    useEffect(() => {
        onChange(value)
    },[])
    return (
        <div className="counter">
            <span className="name">{name}</span>
            <div className="controls">
                <button className="action" onClick={decreaseVal}>-</button>
                <span>{value}</span>
                <button className="action" onClick={increaseVal}>+</button>

            </div>
        </div>
    )
}