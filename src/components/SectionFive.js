import Rectangle from '../img/Rectangle140.png'

const SectionFive = () => {
  return ( 
    
    <section className="section-five" style={{
      background: `url(${Rectangle}) no-repeat center center/cover`,
      width: '100%'
    }}>
    <div className="dvg-in-numbers">
    <div className="numbers border-right">
      <h3>3000 m2</h3>
      <p>magacinskog prostora</p>
    </div>
    <div className="numbers border-right">
      <h3>20</h3>
      <p>vozila</p>
    </div>
    <div className="numbers border-right">
      <h3>8</h3>
      <p>komercijalista</p>
    </div>
    <div className="numbers">
      <h3>170</h3>
      <p>brendova</p>
    </div>
   </div>
  </section>
   );
}
 
export default SectionFive;