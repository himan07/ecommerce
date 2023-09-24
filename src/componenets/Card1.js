import React, { useState } from 'react'
import Popup from './Popup'

const Card1 = (props) => {
    const [openPopup, setOpenPopup] = useState(false)
    const {cartItem, onAddToCart, onRemoveToCart, deleteCart, cancelCart } = props
    const totalItem = cartItem.reduce((a,c)=>a + c.qty, 0)
    const itemPrice = cartItem.reduce((a, c)=>a+c.price*c.qty, 0)
    const taxPrice = itemPrice*.1
    const discount = itemPrice* .1
    const totalPrice = (itemPrice + taxPrice - discount)
    return (
        <>
        <div className="cart">
            <div className="cart-head">
            <ul>
                <li>PRODUCTS</li>
                <li>PRICE</li>
                <li>QUANTITY</li>
                <li>TOTAL</li>
            </ul>
            </div>
            {cartItem.length === 0 ? <div className="blank-div">THERE ARE NO PRODUCTS</div>: 
            cartItem.map(item=>(<div className="cart-div" key={item.id}>
            <div className="delete">
            <button onClick={()=>deleteCart(item)}>X</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <div>{item.name}</div>
            </div>
            <div>{item.price}</div>
            <div>
                <button className="btn" onClick={()=>onRemoveToCart(item)} >-</button>
                <button>{item.qty}</button>
                <button className="btn" onClick={()=>onAddToCart(item)} >+</button>
            </div>
            <div>{item.qty*item.price}&nbsp;INR</div>
            </div>))
            }
            <div className="cart-value">
               <div>
                   <div className="div-left">SubTotal</div>
                   <div className="div-right">
                       <div>{itemPrice ? `${(itemPrice*0.011).toFixed(3)} ERU` : "0.000 ERU"}</div>
                       <div>{totalItem ? `${totalItem} items` : "0 items"}</div>
                   </div>
               </div>
               <div>
                   <div className="div-left">VAT tax</div>
                   <div className="div-right">
                       <div>10%</div>
                       <div>{taxPrice ? `${(taxPrice*0.011).toFixed(3)} ERU` :"0.000 ERU"}</div>
                   </div>
               </div>
               <div>
                   <div className="div-left">Discount</div>
                   <div className="div-right">
                       <div>10%</div>
                       <div>{discount ? `${(discount*0.011).toFixed(3)} ERU` : "0.000 ERU"}</div>
                   </div>
               </div>
               <div>
                   <div className="div-left">Total</div>
                   <div className="div-right">
                       <div style={{color:"rgb(49, 199, 114)"}}>{totalPrice ? `${(totalPrice*0.011).toFixed(3)} ERU` : "0.000 ERU"}</div>
                   </div>
               </div>
               <div className="btn-div" >
                <button className="cancel" onClick={cancelCart}>CANCEL SALE</button>
                <button onClick={()=>setOpenPopup(true)} className="process" id="open-popup-btn">PROCESS SALE</button>
               </div>
            </div>
        </div>
            {openPopup && <Popup setOpenPopup={setOpenPopup} cartItem={cartItem} totalPrice={totalPrice} totalItem={totalItem} />}
            </>
    )
}

export default Card1
