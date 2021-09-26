import React, { useEffect, useState } from 'react';
import Actor from '../Actor-cart/Actor';
import Cart from '../Cart/Cart';
import './Body.css'
const Body = () => {
    const [actor,setActor] = useState([]);
    const[cart,setCart] =useState([])
    useEffect(()=>{
        fetch('./people.JSON')
        .then(res=>res.json())
        .then(data=>setActor(data))
    },[])
    const handleAddToCart =(actor) =>{
        const newCart =[...cart,actor];
        setCart(newCart);

    }
    return (
        // main continar 
        <div className="row g-0">
            {/* actor section  */}
            <div className="col-sm-6 col-md-9 actors-container">
                {
                    actor.map(actor => <Actor
                    key={actor.id}
                         actor={actor}
                         handleAddToCart={handleAddToCart}/>)
                }
            </div>
            {/* cart section  */}
            <div className="col-6 col-md-3 cart-section">
                <Cart cart={cart}/>
            </div>
        </div>

    );
};

export default Body;