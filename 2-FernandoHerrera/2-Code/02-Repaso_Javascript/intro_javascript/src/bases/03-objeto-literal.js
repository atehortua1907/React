

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 55321321,
        lat: 14.3232,
        lng: 34.9233321
    }
};

// console.table( persona );

const persona2 = { ...persona }; //(Spread Operator (...))copia o clone real del valor no  lo copia por referencia
persona2.nombre = 'Peter';


console.log( persona );
console.log( persona2 )







