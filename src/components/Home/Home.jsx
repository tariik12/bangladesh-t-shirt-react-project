
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css'
import { ToastContainer, toast } from 'react-toastify';
import Card from '../Card/Card';



const Home = () => {
    const t_shirts = useLoaderData();
  const [cart,setCart] =useState([]);

  const handleAddToCart =(t_shirts) =>{
   const exists = cart.find(ts => ts._id === t_shirts._id)
   if(exists){
    toast("Wow so easy!");
   }
   else{
    const newCart = [...cart, t_shirts]
    setCart(newCart)
   }


  }
  
  const handleRemoveCart =(id) =>{
      const remaining = cart.filter(ts => ts._id !== id)
    // console.log(id)
    setCart(remaining)
  }

    return (
        <div className='home-container'>
           
          <div className='t-shirt-container'>
          {
            t_shirts.map((t_shirt,index) => 
            <TShirt
            handleAddToCart={handleAddToCart}
            t_shirt={t_shirt}
            key={index}
            />
              
                )
          }
          </div>
          <div className='cart-container'>
          <Card 
          cart ={cart}
          handleRemoveCart={handleRemoveCart}
          />
          </div>
        </div>
    );
};

export default Home;