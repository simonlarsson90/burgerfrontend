import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import '../App.css'
import Axios from 'axios';


export const Cart = (props) => {
    const [cart, setCart] = useContext(CartContext);
    const [order, setOrder] = useState([])
    
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
    
    const cancelOrderHandler = () => {
    alert('You clicked on cancel')
    }

    const OrderHandler = () => {
        setOrder([...order,
        {
            price: totalPrice,
            items: cart,
        }])
    };
    console.log(totalPrice)

    const sendOrder = () => {
        Axios.post("http://localhost:5000/burger/", {
            Price: totalPrice,
            Burger: "Burger",
            BorngDetails: ""

        }).then(function (response) {
            console.log(response);
        })
    };
    return (
        <div className='Cart'>
            <span>items in cart : {cart.length}</span>
            <br />
            <span>total price : {totalPrice}</span> <br />
            <button onClick={cancelOrderHandler}>Cancel</button>
            <button onClick={OrderHandler}>Order</button>
            <button onClick={sendOrder}>send order</button>
        </div>
    )
}