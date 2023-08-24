

//Funcion que aplica las animaciones de las habilidades
export function skillsEffect(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("react");
        habilidades[3].classList.add("nodeExpress");
        habilidades[4].classList.add("git");
        habilidades[5].classList.add("mongo");
        habilidades[6].classList.add("sql");
        habilidades[7].classList.add("docker");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades

    window.onscroll = function(){
        skillsEffect();
    } 


export { default } from "./Skills";
