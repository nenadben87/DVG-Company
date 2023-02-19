import Logo from '../img/Logo.png'
import LogoPieceOne from '../img/Logo-piece-1.png'
import LogoPieceTwo from '../img/Logo-piece-2.png'
import LogoPieceThree from '../img/Logo-piece-3.png'
import FooterImage from '../img/footer-image.png'

const SectionEight = () => {
  return ( 
    <footer className="section-eight" style={{
      background: `url(${FooterImage}) no-repeat center center/cover`
    }}>
   <div className="upper-footer">
    <div className="company-logo">
      <img src={Logo} alt="" id="logo"/>
      <img src={LogoPieceOne} alt="" id="logo-piece-1"/>
      <img src={LogoPieceTwo} alt="" id="logo-piece-2"/>
      <img src={LogoPieceThree} alt="" id="logo-piece-3"/>
    </div>
    <div className="company-contact">
      <h2>D.V.G Company</h2>
       <div className="address">
        <div className="address-icon">
          <i className="fa-solid fa-location-dot"></i>
        </div>
        <div className="address-text">
          <p>Cantavirski put bb</p>
          <p>24000 Subotica</p>
        </div>
       </div>

       <div className="phone">
        <div className="phone-icon">
          <i className="fa-solid fa-phone"></i>
        </div>
        <div className="phone-text">
          <p>+381 24 568 555</p>
        </div>
       </div>

       <div className="email">
        <div className="email-icon">
          <i className="fa-solid fa-envelope"></i>
        </div>
        <div className="email-text">
          <p>office@dvgcompany.com</p>
        </div>
       </div>
    </div>

    <div className="footer-navigation">
     <li> <a href="http://google.com">O NAMA</a> </li>
     <li> <a href="http://google.com">DVG PROIZVODI</a> </li>
     <li> <a href="http://google.com">BRENDOVI</a> </li>
     <li> <a href="http://google.com">DISTRIBUCIJA</a> </li>
     <li> <a href="http://google.com">SARADNJA</a> </li>
     <li> <a href="http://google.com">NOVOSTI</a> </li>
     <li> <a href="http://google.com">KONTAKT</a> </li>
    </div>

    <div className="follow-us">
      <p>Pratite nas:</p>
      <div className="social-icons">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-youtube"></i>
        <i className="fa-brands fa-facebook-messenger"></i>
      </div>
    </div>
   </div>

   <div className="copyright">
    <p id="first-p">Copyright &copy; 2021 DVG Company, Subotica d.o.o. Sva prava zadrzana</p>
    <div className="middle-paragraph">
     <p className="with-bottom-line">Privatnost podataka</p>
     <p className="with-bottom-line">Uslovi koriscenja</p>
    </div>
    <p>Powered by: Studio Present</p>
   </div>
  </footer>
   );
}
 
export default SectionEight;