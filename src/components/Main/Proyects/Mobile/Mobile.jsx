import { repositorios } from "./index";
import { useState } from 'react';
import './Mobile.css'


const Mobile = () => {

  const [indexRepo, setIndexRepo] = useState(null);
  const [infoRepo, setInfoRepo] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  const openRepo = (index) => {
    setIndexRepo(index);
    setInfoRepo(true);
    setShowAnimation(false);
  };
  const hiddeCard = () => {
    setShowAnimation(true);
    setTimeout(() => {
      setInfoRepo(false);
      setIndexRepo(null); 
      setShowAnimation(false);
    }, 300);
  };

  const printCard = () => {
    if(infoRepo ) {  
      const repo = repositorios[indexRepo];         
      return (
        <div className={`repoCard ${showAnimation ? 'scale-out-vertical' : 'scale-in-ver-center'}`}>
          <img className='cardArrow' src="assets/left-arrow.png" alt="volver atrás" onClick={hiddeCard}/>
          <div className="repoInfoText">
            <h3>{repo.repo}</h3>
            <p className='cardText repoCardText'>{repo.description}</p>
            <p className='cardText repoCardText'>{repo.techs} </p>
          </div>
          <a href={repo.url}><img src="assets/resource.png" alt="repositorio github" /></a>
        </div>
      );
    } else {
      return (
        <article className="proyectsContainer-mv">
            {repositorios.map((repo, index) => (
            <img
              key={index}
              className={`proyects-mv-img ${!infoRepo ? 'animate-icons' : ''}`}
              src={repo.img}
              alt="imagen de proyecto"
              onClick={() => openRepo(index)}
            />
          ))}
        </article>
      );
    }
  };

  return (
    <section className='proyectsWrapper' id="proyects" >
      <div className='trsprnteProyect'>
          <h2>Mis proyectos</h2>
          {printCard()}
          <a href="public/CV_JBE.pdf" download="Jorge_Blas_Espejo_CV">
        <button className="buttonDW buttonDWPY" type="button">
            <span className="buttonDW__text">DESCARGAR CV</span>
            <span className="buttonDW__icon"><img src="assets/downloads.png" alt="descargar" className="svg"/><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></span>
        </button></a>
      </div>
  </section>
  );
};
export default Mobile;


