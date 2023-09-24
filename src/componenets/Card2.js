import React from 'react'
import Product from './Product'

const Card2 = (props) => {
    const {data, onAddToCart} = props

    return (
        <div className="card2">
            {data.map((data, i)=>(<Product data={data} key={i} onAddToCart={onAddToCart} />))}
        </div>
    )
}

export default Card2