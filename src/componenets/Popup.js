import React from 'react'

const Popup = (props) => {
    const{setOpenPopup, cartItem, totalPrice, totalItem} = props
    const date = new Date()
    return (
        <div className="popup-background">
            <div className="popup-content">
            <div className="heading">Receipt</div>
            <p>Date : {date.getMonth()}-{date.getDate()}-{date.getFullYear()}&nbsp;{date.getHours()}-{date.getMinutes()}-{date.getSeconds()}</p>
            <div className="div-heading">
                    <div>#</div>
                    <div>products</div>
                    <div>Quantity</div>
                    <div>SubTotal</div>
            </div>
            <hr style={{opacity:".5"}}></hr>
            {
                cartItem.map((item, index)=>(
                    <div className="div-heading">
                    <div>{index+1}</div>
                    <div>{item.name}</div>
                    <div>{item.qty}</div>
                    <div>{item.qty*item.price}&nbsp;INR</div>
            </div>
                ))
            }
            <hr style={{opacity:".5"}}></hr>
            <div className="total-price">
                <div>Total Item</div>
                <div>{totalItem} Total</div>
                <div>{totalPrice} INR</div>
            </div>
            <hr style={{opacity:".5"}}></hr>
            <div className="total-price">
                <div></div>
                <div>Discount</div>
                <div>10%</div>
            </div>
            <hr style={{opacity:".5"}}></hr>
            <div className="total-price">
                <div></div>
                <div>VAT</div>
                <div>10%</div>
            </div>
            <button className="close-btn" onClick={()=>{setOpenPopup(false)}}>Close</button>
            </div>
        </div>
    )
}

export default Popup
