import React,{useState, useEffect} from 'react'
import axios from 'axios'

const Payment = () => {
  const [form, setForm]  = useState(null)
  useEffect(()=>{
    test()
}, [])

axios.defaults.withCredentials=true

  const test = async () =>{
    const data = [{Data: "ice"}]
    const res = await axios.post("http://localhost:8000/pay",data)


    setForm(res.data);


  }
  

  return (
    <>
  <button onClick={test}>test</button>

<div dangerouslySetInnerHTML={{__html: form}}></div>
 
 </>
  )
}

export default Payment