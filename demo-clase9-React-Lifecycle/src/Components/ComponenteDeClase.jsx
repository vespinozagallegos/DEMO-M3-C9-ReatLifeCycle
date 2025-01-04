// De momento sabemos crear componentes funcionales, que son con los que hemos trabajado hasta el momento. 
// Pero antes de que se haya normalizado utilizar este tipo de componentes, 
// existían de otro tipo: los componentes de clase.

//nuestro componente Saludo se extiende de una clase predefinida de react llamada Component. 
import React, { Component } from "react";

class Saludo extends Component {
    // Al ser una clase y no una función no podremos retornar ningún valor.
    // Por lo que la forma de renderizar algo es utilizando el método render que también viene predefinido.
    // Dentro de el, si podremos retornar un valor que será el contenido JSX que queramos mostrar en pantalla.
    render() {
        return (
            <div>
                <h1>Hola, mundo!</h1>
            </div>
        );
    }
}

export default Saludo;