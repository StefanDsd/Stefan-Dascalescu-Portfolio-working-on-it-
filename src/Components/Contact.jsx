import React, {useEffect, useState} from 'react'
import './Contact.css'
import { BsWhatsapp} from 'react-icons/bs';
import { BsFacebook} from 'react-icons/bs';
import { BsLinkedin} from 'react-icons/bs';
import { BsGithub} from 'react-icons/bs';

function Contact() {
const [active, setActive] = useState(false);

  useEffect(() => {
    function scrollAnimation() {
        const animationPoint = 300;
        const windowHeight = window.innerHeight;
        const contact = document.querySelector(".contact");
        let contact_top = contact.getBoundingClientRect().top;

        if(contact_top < windowHeight - animationPoint) {
            setActive(true);
        }
    }

    scrollAnimation();
    window.addEventListener("scroll", scrollAnimation);
  }, []);

  return (
    <div className={`contact ${active && "active"}`} id="Contact">
        <h1>
            <span> Contact me ! </span> 
             
        </h1>

        <div className="socials">
            <div className="icon" style={{'--c': "#00ff00"}}>
           <BsWhatsapp className='social-icons'/>
           <div className="tooltip">WhatsApp</div>
            </div>

            <div className="icon" style={{'--c': "#1d3fff"}}>
           <BsFacebook className='social-icons'/>
           <div className="tooltip">Facebook</div>
            </div>

            <div className="icon" style={{'--c': "#ff5cff"}}>
           <BsLinkedin className='social-icons'/>
           <div className="tooltip">LinkedIn</div>
            </div>

            <div className="icon" style={{'--c': "#ff0000"}}>
           <BsGithub className='social-icons'/>
           <div className="tooltip">GitHub</div>
            </div>
        </div>
    </div>
  )
}

export default Contact