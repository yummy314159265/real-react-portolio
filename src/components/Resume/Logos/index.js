import React from 'react';
import './style.css';

export default function Logos({columnAmt, columnName, logos}) {
    return (
        <div className={`column has-text-centered is-${12/columnAmt}`}>
            <p className='has-text-weight-semibold'>
                {columnName}
            </p>
            <ul>
                {logos.map((logo, index) => {
                    return (
                        <li key={index}>
                            <img src={logo.img} alt={logo.alt} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}