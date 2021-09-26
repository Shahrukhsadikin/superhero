import React from 'react';

const Cart = (props) => {
    const {cart}=props;
    let total=0;
    for(const actor of cart){
        total=total+actor.salary;
    }
    let name=[]
    for(const actor of cart){
        name=name+actor.name;
    }
    return (
        <div>
            <h2>select actor</h2>
            <h3>actor:{props.cart.length}</h3>
            <h4>total salary:${total}</h4>
           
                <li>
                actor-name: {name}
                </li>
            
        </div>
    );
};

export default Cart;