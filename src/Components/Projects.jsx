import React, { useEffect, useState } from "react";
import "./Projects.css";

function Projects(slides) {
  const [active, setActive] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    function scrollAnimation() {
      const animationPoint = 300;
      const windowHeight = window.innerHeight;
      const collection = document.querySelector(".collection");
      let collection_top = collection.getBoundingClientRect().top;

      if (collection_top < windowHeight - animationPoint) {
        setActive(true);
      }
    }
    scrollAnimation();
    window.addEventListener("scroll", scrollAnimation);
  }, []);

  return (
    <div className={`collection ${active && "active"}`} id="Collection">
      <h1>
        my <span>Projects</span>
      </h1>
      <div className="projects">
        
      </div>
    </div>
  );
}

export default Projects;
