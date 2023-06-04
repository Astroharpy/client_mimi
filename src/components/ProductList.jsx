import React from 'react'
import ProductItem from './ProductItem'
import useProduct from '../hooks/useProduct'

const ProductList = () => {
    
    const {products} = useProduct()



  return (  
    <div className="">
        <span className="bg-black text-white mx-4 px-2" >Top Sellers</span>
        <ul className='grid grid-cols-2 px-4 gap-2 md:grid-cols-3 md:mx-20 md:gap-20' >
            
            {products? products.map(item => <ProductItem key={item.name} name={item.name} price={item.price} imageUrl={item.imageUrl}/>) : <p>no products</p>}
        </ul></div>
  )
}

export default ProductList