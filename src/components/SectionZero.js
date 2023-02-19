import React from 'react'

 import Logo from '../img/Logo.png';
 import LogoPieceOne from '../img/Logo-piece-1.png';
 import LogoPieceTwo from '../img/Logo-piece-2.png';
 import LogoPieceThree from '../img/Logo-piece-3.png';

 import { useEffect } from 'react';

import SliderImageOne from '../img/slider-image-1.png'
import SliderImageTwo from '../img/slider-image-2.jpg'
import SliderImageThree from '../img/slider-image-3.jpg'
import SliderImageFour from '../img/slider-image-4.jpg'

const body = document.querySelector('body')

const SectionZero = () => {
  const lightDarkBtn = React.useRef(null)
  const hamburger = React.useRef(null)
  const hamLineOne = React.useRef(null)
  const hamLineTwo = React.useRef(null)
  const hamLineThree = React.useRef(null)

  const imageOne = React.useRef(null)
  const imageTwo = React.useRef(null)
  const imageThree = React.useRef(null)
  const imageFour = React.useRef(null)

  const circleOne = React.useRef(null)
  const circleTwo = React.useRef(null)
  const circleThree = React.useRef(null)
  const circleFour = React.useRef(null)

  const chevronLeft = React.useRef(null)
  const chevronRight = React.useRef(null)

  const hamburgerNav = React.useRef(null)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.pageYOffset > 299){
        hamburgerNav.current.classList.remove('active')
      }
    })
  })

  const changeColorMode = () => {
    lightDarkBtn.current.classList.toggle('dark')
    body.classList.toggle('dark')

    if(lightDarkBtn.current.classList.contains('dark')){
      lightDarkBtn.current.textContent = 'Light Mode'
    } else {
      lightDarkBtn.current.textContent = 'Dark Mode'
    }
   }

   const toggleHamburger = () => {
    hamburger.current.classList.toggle('active')
    hamLineTwo.current.classList.toggle('active');
    hamLineOne.current.classList.toggle('active');
    hamLineThree.current.classList.toggle('active');
    hamburgerNav.current.classList.toggle('active');

    if(hamburgerNav.current.classList.contains('active')){
      chevronLeft.current.style.zIndex = '-1'
      chevronRight.current.style.zIndex = '-1'
  
      circleOne.current.style.zIndex = '-1'
      circleTwo.current.style.zIndex = '-1'
      circleThree.current.style.zIndex = '-1'
      circleFour.current.style.zIndex = '-1'
    } else {
      chevronLeft.current.style.zIndex = '1'
      chevronRight.current.style.zIndex = '1'
  
      circleOne.current.style.zIndex = '1'
      circleTwo.current.style.zIndex = '1'
      circleThree.current.style.zIndex = '1'
      circleFour.current.style.zIndex = '1'
    }
   }

   let i = 0

   useEffect(() => {
    if(i === 0) {
      imageOne.current.classList.add("active");
      circleOne.current.classList.add("active");
  
      imageTwo.current.classList.remove("active");
      circleTwo.current.classList.remove("active");
      imageThree.current.classList.remove("active");
      circleThree.current.classList.remove("active");
      imageFour.current.classList.remove("active");
      circleFour.current.classList.remove("active");
  }
  })

  const forwardImage = () => {
    i++
    if(i === 1) {
      imageOne.current.classList.remove("active");
      circleOne.current.classList.remove("active");
      imageThree.current.classList.remove("active");
      circleThree.current.classList.remove("active");
      imageFour.current.classList.remove("active");
      circleFour.current.classList.remove("active");
  
      imageTwo.current.classList.add("active");
      circleTwo.current.classList.add("active");
     }

     if(i === 2) {
      imageOne.current.classList.remove("active");
      circleOne.current.classList.remove("active");
      imageTwo.current.classList.remove("active");
      circleTwo.current.classList.remove("active");
      imageFour.current.classList.remove("active");
      circleFour.current.classList.remove("active");
      
      imageThree.current.classList.add("active");
      circleThree.current.classList.add("active");
     } 

     if(i === 3) {
      imageOne.current.classList.remove("active");
      circleOne.current.classList.remove("active");
      imageTwo.current.classList.remove("active");
      circleTwo.current.classList.remove("active");
      imageThree.current.classList.remove("active");
      circleThree.current.classList.remove("active");
      
      imageFour.current.classList.add("active");
      circleFour.current.classList.add("active");
     }

     if(i > 3) {
      i = 0;
    }

    if(i === 0) {
      imageOne.current.classList.add("active");
      circleOne.current.classList.add("active");
  
      imageTwo.current.classList.remove("active");
      circleTwo.current.classList.remove("active");
      imageThree.current.classList.remove("active");
      circleThree.current.classList.remove("active");
      imageFour.current.classList.remove("active");
      circleFour.current.classList.remove("active");
    }
  }

  const backwardImage = () => {
    i--
    if(i === 2) {
      imageOne.current.classList.remove("active");
      circleOne.current.classList.remove("active");
      imageTwo.current.classList.remove("active");
      circleTwo.current.classList.remove("active");
      imageFour.current.classList.remove("active");
      circleFour.current.classList.remove("active");
      
      imageThree.current.classList.add("active");
      circleThree.current.classList.add("active");
     } 

     if(i === 1) {
      imageOne.current.classList.remove("active");
      circleOne.current.classList.remove("active");
      imageThree.current.classList.remove("active");
      circleThree.current.classList.remove("active");
      imageFour.current.classList.remove("active");
      circleFour.current.classList.remove("active");
  
      imageTwo.current.classList.add("active");
      circleTwo.current.classList.add("active");
     }

     if(i === 0) {
      imageOne.current.classList.add("active");
      circleOne.current.classList.add("active");
  
      imageTwo.current.classList.remove("active");
      circleTwo.current.classList.remove("active");
      imageThree.current.classList.remove("active");
      circleThree.current.classList.remove("active");
      imageFour.current.classList.remove("active");
      circleFour.current.classList.remove("active");
    }

    if(i < 0){
      i = 3;
    }

    if(i === 3) {
      imageOne.current.classList.remove("active");
      circleOne.current.classList.remove("active");
      imageTwo.current.classList.remove("active");
      circleTwo.current.classList.remove("active");
      imageThree.current.classList.remove("active");
      circleThree.current.classList.remove("active");
      
      imageFour.current.classList.add("active");
      circleFour.current.classList.add("active");
     }
  }

  //////////// Circles function
  const showOne = () => {
    i = 0

    imageOne.current.classList.add("active");
    circleOne.current.classList.add("active");
  
    imageTwo.current.classList.remove("active");
    circleTwo.current.classList.remove("active");
    imageThree.current.classList.remove("active");
    circleThree.current.classList.remove("active");
    imageFour.current.classList.remove("active");
    circleFour.current.classList.remove("active")
  }
  const showTwo = () => {
    i = 1

    imageOne.current.classList.remove("active");
    circleOne.current.classList.remove("active");
    imageThree.current.classList.remove("active");
    circleThree.current.classList.remove("active");
    imageFour.current.classList.remove("active");
    circleFour.current.classList.remove("active");
  
    imageTwo.current.classList.add("active");
    circleTwo.current.classList.add("active");
  }
  const showThree = () => {
    i = 2

    imageOne.current.classList.remove("active");
    circleOne.current.classList.remove("active");
    imageTwo.current.classList.remove("active");
    circleTwo.current.classList.remove("active");
    imageFour.current.classList.remove("active");
    circleFour.current.classList.remove("active");
      
    imageThree.current.classList.add("active");
    circleThree.current.classList.add("active");
  }
  const showFour = () => {
    i = 3

    imageOne.current.classList.remove("active");
    circleOne.current.classList.remove("active");
    imageTwo.current.classList.remove("active");
    circleTwo.current.classList.remove("active");
    imageThree.current.classList.remove("active");
    circleThree.current.classList.remove("active");
      
    imageFour.current.classList.add("active");
    circleFour.current.classList.add("active");
  }

  return ( 
    <div className="section-zero">
      <nav className="navbar-logo">
      <div className="logo-wrapper">
        <div className="logo">
          <div className="logo-image">
            <img src={Logo} alt="" id="logo"/>
            <img src={LogoPieceOne} alt="" id="logo-piece-1"/>
            <img src={LogoPieceTwo} alt="" id="logo-piece-2"/>
            <img src={LogoPieceThree} alt="" id="logo-piece-3"/>
           </div>
          <div className="logo-title">
          <h2>DVG COMPANY</h2>
          <h3>SUBOTICA</h3>
         </div>
        </div>
        <button className="light-dark-btn" onClick={changeColorMode} ref={lightDarkBtn}>
        Dark Mode
      </button>
      </div>

      <div className="ham-lang">
      <div className="hamburger" onClick={toggleHamburger} ref={hamburger}>
        <div className="ham-line ham-line-1" ref={hamLineOne}></div>
        <div className="ham-line ham-line-2" ref={hamLineTwo}></div>
        <div className="ham-line ham-line-3" ref={hamLineThree}></div>
      </div>

       <div className="languages">
        <a href="http://google.com">Srpski</a>
        <a href="http://google.com">English</a>
        <a href="http://google.com">Magyar</a>
      </div>
      </div>
    </nav>

    <div className="nav-links">
    <div className="link-blank"></div>
    <div className="link" id="first-link">
      <a href="http://google.com">O NAMA</a>
      <p>vizija za uspeh</p>
    </div>
    <div className="link">
      <a href="http://google.com">DVG PROIZVODI</a>
      <p>nasi proizvodi</p>
    </div>
    <div className="link">
      <a href="http://google.com">BRENDOVI</a>
      <p>koje zastupamo</p>
    </div>
    <div className="link">
      <a href="http://google.com">DISTRIBUCIJA</a>
      <p>logistika i operativa</p>
    </div>
    <div className="link">
      <a href="http://google.com">SARADNJA</a>
      <p>prosirenje ponude</p>
    </div>
    <div className="link">
      <a href="http://google.com">NOVOSTI</a>
      <p>aktuelnosti</p>
    </div>
    <div className="link" id="last-link">
      <a href="http://google.com">KONTAKT</a>
      <p>kontaktirajte nas</p>
    </div>
    <div className="link-blank"></div>
   </div>

   <div className="showcase">
      <div className="hamburger-nav" ref={hamburgerNav}>
      <div className="ham-link">
        <a href="http://google.com">O NAMA</a>
        <p>vizija za uspeh</p>
      </div>
      <div className="ham-link">
        <a href="http://google.com">DVG PROIZVODI</a>
        <p>nasi proizvodi</p>
      </div>
      <div className="ham-link">
        <a href="http://google.com">BRENDOVI</a>
        <p>koje zastupamo</p>
      </div>
      <div className="ham-link">
        <a href="http://google.com">DISTRIBUCIJA</a>
        <p>logistika i operativa</p>
      </div>
      <div className="ham-link">
        <a href="http://google.com">SARADNJA</a>
        <p>prosirenje ponude</p>
      </div>
      <div className="ham-link">
        <a href="http://google.com">NOVOSTI</a>
        <p>aktuelnosti</p>
      </div>
      <div className="ham-link">
        <a href="http://google.com">KONTAKT</a>
        <p>kontaktirajte nas</p>
      </div>
    </div>

      <img src={SliderImageOne} alt="" className="image-1" ref={imageOne}/>
      <img src={SliderImageTwo} alt="" className="image-2" ref={imageTwo}/>
      <img src={SliderImageThree} alt="" className="image-3" ref={imageThree}/>
      <img src={SliderImageFour} alt="" className="image-4" ref={imageFour}/>
      <i className="fa-solid fa-chevron-left" id="chevron-left" onClick={backwardImage} ref={chevronLeft}></i>
      <i className="fa-solid fa-chevron-right" id="chevron-right" onClick={forwardImage} ref={chevronRight}></i>

      <div className="circles">
      <div className="circle-1" onClick={showOne} ref={circleOne}></div>
      <div className="circle-2" onClick={showTwo} ref={circleTwo}></div>
      <div className="circle-3" onClick={showThree} ref={circleThree}></div>
      <div className="circle-4" onClick={showFour} ref={circleFour}></div>
      </div>
    </div>
    </div>
   );
}
 
export default SectionZero;