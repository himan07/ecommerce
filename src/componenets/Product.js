import React, { useState } from 'react'

const Product = (props) => {
    const [hover, setHover] = useState(false)
    const {data, onAddToCart} = props
    return (
        <div
        onClick={()=>{onAddToCart(data)}}
        onMouseEnter={()=>{setHover(true)}}
        onMouseLeave={()=>{setHover(false)}}
        className="img-container" style={{backgroundColor:`rgb(${Math.ceil(Math.random()*100)}, ${Math.ceil(Math.random()*100)},70)`}}>
            <img src={data.image} alt=""></img>
            <div className="text-div">
                <p>{(data.name).toUpperCase()}</p>
                <p className={hover ? 'price' :"price show"}>{data.price} ERU</p>
                <p className={hover ? 'des' :"des show"}>{data.description} ERU</p>
            </div>
        </div>
    )
}

export default Product