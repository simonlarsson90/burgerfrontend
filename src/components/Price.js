import React, {useContext} from 'react';
import { CartContext } from './CartContext';

export const Price = (props) => {
    const [cart, setCart] = useContext(CartContext);

    const addToCart = () => {
        const burger = { name: props.name, price: props.price };
        setCart(currentState => [...currentState, burger]);
    }

    return (
        <div>
            <h2>{props.name}</h2>
            <h4>Price: {props.price}</h4>
            <button onClick={addToCart}>Add to cart</button>
        </div>
    )

}

