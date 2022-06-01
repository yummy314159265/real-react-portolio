import React from 'react';
import profilePic from './assets/images/profile-pic.jpg'

export default function AboutMe() {
    return (
        <div className='container'>
            <div className='content is-large'>
                <h1 className='is-size-2'>
                    About me
                </h1>
                <figure className='image is-128x128 ml-5'>
                    <img className='is-rounded' src={profilePic} alt='My profile pic' />
                </figure>
                <p className='has-text-justified'>
                    I am a full stack web developer with a passion for coding and an appetite for learning. Growing up, I couldn't wait to get my hands on a computer, and when I finally got one for my 11th birthday, I've never gone a day without using one. 
                    <br />
                    <br />
                    Now, my interest goes beyond simply using a computer — I love getting into the nuts and bolts, discovering just what this thing can do. I've taught myself a lot on my own, and have supplemented that with a wonderful bootcamp that taught me MERN stack. With my skills, I believe I can build any website you can dream up!
                </p>
            </div>
        </div>
    )
}