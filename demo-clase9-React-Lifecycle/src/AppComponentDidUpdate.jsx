// import React from 'react'; //forma 1
import { Component } from 'react'; //forma 2
import styles from './App.module.css'
console.log(styles);


//Al crear el comp de clase se le indica que es un comp. de clase
//con class y extends
//FORMA 1 ->
//class AppComoComponenteDeClase extends React.Component {


const user = "Víctor";

//Forma 2
class AppComponentDidMount2 extends Component {
    //Se reciben props //Se define el Estado //Se define todo lo inicial que necesita el componente para renderizar
    constructor() {
        //super no es necesario si no recibo props pero si se recomienda ponerlo siempre para evitar errores finales 
        super();
        //siempre es this.state. Es el componente de clase state. Siempre es un objeto.
        this.state = {
            session: false,
            info: "No se ha cargado la info"
        }
        console.log("Ejecutando el constructor");      //! PRIMERO se ejecuta el constructor 
    }

    //*Para ver que sucede cuando SE MONTA el COMPONENTE
    // Permite ejecutar ciertas cosas al momento en que se carga el componente en pantalla
    //Se ejecuta UNA SOLA VEZ, cuando se monta el COMPONENTE (primera vez en pantalla)
    //*Es útil para mostrar algo "por mientras", por ej., un loading mientras se recarga lo demás.
    componentDidMount() {
        //Para saber en que momento se van ejecutando las partes de este comp.
        console.log("Ejecutando el componenteDidMount");        //! CUARTO, el componenteDidMount

        //Sólo para ver como funciona esto
        // setTimeout ejecuta lo que esta dentro a los 3 segundos (3000 del final) luego de ejecutarse componentDidMount()
        setTimeout(() => {                                      //! QUINTO. Esto se ejecuta por segunda vez, 
            //*Actualiza el estado                              //! es una actualización y el render (2° y 3°) tambien irá por segunda vez
            this.setState({
                session: true,
                info: `Bienvenido ${user}`
            })
        }, 3000)
        

    }

    //no se puede utilizar solo return, se debe usar el metodo render()
    render() {
        //logs para ver que va ocurriendo en todo este flujo
        console.log("Ejecutando el render");        //! SEGUNDO se ejecuta el RENDER
        console.log(this.state.info);               //! TERCERO sigue naturalmente ESTE
        return (
            <div>
                <h1>Componente de Clase App</h1>
                {/* muestra la informacion que esta en state(objeto). Se usa this por ser clase */}
                <h2>{this.state.info}</h2>
                {/* Luego se agregará una funcionalidad al botón */}
                <button>Iniciar Sesión</button>
            </div>
        )
    }
}

export default AppComponentDidMount2;