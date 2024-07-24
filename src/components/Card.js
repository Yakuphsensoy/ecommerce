import React from 'react';
import "../styles/Card.css";
import { useNavigate } from 'react-router-dom';

export default function Card({ name, weight, price, oldPrice, discount, unit, img, slug }) {
    const navigate = useNavigate();

    return (
        <div className="card" onClick={() => navigate(`/product/${slug}`)}>
            <div className="img">
                <img src={img} />
            </div>
            <div className="cardContent">
                <p className='name'>{name}</p>
                <p className='weight'>{weight} {unit}</p>
                <div className="discountHandle">
                    {oldPrice && <p className='oldPrice'><s>{oldPrice}</s></p>}
                    {discount ? (<p className='discount'>%{discount}<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.10419 1.35419L8.39585 8.64585M8.39585 8.64585V1.35419M8.39585 8.64585H1.10419" stroke="#5B1128" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    </p>) : (<div className='empty'></div>)}
                </div>
                <p className='price'>{price}TL</p>
            </div>
        </div>
    )
}
