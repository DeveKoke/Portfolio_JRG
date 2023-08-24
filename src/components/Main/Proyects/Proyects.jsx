import './Proyects.css'
import Desktop from './Desktop/Desktop';
import Mobile from './Mobile/Mobile'

const Proyects = () => {
  const breakpoint = 770;
  // Obtener el ancho de la ventana
  const windowWidth = window.innerWidth;

  return (
    <>
      {windowWidth >= breakpoint ? <Desktop /> : <Mobile />}
    </>
    
  );
};

export default Proyects;



