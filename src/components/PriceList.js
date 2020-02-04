import React, { useState, useEffect } from 'react'
import axios from 'axios';

import { Price } from './Price';

export const PriceList = () => {

    const [data, setData] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:5000/ingridient")
            .then(res => {
                setData(res.data)
            })
    }, [])


    return (

        <div>
            
            {
                data.map(item => (
                    <Price name={item.ingridientName} price={item.price} key={item.id} />
                ))
            }

        </div>
    );
}

