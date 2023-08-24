
class Repo {
    constructor(repo, description, techs, url, img){
        this.repo = repo;
        this.description =  description;
        this.techs = techs;
        this.url = url;
        this.img = img;
    }
}

const Desafio = new Repo('Desafío de Tripulaciones en The Bridge', 
                            'Para finalizar el bootcamp con The Bridge tuve la oportunidad de poner en práctica todo lo aprendido y trabajar mano a mano en un proyecto real con otras ramas tecnológicas como UX/UI, Ciberseguridad, Devops, Marqueting o DataScience.',
                            'Tecnologías utilizadas: HTML, CSS y Sass, REACT, JS, Node.js + Express, JsonWebToken, PostgreSQL, git, Trello',
                            'https://github.com/DeveKoke/Desafio-Tripulaciones-TheBridge',
                            'assets/desafioproyect.PNG');
const Jobs = new Repo   ('Job finder',
                            'Proyecto grupal de back-end en The Bridge. Aplicación de búsqueda de empleo mediante scraping.',
                            'Tecnologías utilizadas: CSS, JS, PUG, JSDoc, Node.js + Express, MongoDB, Mongoose, PostgreSQL, JsonWebToken, git, Render, Trello.',
                            'https://github.com/DeveKoke/backend-proyect-findjobs',
                            'assets/Jobsproyect.PNG');
const Pokedex = new Repo('Pokeapp',
                            'Proyecto REACT individual. Aplicación web sobre Pokemon recogiendo datos de una api y manejando hooks de React y su asincronía.',
                            'Tecnologías utilizadas: HTML, CSS y Sass, JS, REACT, git, Netlify.',
                            'https://github.com/DeveKoke/React-PokemonAPI-Exercise',
                            'assets/pokemonproyect.PNG');
const Quiztory = new Repo('Quiztory',
                            'Proyecto en equipo sobre un quiz de historia con preguntas aleatorias, de diferentes niveles y sus respuestas procedentes de una api. Con autenticación de usuario y base de datos.',
                            'Tecnologías utilizadas: HTML, CSS, JS, Firebase-Auth, Firebase-FireStore, git, Trello',
                            'https://github.com/DeveKoke/Quiz_2.0',
                            'assets/quiztory.PNG' );
const Fantasy = new Repo('F1 Fantasy',
                            'Proyecto individual de Frontend en The Bridge. Aplicación web con información recogida de api, autenticación de usuario y base de datos para guardar información de registro y datos de juego de usuario. ',
                            'Tecnologías utilizadas: HTML, CSS, JS, Firebase-Auth, Firebase-FireStore, git.',
                            'https://github.com/DeveKoke/frontend_f1_fantasy',
                            'assets/Pf1.PNG' );
const ComicShop = new Repo('Comic Shop',
                            'Proyecto final Full-Stack individual en The Bridge. Aplicación de tienda online con base de datos',
                            'Tecnologías utilizadas: HTML, CSS y Sass, JS, REACT, JsonWebTocken, MongoDB, git, Docker, JSDoc, Swagger.',
                            'https://github.com/DeveKoke/comicshop-fullstack-proyect',
                            'assets/TiendaProyect.PNG');


export const repositorios = [Desafio, Jobs, Fantasy, ComicShop, Pokedex, Quiztory];
// console.log(repositorios[0].description);

export { default } from "./Mobile";
