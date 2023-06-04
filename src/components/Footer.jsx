import React from 'react'

const Footer = () => {
  const contact = "000 000 0000"
  const email = "support@evergreenpastures.co.za"
  const name = "Ever Green Pastures"
  const time = new Date().getFullYear()
  return (
    <div className='bg-black text-white grid justify-center'>
        <h3 className='text-lg font-bold'>Contact Us</h3>
        <div className="flex-col">
            <p>{contact}</p>
            <p>{email}</p>
        </div>
        <p>Copyright {time} {name} All Rights Reserved</p>
        <p>Site By Bongani Ntshangase @ Astro Harpy </p>
    </div>
  )
}

export default Footer