import React from 'react';
import githubLogo from './assets/images/logo-github.png';
import linkedInLogo from './assets/images/logo-linkedin.png'
import stackOverflowLogo from './assets/images/logo-stackoverflow.png';
import './style.css';

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='is-flex is-justify-content-center'>
                <ul>
                    <li className='is-inline-flex mr-4'>
                        <a href='https://github.com/yummy314159265' rel="noreferrer" target='_blank'>
                            <img src={githubLogo} alt='Github logo'></img>
                        </a>
                    </li>
                    <li className='is-inline-flex mr-4'>
                        <a href='https://www.linkedin.com/in/rodin-grajo-ba6ba7137/' rel="noreferrer" target='_blank'>
                            <img src={linkedInLogo} alt='Linked In logo'></img>
                        </a>
                    </li>
                    <li className='is-inline-flex mr-4'>
                        <a href='https://stackoverflow.com/users/18106136/rodin-grajo' rel="noreferrer" target='_blank'>
                            <img src={stackOverflowLogo} alt='Stack Overflow logo'></img>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}