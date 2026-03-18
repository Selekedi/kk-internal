import React, { useState } from "react";
import "./OrderItem.css"
import Counter from "../Counter/Counter";

export default function OrderItem({kota,onRemove}){
    const [mild,setMild] = useState(null)
    const [hot,setHot] = useState(null)
    const qty = (hot || 0) + (mild || 0)
    const total = kota.price * qty

    return (
        <div className="order-item">
            <span className="name">
                {kota.price}
            </span>
            <Counter name={"Mild"} onChange={setMild}/>
            <Counter name={"Hot"} onChange={setHot}/>
            <div className="total-qty">
                <span className="total">R{total}</span>
                <span className="qty">{qty}</span>
            </div>
            <button className="close" onClick={onRemove}>
                X
            </button>
        </div>
    )
}