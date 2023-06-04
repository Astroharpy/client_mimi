import React , {useState, useRef} from 'react';
import { IKContext, IKUpload } from 'imagekitio-react'
import axios from 'axios';

function Admin() {
  const [isSubimtAllowed, setIseSubmitAllowed] = useState(false)
  const [name, setName] = useState("default-name")
  const [imageUrl, setImageUrl] =  useState(null)
  const publicKey = 'public_UbEw94JoYhbQCkTvs+4daA7QSLQ='
  let urlEndpoint = 'https://ik.imagekit.io/fldpkglpn'
  const authenticationEndpoint = "https://mimi-client.onrender.com/admin/new-product";

  const nameRef = useRef()
  const priceRef = useRef()
  const quantityRef = useRef()
  const descriptionRef = useRef()
  
  
  const onError = (err) => {
    console.log('Error');
    console.log(err);
  };
  
  const onSuccess = (res) => {
    console.log('Success');
    console.log(res);
    setIseSubmitAllowed(true)
    setImageUrl(res.url)
    
  }


  const AddProductHandle = (e) =>{
    e.preventDefault()
    const product = {
      name: nameRef.current.value,
      price: priceRef.current.value,
      quantity: quantityRef.current.value,
      description: descriptionRef.current.value,
      url: imageUrl
    }
    
    axios.post('https://mimi-client.onrender.com/admin/new-product',
      product
    )
  }

  let color  = 'bg-slate-500 text-slate-700 px-4'

  if(isSubimtAllowed){
    color = 'bg-sky-500 text-white px-4'
  }

  const nameChangeHandle = (e) =>{
    setName(nameRef.current.value)
  }


  return (
    <>
      <form className='my-4'>
        <label className='block'>
          <h3>Product Name</h3>
           <input type="text" ref={nameRef} onChange={nameChangeHandle} className='bg-slate-500'/>
        </label>

        <label className='block'>
          <h3>Price</h3>
           <input type="number" ref={priceRef} className='bg-slate-500'/>
        </label>

        <label className='block'>
          <h3>Product Quantity</h3>
           <input type="number" ref={quantityRef} className='bg-slate-500'/>
        </label>

        <label className='block'>
          <h3>Product Discription</h3>
           <input type="text" ref={descriptionRef} className='bg-slate-500'/>
        </label>
      
      <IKContext
        urlEndpoint= {urlEndpoint}
        publicKey={publicKey}
        authenticationEndpoint={authenticationEndpoint} >
          <h3>Product image</h3>
          <IKUpload
            onError={onError}
            onSuccess={onSuccess}
            fileName={name}
            useUniqueFileName={false}
            folder='/mimi'
          />
      </IKContext>
      
        <button disabled = {!isSubimtAllowed} className={`${color}`}  onClick={AddProductHandle} > AddProduct </button>
      </form>
    </>
  )
}

export default Admin;