//la props es el objeto character que se desesctructura
const Card = ({ character }) => {
    const {name, house} = character;
    
    return (
        <div>
            <h2>{name}</h2>
            <h3>{house}</h3>
            <button>Ver Detalle</button>
        </div>

    );
}

export default Card;