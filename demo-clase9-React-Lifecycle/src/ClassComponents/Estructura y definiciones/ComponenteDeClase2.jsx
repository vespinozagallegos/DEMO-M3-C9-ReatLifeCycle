import React, { Component } from "react";

//Los componentes de clase pueden recibir props de un componente padre, 
// así como contener un estado interno para almacenar y gestionar información.

//Este componente de clase recibe una prop llamada nombre. 
// En el constructor se inicializa un objeto (al que llamamos state). 
//A su vez, el constructor recibe la prop e inicializa el estado con un mensaje personalizado que incluye el nombre.

class SaludoPersonalizado extends Component {
    constructor(props) {
        super(props);
        this.state = {mensaje: `Hola, ${this.props.nombre}!`};
    }

    render() {
        return (
            <div>
                <p>{this.state.mensaje}</p>
            </div>
        );
    }
}

//En este tipo de componentes no se utilizaban los hooks ya que no existían. 
// Aunque, de todos modos, hoy tampoco se podría, 
// ya que los hooks son exclusivos de los componentes funcionales.

export default SaludoPersonalizado;