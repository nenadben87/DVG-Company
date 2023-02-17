import Truck from '../img/truck.jpg'

const SectionTwo = () => {
  return ( 
    <section className="section-two" style={{
      background: `url(${Truck}) no-repeat center center/cover`,
      backgroundAttachment: 'fixed'
    }}>
    <div className="parallax-content">
      <h3>POUZDANA DISTRIBUCIJA</h3>
      <div className="parallax-bottom-line"></div>
    </div>
  </section>
   );
}
 
export default SectionTwo;