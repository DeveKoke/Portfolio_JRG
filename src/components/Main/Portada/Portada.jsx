import './Portada.css';



const Portada = () => {
  return (
    <>
      <section className='frontWrapper' >
        <div className='frontContent'>
            <img src="assets/Yo_portada.jpg" alt="fotografía de portada de Jorge" className="imgFront" id='portada' />
            <h1>JORGE BLAS ESPEJO</h1>
            <h3 className='h3Front'>Frontend Developer</h3>
        </div>
        <div className='socialIcons'>
            <a target='_blank' href="https://www.instagram.com/jrg.bles/">
              <img src="assets/instagram.png" alt="instagram" />
            </a>
            <a target='_blank' href="https://github.com/DeveKoke">
              <img src="assets/resource.png" alt="github" />
            </a>
            <a target='_blank' href="https://www.linkedin.com/in/jorge-blas-espejo-webappdeveloper">
              <img src="assets/linkedin.png" alt="linkedin" />
            </a>
        </div>
        <a href="public/CV_JBE.pdf" download="Jorge_Blas_Espejo_CV">
            <button className="buttonDW buttonDWMG" type="button">
            <span className="buttonDW__text">DESCARGAR CV</span>
            <span className="buttonDW__icon"><img src="assets/downloads.png" alt="descargar" className="svg"/><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></span>
            </button></a>
      </section>
    </>
  
  );
};

export default Portada;
