import React from 'react'
import './Home.css';
import bg from '../assets/photo1.jpg';
import Typewriter from 'typewriter-effect'


const introdata = {
  title: "I’m Stefan Dascalescu",
  animated: {
      first: "I love coding",
      second: "I code cool websites",
      third: "I love to travel",
  },
  description: "",
}

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
                  {/* typewritter effect  */}
            <h1 className="typewritter-text">{introdata.title}</h1>
                <h1 className="typewritter-text1">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
        </div>
    </div>
  )
}

export default Home