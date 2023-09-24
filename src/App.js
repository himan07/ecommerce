import React, { useState } from 'react'
import Card1 from './componenets/Card1'
import Card2 from './componenets/Card2'
import {data} from './componenets/data'

const App = () => {

  const [cartItem, setCartItem] = useState([])
  const onAddToCart = (product)=>{
    const exist = cartItem.find((x)=>x.id===product.id)
    if(exist){
      setCartItem(
        cartItem.map((x)=>x.id === product.id ? {...exist, qty:exist.qty+1}: x)
      )
    }else{
      setCartItem([...cartItem, {...product, qty:1}])
    }
  }
  const onRemoveToCart = (product)=>{
    const exist = cartItem.find(x=>x.id===product.id)
    if(exist.qty===1){
      setCartItem(cartItem.filter(x=>x.id !== product.id))
    }else{
      setCartItem(
        cartItem.map(x=>x.id === product.id ? {...exist, qty:exist.qty-1}: x)
      )
    }
  }
  const deleteCart = (product)=>{
    const exist = cartItem.find(x=>x.id===product.id)
    if(exist){
      setCartItem(cartItem.filter(x=>x.id !== product.id))
    }
  }

  const cancelCart = ()=>{
    setCartItem([])
  }

  return (
    <div className="container">
    <Card1 cancelCart={cancelCart} cartItem={cartItem} onAddToCart={onAddToCart} onRemoveToCart={onRemoveToCart} deleteCart={deleteCart} />
    <Card2 onAddToCart={onAddToCart} data={data} />
    </div>
  )
}

export default App
