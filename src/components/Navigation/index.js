import React, { useState }from 'react';

export default function Navigation({ currentPage, handlePageChange }) {

  const [isActive, setIsActive] = useState(false);

  return (
    <nav className='navbar  is-info' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand is-fullheight'>
        <p className='navbar-item is-size-2'>
          Rodin Grajo
        </p>

        <button
          onClick={() => setIsActive(!isActive)} 
          className={`navbar-burger is-align-self-center ${isActive ? 'is-active' : ''} `} 
          aria-label='menu' 
          aria-expanded='false'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </button>
      </div>

      <div className={`navbar-menu  ${isActive ? 'is-active' : ''}`}>
        <div className='navbar-end'>
          <a 
            className={currentPage === 'About Me' ? 'navbar-item has-text-dark is-size-3' : 'navbar-item is-size-3'} 
            href='#about-me' 
            onClick={()=>handlePageChange('About Me')}
          >
            About Me
          </a>

          <a 
            className={currentPage === 'Portfolio' ? 'navbar-item has-text-dark is-size-3' : 'navbar-item is-size-3'} 
            href='#portfolio' 
            onClick={()=>handlePageChange('Portfolio')}
          >
            Portfolio
          </a>

          <a 
            className={currentPage === 'Contact' ? 'navbar-item has-text-dark is-size-3' : 'navbar-item is-size-3'} 
            href='#contact' 
            onClick={()=>handlePageChange('Contact')}
          >
            Contact
          </a>

          <a 
            className={currentPage === 'Resume' ? 'navbar-item has-text-dark is-size-3' : 'navbar-item is-size-3'} 
            href='#resume' 
            onClick={()=>handlePageChange('Resume')}
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}