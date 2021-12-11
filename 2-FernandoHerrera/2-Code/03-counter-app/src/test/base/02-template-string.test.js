import '@testing-library/jest-dom';
import {getSaludo} from '../../base-pruebas/02-template-string';

describe('Pruebas en 02-template-string.test.js', () =>{

    test('getSaludo debe retornar Hola Gohan', () =>{

        const nombre = 'Gohan';

        const saludo = getSaludo(nombre);
        console.log(`console.log => ${saludo}`);

        expect(saludo).toBe('Hola '+nombre);
    })

    test('getSaludo debe retornar Hola Carlos si no hay argumento nombre', () =>{
        const saludo = getSaludo();
        console.log(`console.log => ${saludo}`);

        expect(saludo).toBe('Hola Carlos');
    })
});