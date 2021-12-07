// import { Fragment } from "react";
import PropTypes from 'prop-types';

const PrimeraApp = ({saludo}) =>{

    //Fragment retorna un elemento sin crear un div que lo agrupe
    // const saludo = "Hola terricolas!";
    return (        

        <> 
            <h1>{saludo}</h1>
            {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> //Para imprimir objetos */}
        </>

        // Tambien es posible retornar un fragment, así (importando Fragment):
        // <fragment> 
        //     <h1>Hola terricolas!</h1>
        // </fragment>
    );
}

PrimeraApp.propTypes ={
    saludo: PropTypes.string.isRequired
}

export default PrimeraApp;