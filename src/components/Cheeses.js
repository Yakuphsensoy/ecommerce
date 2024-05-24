import React from 'react';
import Card from './Card';
import { useContext, } from 'react';
import { CheesesContext } from '../ContextProvider';
import "../styles/Card.css";

export default function Cheeses() {
    const { cheeses } = useContext(CheesesContext);
    return (
        <div className='cheeseArea'>
            <div className='cheeseTitle'>
                {cheeses.map((cheese) => (
                    <Card
                        key={cheese.id}
                        name={cheese.name}
                        weight={cheese.weight}
                        price={cheese.price}
                        oldPrice={cheese.oldPrice}
                        unit={cheese.unit}
                        discount={cheese.discount}
                        img={cheese.img} />
                ))}
            </div>
        </div>

    )
}