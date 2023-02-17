 import React from 'react'

 import Logo from '../img/Logo.png';
 import LogoPieceOne from '../img/Logo-piece-1.png';
 import LogoPieceTwo from '../img/Logo-piece-2.png';
 import LogoPieceThree from '../img/Logo-piece-3.png';
 //import Showcase from './Showcase';

 const body = document.querySelector('body')
 //const hamburgerNav = document.querySelector('.hamburger-nav')
 //console.log(Showcase())

const NavbarLogo = () => {
   const lightDarkBtn = React.useRef(null)
   const hamburger = React.useRef(null)
   const hamLineOne = React.useRef(null)
   const hamLineTwo = React.useRef(null)
   const hamLineThree = React.useRef(null)

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
   }

  return ( 
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
   );
}
 
export default NavbarLogo;