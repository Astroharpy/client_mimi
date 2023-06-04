import React from 'react'
import { useState } from 'react'
import {Profile, Burger, Cross, BagIcon}   from './Icons'
import { Link } from 'react-router-dom'
import useProduct from '../hooks/useProduct'


const Header = (props) => {
    const [toggleCross, setToggleCross] = useState(false)
    const isLoggedIn= false
    const {bag} = useProduct();
    const name = "Ever Green Pastures"

    
    const toggleHandle = () =>{
        setToggleCross(!toggleCross)
    }
    
    
  return (
    <header className='flex w-full justify-between px-4 p-2 sticky top-0 bg-black z-50'>
        {toggleCross? <button onClick={toggleHandle}><Cross color={"white"}/> </button>:
         <button onClick={toggleHandle}><Burger /></button>}
        <Link to="/" className='text-white italic font-bold'>{name}</Link>
        <nav className='flex'>
            {isLoggedIn? null : <Link className='mx-2' to='/login'><Profile /></Link>}
            <div className='flex pr-1' onClick={props.toggle}><BagIcon /> { bag.length > 0 ? <span className='text-white fixed top-0 right-2'>{bag.length}</span>: null}</div>
        </nav>
    </header>
  )
}

export default Header