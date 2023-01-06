import React from 'react'
import './Home.css';
import bg from '../assets/photo1.jpg';


function Home() {
  return (
    <div className='Home' id='Home'>
        <div className="bg">
            <img src={bg} alt="photo1" />
        </div>
        
        <div className="content">
            <h1>
                <c>eXplore</c> my <d>portfolio</d>
            </h1> 

            <a href="#collection" className='show-me'>
                <span> show me</span>
                 </a>
        </div>
    </div>
  )
}

export default Home