
import React from "react";
import "./MenuCard.css"

export default function MenuCard({kota,onClick}){
    return (
        <button className="menu-item-card" onClick={onClick}>
            <div className="wrapper">
                <strong className="kota-no">{kota.price}</strong>
            </div>
        </button>
    )
}
