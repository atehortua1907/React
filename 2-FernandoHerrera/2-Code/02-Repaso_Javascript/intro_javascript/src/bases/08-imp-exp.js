// import { heroes } from './data/heroes';

//Importacion por defecto e importación individual desntro del mismo archivo:
// import heroes, { owners } from '../data/heroes';
import heroes from '../data/heroes';

// console.log( owners );



//devuelve el heroe solicitado
export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );

// console.log( getHeroeById(2) );


//Filter trae todos los heroes que cumplan la condición
export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );

// console.log( getHeroesByOwner('Marvel') );


