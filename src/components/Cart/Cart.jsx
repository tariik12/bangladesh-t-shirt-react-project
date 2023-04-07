import React from 'react';
import './Cart.css'

const Cart = ({cart,handleRemoveCart}) => {
    let  message;
    if(cart.length === 0){
        message = <p>Please add some any product</p>
    }
    else{
       message =<div>
          <h3>Boroloxxx</h3>
        <p><small>Thanks for buy product</small></p>
       </div>
    }
    return (
        <div>
            <h5 className={cart.length === 1 ? 'blue' : 'red'}>Order Summary {cart.length}</h5>
            {cart.length> 2 ? <span className='purple'>Aro kino</span> : <span>Fokira</span>}
                {message}
            {
            cart.map(tshirt =><p key={tshirt._id}>{tshirt.name} <button onClick={() =>handleRemoveCart(tshirt._id)}>X</button></p>)
        }
        {
            cart.length === 2 && <p>Double bonanza!!!</p>
        }
        {
            cart.length === 3 || <h3>Tinta to hoilona</h3>
        }
        </div>
    );
};

export default Cart;

/**
 * conditional rendering
 * 1. use if or if else to set a variable that contain an element, components ,div, h1
 * 2. ternary: condition ? 'for true ': 'false'
 * 3. logical &&: (if the conditional is true then the next thing will be displayed ) 
 * 4. logical || (if the condition is false then the next thing will be displayed)
 */

/**
 * conditional css class
 */