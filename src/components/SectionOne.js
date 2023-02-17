import Rectangle124 from '../img/Rectangle 124.png'

const SectionOne = () => {
  return ( 
    <section className="section-one">
    <div className="left-side">
      <img src={Rectangle124} alt=""/>
    </div>
    <div className="right-side">
      <div className="dvg-company"> 
        <h2>DVG Company</h2>
      </div>
      <div className="bottom-line-red"></div>
      <div className="about-text-title">
        <h3>Veleprodaja i maloprodaja kozmetike i</h3>
        <h3>kucne hemije</h3>
      </div>
      <div className="bottom-line-grey"></div>
      <div className="about-text">
       <p>DVG Company d.o.o je trgovinsko preduzece osnovano 2008 godine u Subotici
       Prvenstena delatnost je veleprodaja kozmetike i kucne hemije
       U potpunosti je u privatnom vlasnistvu, sa sedistem u Subotici. Tu se nalazi
       distributivni centar i poslovne prostorije, sa ukupno 3000m2 magacinskog prostora
       koji zadovoljava sve segmente u pogledu smestaja, cuvanja i plasiranja robe</p>
      </div>
      <button className="more-about-us-btn">Saznajte vise o nama</button>
    </div>
  </section>
   );
}
 
export default SectionOne;