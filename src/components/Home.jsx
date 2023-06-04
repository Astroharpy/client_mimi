import React from 'react'
import { Link } from 'react-router-dom'
import { Logo, LeaveIcon, GiftIcon } from './Icons'

const Home = () => {
  const name = "Ever Green Pastures"
  const slogan = "providing womth and life to you house"
  const about = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, facilis sunt. Iste dignissimos nam non soluta labore at vitae nostrum dolorum, dolorem necessitatibus ullam esse quisquam id accusantium praesentium? Asperiores perferendis, hic eveniet consequatur similique, quaerat, provident necessitatibus quas distinctio nulla quos aliquid molestiae? Illo molestiae ratione iure aspernatur rem!"
  return (
    <div className="">
      <div className="bg-cover bg-center w-full h-cover text-center reletive" style={{backgroundImage: `url("/images/bg_def.jpg")`}}>
          <div className="flex justify-around pt-24">  </div>
          <h1 className='text-white text-3xl font-bold pt-12 md:text-6xl xl:text-8xl uppercase '>{name}</h1>
          <h2 className="text-white text-2xl px-12 pt-12 pb-32 uppercase xl:text-4xl md:text-2xl">{slogan}</h2>
          <Link className='text-white bg-orange-400 px-6 py-2 text-2xl font-bold uppercase md:text-2xl md:px-10 md:py-2 xl:text-3xl xl:px-16 xl:py-3' to="products" >Shop Now</Link>  
      </div>
        <div className="h-cover py-32 px-5 md:px-60 md:py-60 bg-green-500 text-white">
          <h3 className='uppercase text-center md:text-4xl mb-10'>about</h3>
          <p className='text-center md:text-2xl mb-10'>{about}</p>

             <div className="flex-col md:grid md:grid-cols-2 md:gap-10 justify-center text-center">
                <div className="flex-col justify-center mb-10 md:mb-0">
                  <div className="flex justify-center"><LeaveIcon /></div>
                  <p className='text-xl'>use as center piece</p>
                </div>
                <div className="flex-col justify-center">
                  <div className="flex justify-center"><GiftIcon /></div>
                  <p className='text-xl'>Send as a gift</p>
                </div>
             </div>
        </div>
    </div>
  )
}

export default Home