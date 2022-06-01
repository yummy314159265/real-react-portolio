import React, { useState } from 'react';
import Navigation from '../Navigation/index.js';
import Portfolio from '../Portfolio/index.js';
import Contact from '../Contact/index.js';
import Footer from '../Footer/index.js';
import AboutMe from '../AboutMe/index.js';
import Resume from '../Resume/index.js';
import './style.css';

export default function Container() {
    const [currentPage, setCurrentPage] = useState('About Me');

    const renderPage = () => {
        if (currentPage === 'About Me') {
            return <AboutMe />
        }

        if (currentPage === 'Portfolio') {
            return <Portfolio />
        }

        if (currentPage === 'Contact') {
            return <Contact />
        }

        if (currentPage === 'Resume') {
            return <Resume />
        }
    }

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }
    return (
        <div className='is-flex is-flex-direction-column is-fullheight'>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
            <section className='section'>
                {renderPage()}
            </section>
            <Footer />
        </div>
    );
}