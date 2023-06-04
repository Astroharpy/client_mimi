import React from 'react'
import { useNavigate } from 'react-router-dom'
const ProductItem = (props) => {
    const navigate  = useNavigate()

    const goToDetails =()=>{
        navigate(`/products/${props.name}`, {state:{...props}})
    }
  return (
   
        <li className='my-4 shadow-xl pb-4'>
            <img onClick={goToDetails} src={props.imageUrl} alt={props.item} />
            <div className='text-center'>
                <p>{props.name}</p>
            <p className='font-bold'>R {props.price}.00</p>

            </div>
            
        </li>

  )
}

export default ProductItem