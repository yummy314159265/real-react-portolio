import React from 'react';
import './style.css';

export default function Project({index, handleImgChange, handleSelectedChange, lgImg, smImg, alt, github, deployment, selected}) {
    return (
        <figure className={(selected === index) ? 'tile is-child image is-2by1 no-blur' : 'tile is-child image is-2by1 blur'}>
            <a
                href='#portfolio'
                onMouseEnter={() => handleSelectedChange(index)}
                onMouseLeave={() => handleSelectedChange()}
                onClick={()=> handleImgChange(lgImg, github, deployment)}    
            >
                <img className='box' src={smImg} alt={alt} />
            </a>
        </figure>
    )
}