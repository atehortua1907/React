// import { Fragment } from "react";

const PrimeraApp = ({saludo = 'Hola terricolas!'}) =>{

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

export default PrimeraApp;