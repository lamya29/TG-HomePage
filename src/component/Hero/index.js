import React from 'react';
import './style.css';


const Hero = () => {
    return (
        <section className="heroSection">
        <div className='mockup'>
                <img src="./images/Work.svg" alt="mockup" className="mockup-img"/>
            </div>
            <div className="heroSection-container">
        <div className="content">
            <h1> تعلم و تخصص</h1>
            <h1>    بمستوى  <span> جامعي</span></h1>
            <h1>   متاح للجميع بالمجان  </h1>
           
            <button className="request"> انضم لنا الان  </button>
            <p>
           متوفر على 
            </p>
            <div className="store">
            <img src="./images/google store.svg" alt="google"/>
            <img src="./images/app store.svg" alt="app"/>
          </div>
          </div>
        </div>
      </section>
    
        )
    }    
 export default Hero ;