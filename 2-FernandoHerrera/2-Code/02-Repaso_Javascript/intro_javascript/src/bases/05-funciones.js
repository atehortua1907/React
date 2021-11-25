
// Funciones en JS
// const saludar = function( nombre ) {
//     return `Hola, ${ nombre }`;
// }

//NO se recomienda hacer funciones de este tipo:
// function saludar(nombre){
//     return `Hola, ${ nombre }`;
// }
//Porque se le puede asignar valores:
// saludar = "Hola Mundo!";

const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

//Es la misma que la anterior, cuando tienen un return se puede hacer de esta manera:
const saludar3 = ( nombre ) => `Hola, ${ nombre }`; 
const saludar4 = () => `Hola Mundo`;

// console.log( saludar('Goku') )

console.log( saludar2('Vegeta') );
console.log( saludar3('Goku') );
console.log( saludar4() );


//Esta funcion retorna un objeto, en lugar del return que tambien hace lo mismo
//, colocamos el objeto entre parentesis
const getUser = () => ({
        uid: 'ABC123',
        username: 'El_Papi1502'
});


const user = getUser();
console.log(user);

// Tarea
const getUsuarioActivo = ( nombre ) =>({
    uid: 'ABC567',
    username: nombre
})

const usuarioActivo = getUsuarioActivo('Fernando');
console.log( usuarioActivo );



