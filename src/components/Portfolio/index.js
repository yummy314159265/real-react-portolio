import React, { useState } from 'react';
import Project from './Project/index.js'
import './style.css';
import smApeSimProject from './assets/images/ape-simulator-project/sm.png'
import lgApeSimProject from './assets/images/ape-simulator-project/lg.png'
import smUfoProject from './assets/images/ufo-project/sm.png';
import lgUfoProject from './assets/images/ufo-project/lg.png';
import smTechBlogProject from './assets/images/tech-blog-project/sm.png';
import lgTechBlogProject from './assets/images/tech-blog-project/lg.png';
import smJateProject from './assets/images/jate-project/sm.png';
import lgJateProject from './assets/images/jate-project/lg.png';

export default function Portfolio() {
    const [lgImg, setLgImg] = useState(lgApeSimProject);
    const [lgAlt, setLgAlt] = useState('Ape Simulator project large');
    const [github, setGithub] = useState('https://github.com/yummy314159265/StockMarketSimulator')
    const [deployment, setDeployment] = useState('https://yummy314159265.github.io/StockMarketSimulator/')
    const [selected, setSelected] = useState() 

    const projects = [
        {
            smImg: smApeSimProject,
            lgImg: lgApeSimProject,
            alt: 'Ape Simulator project small',
            github: 'https://github.com/yummy314159265/StockMarketSimulator',
            deployment: 'https://yummy314159265.github.io/StockMarketSimulator/'
        },
        {
            smImg: smTechBlogProject,
            lgImg: lgTechBlogProject,
            alt: 'Tech Blog project small',
            github: 'https://github.com/yummy314159265/TechBlog',
            deployment: 'https://ancient-wildwood-80548.herokuapp.com/'
        },
        {
            smImg: smUfoProject,
            lgImg: lgUfoProject,
            alt: 'UFO project small',
            github: 'https://github.com/yummy314159265/Project2-Heroku',
            deployment: 'https://ufo-project.herokuapp.com/'
        },
        {
            smImg: smJateProject,
            lgImg: lgJateProject,
            alt: 'Just Another Text Editor project small',
            github: 'https://github.com/yummy314159265/JATE',
            deployment: 'https://mighty-tor-43060.herokuapp.com/'
        },
    ]

    const handleSelectedChange = (key) => {
        setSelected(key);
    }
    
    const handleImgChange = (lgImg, github, deployment) => {
        setLgImg(lgImg);
        setGithub(github);
        setDeployment(deployment);

        if (lgImg === lgApeSimProject) {
            setLgAlt('Ape Simulator large');
        }
        
        if (lgImg === lgUfoProject) {
            setLgAlt('UFO project large');
        }

        if (lgImg === lgTechBlogProject) {
            setLgAlt('Tech Blog project large');
        }

        if (lgImg === lgJateProject) {
            setLgAlt('Just Another Text Editor project large');
        }
    }

    return (
        <div className='container'>
            <div className='tile is-ancestor'>
                <div className='tile is-3 is-vertical is-parent'>
                    {projects.map((project, index) => 
                        <Project 
                            key={index}
                            index={index}
                            handleImgChange={handleImgChange} 
                            handleSelectedChange={handleSelectedChange} 
                            smImg={project.smImg} 
                            lgImg={project.lgImg} 
                            alt={project.alt} 
                            github={project.github}
                            deployment={project.deployment}
                            selected={selected} 
                        />
                    )}
                </div>
                <div className='tile is-parent'>
                    <div id='project-links-container' className='box has-background-info'>
                        <a 
                            className='has-text-white is-size-4'
                            href={github}
                            rel='noreferrer'
                            target='_blank'
                        >
                            github |
                        </a>
                        
                        <a 
                            className='has-text-white is-size-4'
                            href={deployment}
                            rel='noreferrer'
                            target='_blank'
                        >
                            {' '}deployment
                        </a>
                    </div>
                    <figure className='tile is-child image is-16by9'>  
                        <img className='box' src={lgImg} alt={lgAlt} />
                    </figure>
                </div>
            </div>
        </div>
    )
}