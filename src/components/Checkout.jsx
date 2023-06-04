import React, {useEffect} from 'react'

import { Outlet, Link } from 'react-router-dom'


const Checkout= () => { 



    
    return (
        <div className='grid w-screen place-content-center content-center h-fit'> 
            <nav className=''>
            <Link  className='mr-2' to="/checkout">Details</Link> 
            <Link  className='mx-2' to="/checkout/shipping">Shipping</Link> 
            <Link  className='mx-2' to="/checkout/payment">Payment</Link></nav>
            <h1 className='py-4'>Checkout</h1>

        <Outlet />
        </div>
      )
}

export default Checkout