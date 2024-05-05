import './About.css';
import Interests from './Interests/Interests';

const About = () => {
  return (

  <section className="aboutWrapper" id='about'>
      <article className="aboutContainer">
        <h2 className='h1About' >Sobre mí</h2>
        <p className='p_about'><b>Hola, soy Jorge Blas Espejo.</b>  BIENVENIDOS a mi porfolio personal. Mi pasión por la educación y el aprendizaje
              me han llevado siempre a seguir aprendiendo e ir más allá en mi formación y en quien quiero ser. 
              Por esa razón terminé viviendo en Londres, para vivir una experiencia diferente y para trabajar en otro país, aprender el idioma, su cultura y nuevas formas de ver la educación. </p>
            <p className='p_about'>Dentro del sector educativo siempre me llamaron la atención las nuevas tecnologías aplicadas a la educación y, cuando llegó 
              el momento de dar un vuelco a mi carrera y reciclarme en un nuevo sector, tuve claro en qué sector sería. 
              Esa fue una de las claves que me hicieron elegir formarme como desarrollador frontend. </p>
              <p className='p_about'>Empecé por mi cuenta, haciendo mis pequeños proyectos con HTML, CSS y JavaScript. En seguida vi que esto tenía mucho más, y que había tanto por aprender que necesitaba un impulso para abarcar con todo lo que quería aprender.</p>
              <p className='p_about'>El año pasado tuve la oportunidad de realizar un bootcamp Full-Stack en<i><a className='links' href="https://www.thebridge.tech/bootcamps/bootcamp-fullstack-developer" target="_blank">The Bridge</a></i> y después de 4 meses intensos de formación, además de varios meses aprendiendo como autodidacta antes de dicho curso aprendí muchas tecnologías y formas de aplicar mis conocimientos al código y la lógica de programación. Pude ampliar conocimientos de JavaScript y maquetación con CSS y Sass, además de manejar bases de datos relacionales y no relacionales. También pude empezar mi inmersión en React, tecnología con la que he podido llevar a cabo algunos proyectos que puedes ver en mi perfil github. 
              Lo mejor del bootcamp con The Bridge fue que tuve la oportunidad de trabajar mano a mano en un proyecto real con otras ramas tecnológicas como UX/UI, Ciberseguridad, Devops, Marqueting o DataScience. </p>
              <p className='p_about'>Actualmente busco mi primer empleo como desarrollador web ya que recientemente me he graduado 
              en <i><a className='links' href="https://www.qualentum.com/candidato/frontend-developer/metodologia-desarrollo-front/" target="_blank">Qualentum</a></i>, en conjunto con UNIR, como Frontend Developer. Aquí he podido ampliar conocimientos de CSS, Sass, React y conocer por primera vez el funcionamiento de NextJS. </p>
      </article>
      <Interests />
  </section>

  
  );
};

export default About;
