import React from 'react';
import './TShirt.css'
const TShirt = ({t_shirt,handleAddToCart}) => {

const {name,picture,price,gender,_id} = t_shirt;


    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>Price: $ {price}</p>
            <button onClick={()=>handleAddToCart(t_shirt)}>Buy Now</button>

        </div>
    );
};

export default TShirt;