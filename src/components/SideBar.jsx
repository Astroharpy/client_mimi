import useProduct from '../hooks/useProduct';
import SideBarItem  from './SideBarItem';
import { Cross } from './Icons';
import {Link} from 'react-router-dom';



const SideBar = (props) => {
    const {products, bag} = useProduct();
    const total = 0;


  return (
    <div className=' h-screen bg-stone-50 fixed top-0 right-0 w-10/12  md:w-1/3 drop-shadow-2xl z-20'>

    <div className="flex justify-between p-2" > <h2 className='text-xl font-extrabold' >Bag</h2>
        <button onClick={props.toggle}><Cross  color = {"black"}/></button>
    </div>
        
        { bag.map(item => <SideBarItem products={products} quantity={item.quantity} name={item.name} imageUrl={item.imageUrl} price={item.price}/> )}
        
        {bag.length >=1 ? <div className="flex-col content-center">
                <div className="">Total :  {total}</div>
                <Link to="/checkout"><button onClick={props.toggle} className="block border border-black w-11/12 p-2 my-4 bg-black text-white mx-auto">CHECKOUT</button></Link>
        </div> : <p className='text-center py-20'>No items on cart</p>}
    </div>
  )
}

export default SideBar
