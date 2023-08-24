import './Interests.css';
import { hobbies } from "./index";
import { useState } from 'react';

const Interests = () => {
  const [indexIcon, setIndexIcon] = useState(null);
  const [showInterest, setShowInterest] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  const openCard = (index) => {
    setIndexIcon(index);
    setShowInterest(true);
    setShowAnimation(false);
  };
  const hiddeCard = () => {
    setShowAnimation(true)
    setTimeout(() => {
      setShowInterest(false);
      setShowAnimation(false); // Reiniciar la animación después de un tiempo
    }, 300); 
  }

  const printCard = () => {
    if (showInterest) {          
      return (
        <div className={`interestCard ${showAnimation ? 'scale-out-vertical' : 'scale-in-ver-center'}`}>
              <img className='cardArrow' src="assets/left-arrow.png" alt="volver atrás" onClick={hiddeCard}/>
          <div className='interestContent'>
              <h3>{hobbies[indexIcon].title}</h3>
              <p className='cardText'>{hobbies[indexIcon].text}</p>
          </div>
        </div>
      );
    } else {
      return (
        <ul className="interestsContainer">
          <li><img className={`interestIcon ${!showInterest ? 'animate-icons' : ''}`} src="assets/ciencias-de-la-computacion.png" alt="icono ciencia" onClick={() => openCard(0)} /></li>
          <li><img className={`interestIcon ${!showInterest ? 'animate-icons' : ''}`} src="assets/photo-camera.png" alt="icono fotografia" onClick={() => openCard(2)} /></li>
          <li><img className={`interestIcon ${!showInterest ? 'animate-icons' : ''}`} src="assets/pillar.png" alt="icono historia" onClick={() => openCard(1)} /></li>
          <li><img className={`interestIcon ${!showInterest ? 'animate-icons' : ''}`} src="assets/plane.png" alt="icono viajar" onClick={() => openCard(3)} /></li>
          <li><img className={`interestIcon ${!showInterest ? 'animate-icons' : ''}`} src="assets/hiker.png" alt="icono deportes" onClick={() => openCard(4)} /></li>
          <li><img className={`interestIcon ${!showInterest ? 'animate-icons' : ''}`} src="assets/video-camera.png" alt="icono cine" onClick={() => openCard(5)} /></li>
          {/* <li><img className='interestIcon' src="assets/leaf.png" alt="icono jardineria" onClick={() => openCard(6)} /></li>
          <li><img className='interestIcon' src="assets/headphones.png" alt="icono musica" onClick={() => openCard(7)} /></li>
          <li><img className='interestIcon' src="assets/libro.png" alt="icono libros" onClick={() => openCard(8)} /></li> */}
        </ul>
      );
    }
  };
  


  return (
    <article>
      <h3 className='h3-int'>Intereses</h3>
      {printCard()}
    </article>
  );
};

export default Interests;

