import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import useProduct from '../hooks/useProduct'

//TODO add loading spinner

const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1)
    const {id} = useParams()
    const {products, updateBag} = useProduct()
    const product = products[products.findIndex(current => current.name === id)]
    const inputQuantityHandle = (e) =>{
        let current = e.target.value 

        setQuantity(current)

    }

    const incrementHandle = (e) =>{
        let current = quantity

        setQuantity(+current +1)
    }

    const decrementHandle = (e) =>{
        let current = quantity
        setQuantity(+current -1)
    }

    if(quantity === 0){
        setQuantity(1)
    }

    const updateHandle = ()=>{
        updateBag({name: product.name, quantity: quantity, price: product.price, imageUrl: product.imageUrl})
    }
    
    

  return (


    
    <div className='px-4 h-screen md:px-40'>
        <div className="md:grid md:grid-cols-2 md:py-10">
         {product? <>
            <div className="">
                <img src={product.imageUrl}alt={id} />
            </div>

            <div className='text-center'>
        
                <p className='text-2xl font-bold my-4'>{product.name}</p>
                <p className='my-4'>R {product.price}.00</p>
                <div className='flex-col text-center'> 
                    
                    Quantity 
                    <div className='border flex justify-evenly border-black p-2 w-4/12 mx-auto'>
                        <button disabled={quantity === 1} className="font-bold" onClick={decrementHandle}>-</button>
                            <input type="number" value={quantity || ''} min={1} className="w-8 text-center" onChange={inputQuantityHandle}/>
                        <button className='font-semibold' onClick={incrementHandle}>+</button>
                    </div>

                </div>       

                <div className="flex-col content-center">
                    <button className="block border border-black w-11/12 p-2 my-4 mx-auto" onClick={updateHandle}>ADD TO BAG</button>

                    <button className="block border border-black w-11/12 p-2 my-4 bg-black text-white mx-auto">CHECKOUT</button>
                </div>

                <p className='text-center'>{product.description}
                </p>
            </div>
            </>: <p>Lodding</p>}

        </div>
    </div>


  )
}

export default ProductDetails