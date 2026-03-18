import React from "react";
import "./Menu.css"
import MenuCard from "../Menucard/MenuCard";


export default function Menu({onItemClick}){
    const menu = [
        {
            id:1,
            price:25,
        },
        {
            id:2,
            price:35,
        },
        {
            id:3,
            price:45,
        },
        {
            id:4,
            price:55,
        },
        {
            id:5,
            price:65,
        },
        {
            id:6,
            price:75,
        },

    ]
    return (
    	<div className = "menu-grid"> 
    		{
    			menu.map(kota => <MenuCard key ={kota.id} kota ={kota} onClick={() => onItemClick(kota)} />)
    		}
    	</div>
    )
}
