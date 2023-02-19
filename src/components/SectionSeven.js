import Dove from '../img/Dove.png'
import Nivea from '../img/Nivea.png'
import Palmolive from '../img/Palmolive.png'
import Vanish from '../img/Vanish.png'
import Ajax from '../img/Ajax.png'
import Cif from '../img/Cif.png'

const SectionSeven = () => {
  return ( 
    <section className="section-seven">
    <div className="title">
     <h3>Istaknuti brendovi za koje radimo distribuciju</h3>
    </div>
    <div className="bottom-line-grey"></div>
    <div className="logos">
      <div className="logo">
        <img src={Dove} alt=""/>
        <p>Dove</p>
      </div>
      <div className="logo">
        <img src={Nivea} alt=""/>
        <p>Nivea</p>
      </div>
      <div className="logo">
        <img src={Palmolive} alt=""/>
        <p>Palmolive</p>
      </div>
      <div className="logo">
        <img src={Vanish} alt=""/>
        <p>Vanish</p>
      </div>
      <div className="logo">
        <img src={Ajax} alt=""/>
        <p>Ajax</p>
      </div>
      <div className="logo">
        <img src={Cif} alt=""/>
        <p>Cif</p>
      </div>
    </div>
    <button className="all-brands-btn">Svi brendovi u nasem portfoliju</button>
  </section>
   );
}
 
export default SectionSeven;