import React from "react"
import { useEffect } from "react"

const Modal = () => {

const modal = React.useRef(null)
const modalBtn = React.useRef(null)
const xMark = React.useRef(null)

let scrollInc = 0
  

useEffect(() => {
  const hamburgerNav = document.querySelector('.hamburger-nav')
  const hamburger = document.querySelector('.hamburger')
  const hamLineTwo = document.querySelector('.ham-line-2')
  const hamLineOne = document.querySelector('.ham-line-1')
  const hamLineThree = document.querySelector('.ham-line-3')

  window.addEventListener('scroll', () => {
    if(window.pageYOffset === 300 && scrollInc === 0){
      modal.current.classList.add('active')
    }
  
    if(modal.current.classList.contains('active')){
      window.scrollTo(0,0)
      hamburgerNav.classList.remove('active')
      hamburger.classList.remove('active')
      hamLineTwo.classList.remove('active')
      hamLineOne.classList.remove('active')
      hamLineThree.classList.remove('active')
    }

    if(window.pageYOffset > 300){
      hamburger.classList.remove('active')
      hamLineTwo.classList.remove('active')
      hamLineOne.classList.remove('active')
      hamLineThree.classList.remove('active')
    }
  })
})

const removeModal = () => {
  scrollInc++
  modal.current.classList.remove('active')
}

  return ( 
    <div className="modal" ref={modal}>
    <div className="modal-window">
    <div className="modal-header">
      <i className="fa-solid fa-x" id="x-mark" onClick={removeModal} ref={xMark}></i>
    </div>
    <div className="modal-body">
      <h3>Subscribe to our Newsletter!</h3>
    </div>
    <div className="modal-footer">
      <button className="modal-btn" onClick={removeModal} ref={modalBtn}>Subscribe</button>
    </div>
   </div>
  </div>
   );
}
 
export default Modal;