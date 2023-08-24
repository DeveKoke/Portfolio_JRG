import './Skills.css';
import { skillsEffect } from './index'

const Skills = () => {
  return (
    <section className="skillsWrapper" id="skills">
      <div className='trsprnte'>
          <article className="contenido-seccion">
              <h2 id='skills'>Skills</h2>
              <div className="fila">
                  {/* <!-- Technical Skill --> */}
                      <h3>Technical Skills</h3>
                  <div className="col">
                      <div className="skill">
                        <div className='skillLogo'>
                            <img className='logoSkillsX' src="assets/js.png" alt="" />
                        </div>
                        <div className='skillbarContainer'>
                          <span>Java Script</span>
                          <div className="barra-skill">
                              <div className="progreso">
                                  <span></span>
                              </div>
                          </div>
                        </div>
                      </div>
                      <div className="skill">
                        <div className='skillLogo'>
                          <img className='logoSkills' src="assets/htmlcss.png" alt="" />
                        </div>
                        <div className='skillbarContainer'>
                          <span>HTML & CSS</span>
                          <div className="barra-skill">
                              <div className="progreso">
                                  <span></span>
                              </div>
                          </div>
                        </div>
                      </div>
                      <div className="skill">
                        <div className='skillLogo'>
                          <img className='logoSkillsX' src="assets/react.png" alt="" />
                        </div>
                        <div className='skillbarContainer'>
                          <span>REACT</span>
                          <div className="barra-skill">
                              <div className="progreso">
                                  <span></span>
                              </div>
                          </div>
                        </div>
                      </div>
                      <div className="skill">
                        <div className='skillLogo'>
                          <img className='logoSkills' src="assets/node.png" alt="" />
                        </div>
                        <div className='skillbarContainer'>
                          <span>Node.js + express</span>
                          <div className="barra-skill">
                              <div className="progreso">
                                  <span></span>
                              </div>
                          </div>
                        </div>
                      </div>
                      <div className="skill">
                        <div className='skillLogo'>
                          <img className='logoSkillsX' src="assets/git.png" alt="" />
                        </div>
                        <div className='skillbarContainer'>
                          <span>git</span>
                          <div className="barra-skill">
                              <div className="progreso">
                                  <span></span>
                              </div>
                          </div>
                        </div>
                      </div>
                      <div className="skill">
                        <div className='skillLogo'>
                          <img className='mongoDB' src="assets/mongo.png" alt="" />
                        </div>
                        <div className='skillbarContainer'>
                          <span>Mongo DB</span>
                          <div className="barra-skill">
                              <div className="progreso">
                                  <span></span>
                              </div>
                          </div>
                        </div>
                      </div>
                      <div className="skill">
                        <div className='skillLogo'>
                          <img className='logoSkills' src="assets/sql.png" alt="" />
                        </div>
                        <div className='skillbarContainer'>
                          <span>SQL + PostgreSQL</span>
                          <div className="barra-skill">
                              <div className="progreso">
                                  <span></span>
                              </div>
                          </div>
                        </div>
                      </div>
                      <div className="skill">
                        <div className='skillLogo'>
                          <img className='logoSkills ' src="assets/docker.png" alt="" />
                        </div>
                        <div className='skillbarContainer'>
                          <span>Docker</span>
                          <div className="barra-skill">
                              <div className="progreso">
                                  <span></span>
                              </div>
                          </div>
                        </div>
                      </div>
                  </div>
              </div>
        </article>
        <article className='contenido-seccion'>
          <h3>Soft Skills</h3>
          <ul>
            <span></span><li>Adaptabilidad y flexibilidad</li>
            <span></span><li>Paciencia y tolerancia al estrés</li>
            <span></span><li>Orden y constancia</li>
            <span></span><li>Gestión del tiempo</li>
            <span></span><li>Trabajo en equipo</li>
          </ul>
        </article>
    </div>
</section>

  );
};

export default Skills;
