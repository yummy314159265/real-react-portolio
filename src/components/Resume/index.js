import React from 'react';
import Logos from './Logos/index.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import resume from './assets/download/tech-resume.docx';
// frontend logos
import htmlLogo from './assets/images/frontend-logos/html-logo.png';
import cssLogo from './assets/images/frontend-logos/css-logo.png';
import javascriptLogo from './assets/images/frontend-logos/javascript-logo.png';
import jqueryLogo from './assets/images/frontend-logos/jquery-logo.png';
import reactLogo from './assets/images/frontend-logos/react-logo.png';
import githubLogo from './assets/images/frontend-logos/github-logo.png';
// backend logos
import nodeLogo from './assets/images/backend-logos/node-logo.png';
import expressLogo from './assets/images/backend-logos/express-logo.svg';
import mysqlLogo from './assets/images/backend-logos/mysql-logo.png';
import mongodbLogo from './assets/images/backend-logos/mongodb-logo.png';
import pythonLogo from './assets/images/backend-logos/python-logo.png';
import webpackLogo from './assets/images/backend-logos/webpack-logo.png';
import graphqlLogo from './assets/images/backend-logos/graphql-logo.png';

export default function Resume() {
    const columnAmt = 2;
    
    const frontEndLogos = [
        {
            img: htmlLogo,
            alt: 'html logo',
        },
        {
            img: cssLogo,
            alt: 'html logo',
        },
        {
            img: javascriptLogo,
            alt: 'javascript logo',
        },
        {
            img: jqueryLogo,
            alt: 'jquery logo',
        },
        {
            img: reactLogo,
            alt: 'react logo',
        },
        {
            img: githubLogo,
            alt: 'github logo',
        }
    ]

    const backEndLogos = [
        {
            img: nodeLogo,
            alt: 'node logo',
        },
        {
            img: expressLogo,
            alt: 'express logo',
        },
        {
            img: mysqlLogo,
            alt: 'mysql logo',
        },
        {
            img: mongodbLogo,
            alt: 'mongo db logo',
        },
        {
            img: pythonLogo,
            alt: 'python logo'
        },
        {
            img: webpackLogo,
            alt: 'webpack logo',
        },
        {
            img: graphqlLogo,
            alt: 'graphql logo'
        }
    ]

    return (
        <div className='container'>
            <p className='title is-size-2'>
                <a href={resume} download>
                    Resume <FontAwesomeIcon icon={faDownload} /> 
                </a>
            </p>
            <div className='content is-medium'>
                <div className='columns'>
                    <Logos columnAmt={columnAmt} columnName='Front End' logos={frontEndLogos} />
                    <Logos columnAmt={columnAmt} columnName='Back End' logos={backEndLogos} />
                </div>
            </div>
        </div>
    )
};