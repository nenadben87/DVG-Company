import React from 'react'
import { useEffect } from 'react';

import SliderImageOne from '../img/slider-image-1.png'
import SliderImageTwo from '../img/slider-image-2.jpg'
import SliderImageThree from '../img/slider-image-3.jpg'
import SliderImageFour from '../img/slider-image-4.jpg'

const Showcase = () => {
  const imageOne = React.useRef(null)
  const imageTwo = React.useRef(null)
  const imageThree = React.useRef(null)
  const imageFour = React.useRef(null)

  const circleOne = React.useRef(null)
  const circleTwo = React.useRef(null)
  const circleThree = React.useRef(null)
  const circleFour = React.useRef(null)

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
    <div className="showcase">
      <div className="hamburger-nav">
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
      <i className="fa-solid fa-chevron-left" id="chevron-left" onClick={backwardImage}></i>
      <i className="fa-solid fa-chevron-right" id="chevron-right" onClick={forwardImage}></i>

      <div className="circles">
      <div className="circle-1" onClick={showOne} ref={circleOne}></div>
      <div className="circle-2" onClick={showTwo} ref={circleTwo}></div>
      <div className="circle-3" onClick={showThree} ref={circleThree}></div>
      <div className="circle-4" onClick={showFour} ref={circleFour}></div>
      </div>
    </div>
   );
}
 
export default Showcase;