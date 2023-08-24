class Interest {
    constructor(title, text){
        this.title = title;
        this.text =  text
    }
}

const CiTec = new Interest('Ciencia y Tecnología', 
                            'Siempre digo que tengo una parte de científico frustrado. Aunque fui por Ciencias Sociales, siempre me interesaron las ciencias. Por ejemplo, me maravilla la astronomía, y todo el universo, el sistema solar, la física y las fuerzas que rigen el cosmos...incluso tengo mi propio telescopio! Además, me atraen las tecnologías y me genera curiosidad cuando veo nuevas herramientas que en seguida quiero probar e implementar en algun proyecto nuevo.');
const History = new Interest('Historia',
                            'Siempre me ha apasionado la historia de la humanidad en general, cualquier etapa en realidad. Casi todo lo que leo va en esa dirección, y ver películas o documentales sobre cualquier tema, época, civilización, o personaje.');
const Fotography = new Interest('Fotografía',
                               'Esta es una afición que deriva de la anterior. Fotografía y tecnología a menudo van unidas. Cuando cojo mi cámara siempre busco captar detalles, cosas que a menudo nos pasan desapercibidas. Puedes ver algunas de mis fotos en mi Instagram.');
const Traveling = new Interest('Viajar',
                            '¿A quién no le gusta viajar? Con esta pequeña afición he podido visitar unos 12 países diferentes como Grecia, Italia, Irlanda, Perú... Por no hablar de todos los viajes por suelo nacional.' );
const Sports = new Interest('Deportes',
                            'Me van mucho los deportes y la actividad física, a ser posible en montaña o en el agua. Siempre que puedo me doy una escapadita a montaña o playa para desconectar y practicarlos. Lamentablemente los deportes del motor, de mis favoritos, no puedo practicarlos tanto como me gustaría.' );
const Cinema = new Interest('Cine',
                            'Para mí ir al cine es una forma de desconectar. Durante una hora y pico mi mente se traslada a otro mundo. Soy muy fan de las películas de fantasía, entretenimiento, história y ciencia ficción. De mis favoritas: El Señor de los Anillos, Master and Commander, Jurassic Park... No obstante soy fan de clásicos como El Gran Dictador, El Golpe o La Vida Es Bella.');
const Gardening = new Interest('Jardinería',
                            'Hace tiempo que me picó el bichito de la jardinería y el cuidado de plantas. Hay quien tiene animales, yo tengo vegetales, ¡y me encanta verlas crecer!');
const Music = new Interest('Música',
                            'Ante todo fan de Queen y Celtas Cortos.');
const Books = new Interest('Libros', 
                            'Reconozco que no leo muchas novelas, sobre todo me atraen ensayos o temáticos sobre historia y ciencia. <cite>Sapiens</cite>, de Yuval Noah Harari, muy recomendable. También tengo mi pequeña colección de comics, de Marvel, por supuesto. ')



export const hobbies = [CiTec, History, Fotography, Traveling, Sports, Cinema];

export { default } from "./Interests";
