import React from 'react';
import './Card.css';

const Card = ({cart,handleRemoveCart}) => {
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
            <div className='card'>
            <h5 className={cart.length === 1 ? 'red' : 'blue'} >Order Summary {cart.length}</h5>
            <p className={`bold bordered ${cart.length===3? 'yellow': 'card'}`}>something wrong</p>
            {cart.length === 2 ?
             <span className='card'>Aro kino</span> :
              <span>Fokira</span>}
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
       
        </div>
    );
};

export default Card;

/**
 * conditional rendering
 * 1. use if or if else to set a variable that contain an element, components ,div, h1
 * 2. ternary: condition ? 'for true ': 'false'
 * 3. logical &&: (if the conditional is true then the next thing will be displayed ) 
 * 4. logical || (if the condition is false then the next thing will be displayed)
 */

/**
 * conditional css class
 * 1. use ternary
 * 2. ternary template string
 */