import Rectangle136 from '../img/Rectangle 136.png'
import Rectangle137 from '../img/Rectangle 137.png'
import Rectangle138 from '../img/Rectangle 138.png'
import Rectangle139 from '../img/Rectangle 139.png'
import Rectangle141 from '../img/Rectangle 141.png'

import React from 'react'
//import { useEffect } from 'react'

const SectionSix = () => {

  const arrowLeft = React.useRef(null)
  const arrowRight = React.useRef(null)

  const productsImages = React.useRef(null)
  const productsImagesBefore = React.useRef(null)

  let inc = 0

  // useEffect(() => {
  //   if(inc === 0){
  //    arrowLeft.disabled = true
  //   }
  // })
  
  const moveRight = () => {
    inc++;
    arrowLeft.current.disabled = false

   if(inc === 1){
    productsImages.current.style.transform = 'translateX(366px)';
    productsImagesBefore.current.style.transform = 'translateX(378px)';
   } 

   if(inc === 2){
    productsImages.current.style.transform = 'translateX(116px)';
    productsImagesBefore.current.style.transform = 'translateX(128px)';
  }
  if(inc === 3){
    productsImages.current.style.transform = 'translateX(-134px)';
    productsImagesBefore.current.style.transform = 'translateX(-118px)';
  }
  if(inc === 4){
    productsImages.current.style.transform = 'translateX(-384px)';
    productsImagesBefore.current.style.transform = 'translateX(-368px)';
  }
  if(inc === 5){
    productsImages.current.style.transform = 'translateX(-634px)';
    productsImagesBefore.current.style.transform = 'translateX(-618px)';
    arrowRight.disabled = true
  }

  if(inc === 5){
    productsImages.current.style.marginLeft = '24px'
  } else {
    productsImages.current.style.marginLeft = '16px'
  }

  console.log(inc)
  }
  
  const moveLeft = () => {
    inc--
    arrowRight.current.disabled = false

    if(inc === 4){
      productsImages.current.style.transform = 'translateX(-384px)';
      productsImagesBefore.current.style.transform = 'translateX(-368px)';
      productsImages.current.style.marginLeft = '16px';
    }
    if(inc === 3){
      productsImages.current.style.transform = 'translateX(-134px)';
      productsImagesBefore.current.style.transform = 'translateX(-118px)';
    }
    if(inc === 2){
      productsImages.current.style.transform = 'translateX(116px)';
      productsImagesBefore.current.style.transform = 'translateX(128px)';
    }
    if(inc === 1){
      productsImages.current.style.transform = 'translateX(366px)';
      productsImagesBefore.current.style.transform = 'translateX(378px)';
     }
     if(inc === 0){
      productsImages.current.style.transform = 'translateX(616px)';
      productsImagesBefore.current.style.transform = 'translateX(628px)';
      arrowLeft.current.disabled = true
     }

     console.log(inc)
  }

  return ( 
    <section className="section-six">
    <h3>Nasi Proizvodi</h3>
    <div className="bottom-line-grey"></div>
    <div className="our-products-text">
      <p>Nase Proizvode DVG Cosmetics odlikuje visok kvalitet kojim se dobija kompletna
      nega lica i tela. Uspeli smo da uskladimo kvalitet i cenu, sto su prepoznali i nasi
      kupci</p>
    </div>
    <div className="products-slider">
      <div className="arrow-left">
        <button className="arrow-left-icon" onClick={moveLeft} ref={arrowLeft} disabled={inc === 0}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
      </div>
      <div className="arrow-right">
        <button className="arrow-right-icon" onClick={moveRight} ref={arrowRight}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <div className="products-images-before" ref={productsImagesBefore}>
        <div id="image-1">
          <img src={Rectangle136} alt=""/>
          <p>KESE I FOLIJE</p>
          <div className="bottom-line-red"></div>
        </div>
        <div id="image-2">
          <img src={Rectangle137} alt=""/>
          <p>ZA KUHINJU</p>
          <div className="bottom-line-red"></div>
        </div>
        <div id="image-3">
          <img src={Rectangle138} alt=""/>
          <p id="upper-text">UBRUSI I</p>
          <p>TOALET PAPIRI</p>
          <div className="bottom-line-red"></div>
        </div>
        <div id="image-4">
          <img src={Rectangle139} alt=""/>
          <p>KOZMETIKA</p>
          <div className="bottom-line-red"></div>
        </div>
        <div id="image-5">
          <img src={Rectangle141} alt=""/>
          <p>PLASTICNE KANTE</p>
          <div className="bottom-line-red"></div>
        </div>
      
      </div>

      <div className="products-images" ref={productsImages}>
        <div id="image-1">
          <img src={Rectangle136} alt=""/>
          <p>KESE I FOLIJE</p>
          <div className="bottom-line-red"></div>
        </div>
        <div id="image-2">
          <img src={Rectangle137} alt=""/>
          <p>ZA KUHINJU</p>
          <div className="bottom-line-red"></div>
        </div>
        <div id="image-3">
          <img src={Rectangle138} alt=""/>
          <p id="upper-text">UBRUSI I</p>
          <p>TOALET PAPIRI</p>
          <div className="bottom-line-red"></div>
        </div>
        <div id="image-4">
          <img src={Rectangle139} alt=""/>
          <p>KOZMETIKA</p>
          <div className="bottom-line-red"></div>
        </div>
        <div id="image-5">
          <img src={Rectangle141} alt=""/>
          <p>PLASTICNE KANTE</p>
          <div className="bottom-line-red"></div>
        </div>
      
      </div>
    </div>
  </section>
   );
}
 
export default SectionSix;