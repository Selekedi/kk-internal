import React, { useState } from "react";
import "./NewOrders.css"
import Counter from "../../../Components/Counter/Counter";

export default function NewOrder(){
    const [isMenuOpen,setMenuOpen] = useState(false)
    const [isFinalStage,setIsFinalStage] = useState(false)
    const [items,setItems] = useState(null)
    const [selectedItem,setSelectedItem] = useState(null)
    const [deliveryType,setDeliveryType] = useState("Sit Down")
    const orderTotal = items?.reduce((a,b) => a + b.total, 0)
    const done = true
    const initMenu = [
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

    const onClickMenuItem = (id) => {
        const kota = initMenu.find(kot => kot.id === id)
        const newObj = {
            ...kota,
            mild:0,
            hot:0,
            qty:0,
            total:0
        }
        setSelectedItem(newObj)
    }

    const onCounterChange = (key,value) => {
        if(!selectedItem) return
        const newObj = {
            ...selectedItem,
            [key]:value
        }
        newObj.qty = newObj.hot + newObj.mild
        newObj.total = newObj.qty * newObj.price
        setSelectedItem(newObj)
    }

    const onClose = ()=> {
        setMenuOpen(false)
        setSelectedItem(null)
    }

    const onBack = () => {
        setSelectedItem(null)
    }

    const addToItems = (item) => {
        if(!selectedItem || selectedItem?.qty < 1) return
        if(!items) {
            setItems([item])
            onClose()
            return
        }
        setItems(prev => {
            const exists = prev.find(it => it.id === item.id)
            // if it is not in the items array, simply add it
            if(!exists) return prev.push(item)
            //apply delta
            return prev.map(kota => kota.id === item.id ? 
                ({...item,
                    mild:kota.mild + item.mild,
                    hot:kota.hot + item.hot,
                    qty:kota.qty + item.qty,
                    total:kota.total + item.total,
                }):kota)
        })
        onClose()
    }

    const removeFromItems = (idx) => {
        setItems(prev => {
            const newArr = prev.filter((_,i) => i !== idx)
            if(newArr.length > 0) return newArr
            return null
        })
    }

    
    return (
        <div className="new-order-page">
            <h2>New Order</h2>
            <button onClick={() => setMenuOpen(true)}>
                add new kota
            </button>
            
            {items && 
            
            items?.map((item,idx) => (
                <div className="order-item">
                    <strong>
                        {item.price}
                    </strong>
                    <div className="flavor-container">
                        <span className="flavor-name">Mild</span>
                        <span className="flavor-qty">{item.mild}</span>
                    </div>
                    <div className="flavor-container">
                        <span className="flavor-name">Hot</span>
                        <span className="flavor-qty">{item.hot}</span>
                    </div>
                    <div className="qty-price-container">
                        <span className="total-qty">{item.qty}</span>
                        <span className="total-price">R <span>{item.total}</span></span>
                    </div>
                    <button className = "item-remove" onClick={() => removeFromItems(idx)}>
                            ❌
                    </button>
                </div>
            ))}
            {items && <div>
                <div className="order-total-container"> <span className="order-total">Total R <span className="figure">{orderTotal}</span></span> </div>
                <form className="customer-form">
                    <fieldset className="form-group">
                        <label>Name</label>
                        <input type="text"/>
                    </fieldset>
                    <fieldset className="form-group">
                        <label>Department</label>
                        <input type="text"/>
                    </fieldset>
                    <fieldset className="form-group">
                        <label>Cell No.</label>
                        <input type="tel"/>
                    </fieldset>
                    <div className="delivery">
                        <label className="radio">
                            <input 
                                type="radio"
                                checked={deliveryType === "Sit In"}
                                onChange={() => setDeliveryType("Sit In")}
                            />
                            <span className="dot"></span>
                            <span>Sit In</span>
                        </label>
                        <label className="radio">
                            <input 
                                type="radio"
                                checked={deliveryType === "Take away"}
                                onChange={() => setDeliveryType("Take away")}
                            />
                            <span className="dot"></span>
                            <span>Take away</span>
                        </label>
                        <label className="radio">
                            <input 
                                type="radio"
                                checked={deliveryType === "Collect"}
                                onChange={() => setDeliveryType("Collect")}
                            />
                            <span className="dot"></span>
                            <span>Collect</span>
                        </label>
                        <label className="radio">
                            <input 
                                type="radio"
                                checked={deliveryType === "Deliver"}
                                onChange={() => setDeliveryType("Deliver")}
                            />
                            <span className="dot"></span>
                            <span>Deliver</span>
                        </label>
                    </div>
                    { done && 
                        <button className="submit" type="button">
                            Create Order
                        </button>
                    }
                    
                </form>
                
            </div> }
            <div className={`menu-overlay ${isMenuOpen ? "show":""}`}>
                <div className="wrapper">
                    <div className="menu-header">
                        <button className={`back ${selectedItem ? "show" : ""}`} onClick={onBack}>
                            🔙
                        </button>
                        <button className = "close" onClick={onClose} >
                            ❌
                        </button>
                    </div>
                    
                    {
                    	!selectedItem ? 
                            <div className="grid">
                                {
                                    initMenu.map(kota => (
                                        <button 
                                            key={kota.id} 
                                            className="kota-card"
                                            onClick={() => onClickMenuItem(kota.id)}
                                        >
                                            <span>
                                                {kota.price}
                                            </span>
                                        </button>
                                    ))
                                }
                            </div>
                        
                        : 
                        <div className="sides">
                            <strong>
                                {selectedItem?.price}
                            </strong>
                            <div className="counter-container">
                                <Counter name={"Mild"} onChange={(val) => onCounterChange("mild",val)}/>
                                <div className="total-qty">
                                    <span>
                                        {selectedItem?.qty}
                                    </span>
                                    
                                </div>
                                <Counter name={"Hot"} onChange={(val) => onCounterChange("hot",val)}/>
                            </div>
                            <div className="total-price">
                               R <span>{selectedItem?.total}</span>
                            </div>
                            <button onClick={() => addToItems(selectedItem)} >
		                        Add Kota
		                    </button>
                        </div>
                    }
                    
                </div>
            </div>
        </div>
    )
}
