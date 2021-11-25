

const personajes = ['Goku','Vegeta','Trunks'];
//Desestructuración array, necesito a trunks y no a los demas:
const [ , , p3 ] = personajes;
console.log( p3 );


const retornaArreglo = () =>{
    return ['ABC', 123];
}


//Extrayendo en constantes independientes
const [ letras, numeros ] = retornaArreglo(); 
console.log(letras, numeros);


// Tarea
// 1. el primer valor del arr se llamará nombre
// 2. se llamará setNombre
const useState = ( valor ) => {
    return [ valor, ()=>{ console.log('Hola Mundo') } ];
}

//La función useState retorna un arreglo.
//Primera posición el valor enviado por parametro
//Segunda posición una función que imprime 'Hola Mundo'
const [ nombre, setNombre ] = useState( 'Goku' );

//Se muestra la primera constante extraída
console.log( nombre );

//Se ejecuta la función de la segunda constante extraída
setNombre();





