import './About.css';
import Interests from './Interests/Interests';

const About = () => {
  return (

  <section className="aboutWrapper" id='about'>
      <article className="aboutContainer">
        <h2 className='h1About' >Sobre mí</h2>
        <p><b>Hola,soy Jorge Blas Espejo.</b>  BIENVENIDOS a mi porfolio personal. Mi pasión por la educación y el aprendizaje
          me han llevado siempre a seguir aprendiendo e ir más allá en mi formación y en quien quiero ser. 
          Por esa razón terminé viviendo en Londres, para vivir una experiencia diferente y para trabajar en otro país. </p>
        <p>Dentro del sector educativo siempre me llamaron la atención las nuevas tecnologías aplicadas a la educación y, cuando llegó 
          el momento de dar un vuelco a mi carrera y reciclarme en un nuevo sector tuve claro en qué sector sería. 
          Esa fue una de las claves que me hicieron elegir formarme como desarrollador full-stack. </p>
        <p>Actualmente busco mi primer empleo como desarrollador web ya que recientemente me he graduado 
          en <i><a href="https://www.thebridge.tech/bootcamps/bootcamp-fullstack-developer" target="_blank">The Bridge</a></i> como 
          full-stack developer después de 4 meses intensos de formación además de varios meses formándome como autodidacta antes de dicho curso. 
          Durante el bootcamp con The Bridge tuve la oportunidad de trabajar mano a mano en un proyecto real con otras ramas tecnológicas como 
          UX/UI, Ciberseguridad, Devops, Marqueting o DataScience. </p>
      </article>
      <Interests />
  </section>

  
  );
};

export default About;
