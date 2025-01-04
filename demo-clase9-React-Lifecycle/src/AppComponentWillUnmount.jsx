// import React from 'react'; //forma 1
import { Component } from 'react'; //forma 2
import styles from './App.module.css'
console.log(styles);

const user = "Víctor";

//Forma 2
class AppComponentDidMount3 extends Component {
    //Se reciben props //Se define el Estado //Se define todo lo inicial que necesita el componente para renderizar
    constructor() {
        //super no es necesario si no recibo props pero si se recomienda ponerlo siempre para evitar errores finales 
        super();
        //siempre es this.state. Es el componente de clase state. Siempre es un objeto.
        this.state = {
            session: false,
            info: "No se ha cargado la info"
        }
        console.log("Ejecutando el constructor");
    }

    //Se ejecuta UNA SOLA VEZ, cuando se monta el COMPONENTE (primera vez en pantalla)
    //*Es útil para mostrar algo "por mientras", por ej., un loading mientras se recarga lo demás.
    componentDidMount() {
        //Para saber en que momento se van ejecutando las partes de este comp.
        console.log("Ejecutando el componenteDidMount");        
        
        // setTimeout ejecuta lo que esta dentro a los 3 segundos (3000 del final) luego de ejecutarse componentDidMount()
        setTimeout(() => {
            //*Actualiza el estado
            this.setState({
                session: true,
                info: `Bienvenido ${user}`
            })
        }, 3000)
    }

    componentDidUpdate() {
        console.log("Ejecutando el componentDidUpdate");
    }

    render() {
        //logs para ver que va ocurriendo en todo este flujo
        console.log("Ejecutando el render");
        console.log(this.state.info);
        return (
            <div>
                {
                    // Si session está en true, muestra el h2
                    this.state.session ? (
                        <h2>Estás conectado!😁</h2>
                    // caso contrario, muestra
                    ) : (
                        <h2>Aún no haz iniciado sesión 😴</h2>
                    )
                }
            </div>
        )
    }
}

export default AppComponentDidMount3;