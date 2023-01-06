import React, {useEffect, useState} from 'react'
import './Collection.css'


function Collection() {
  const [active, setActive] = useState(false);


  useEffect(() => {
function scrollAnimation() {
  const animationPoint = 300;
  const windowHeight = window.innerHeight;
  const collection = document.querySelector(".collection");
  let collection_top = collection.getBoundingClientRect().top;

  if(collection_top < windowHeight - animationPoint) {
    setActive(true);
  }
 }
 scrollAnimation();
 window.addEventListener("scroll", scrollAnimation);

  }, []);


  return (
    <div className={`collection ${active && "active"}`}
     id="Collection">
        <h1>
        my <span>Projects</span>
        </h1>
        <div className="collection-container">
            <div className="cl-row row1">
                <div className="project1"></div>
                <div className="project2"></div>
                <div className="project3"></div>
            </div>
        </div>
    </div>
  )
}

export default Collection