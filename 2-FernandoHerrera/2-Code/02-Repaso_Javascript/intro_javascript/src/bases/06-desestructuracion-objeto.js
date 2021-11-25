
// Desestructuración
// Asignación Desestructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

//Forma de extraer información de un objeto, las propiedades se pueden
//colocar en desorden:
// const { edad, clave, nombre, } = persona;
 
// console.log( nombre );
// console.log( edad );
// console.log( clave );

//Desestructuración en el argumento
//se pueden enviar valores por defecto en el argumento, 
//existan o no en el objeto enviado por parametro
const useContext = ({ clave, nombre, edad, rango = 'Capitán' }) => {


    // console.log( nombre, edad, rango );
    
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }

}

//Recibiendo la información Desestructurada, 
//incluso constantex exclusivas del objeto interno
const { nombreClave, anios, latlng: { lat, lng } } = useContext( persona );

console.log(nombreClave, anios);
console.log( lat, lng );


