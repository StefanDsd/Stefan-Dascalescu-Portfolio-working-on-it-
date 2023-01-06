import React, { useEffect, useState} from 'react';
import './Section2.css'


// function that will run once when the browser loads //


function Section2() {
const [active, setActive] = useState(false);

useEffect(() => {
    function scrollAnimation(){
        const animationPoint = 300;
        const windowHeight = window.innerHeight;
        const section2 = document.querySelector('.section2');

        let section2_top = section2.getBoundingClientRect().top;

        if(section2_top < windowHeight - animationPoint) {
            setActive(true);
        } 
    }
    scrollAnimation();
    window.addEventListener('scroll', scrollAnimation);
}, [])

  return (
    <div className={`section2 ${active && 'active'}`} id='Section2'>
        <div className="text-content">
            <div className="text text1">
                <h1>
                    How i <span>Started</span>
                </h1>
                <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt numquam enim, hic sit facilis, temporibus rerum corrupti voluptate, doloribus consequuntur commodi labore est a eaque dicta minima adipisci sequi? Ipsum!</h2>
            </div>
            <div className="text text2">
                <h1>
                    <span>Experiences</span> so far
                </h1>
                <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ipsam quis nostrum soluta omnis iure, numquam totam distinctio, harum eum rerum, praesentium hic illum sequi maiores nihil dolores vel perferendis?

                </h2>
            </div>
        </div>

        <div className="progress">
            <div className="container" style={{"--x": 1 }}>
                <h1>1</h1>
                <span>Lorem</span>
            </div>
            <div className="container" style={{"--x": 2 }}>
                <h1>2</h1>
                <span>Lorem</span>
            </div>
            <div className="container" style={{"--x": 3 }}>
                <h1>3</h1>
                <span>Lorem</span>
            </div>
        </div>
    </div>
  )
}

export default Section2