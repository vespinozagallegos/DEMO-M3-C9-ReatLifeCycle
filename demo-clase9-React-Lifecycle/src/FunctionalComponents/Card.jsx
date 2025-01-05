//la props es el objeto character que se desesctructura
const Card = ({ character, handleOnClick }) => {
    const {name, house, id} = character;
    
    return (
        <div>
            <h2>{name}</h2>
            <h3>{house}</h3>
            {/* Se agrega la funcion del boton que viene de la props como handleOnClick */}
            {/* Y como el botón muestra el detalle de un personaje, se trae el id para usarlo en handleOnClick(id) */}
            <button onClick={() => handleOnClick(id)}>Ver Detalle</button>
        </div>

    );
}

export default Card;