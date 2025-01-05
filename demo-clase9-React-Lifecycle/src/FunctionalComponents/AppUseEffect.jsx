import { useState, useEffect } from 'react';
import styles from './AppUseEffect.module.css'
import Card from './Card'

console.log(styles);
//se puede aplicar un slice para cortar el array y dejarlo en 20 x ej

function AppUseEffect() {
    //Creación de Estado
    const [characters, setCharacters] = useState([]);
    //Estado Detail
    const [detail, setDetail] = useState(false);
    //Estado id
    const [id, setId] = useState(0);
    console.log(detail);
    console.log(id);
    
    //*Se crea la función del botón
    // setea el valor del estado id, con el id que recibe por parámetro
    // cambia el estado de detail. Esto indica que se hizo click en el botón del detalle y que lo está mostrando
    const handleOnClick = (id) => {
        setId(id);
        setDetail(true);
    }
    
    //Recibe 2 params, un callbacñ y un array de dependencias
    //Llamará a una Api para traer la info que cargue el estado //Esa info es la que se mapea y renderiza mas abajo
    useEffect(() => {
        //fetch es una promesa que llama a la API
        fetch("https://hp-api.onrender.com/api/characters")
            //método then para que funcione, se formatea la resp para poder manipularla (con JS)
            .then((response) => response.json())
            //*recibe la data y se cambia el estado, cargandolo con la info de la API
            .then((data) => setCharacters(data))
    }, []);

    
    return (
        <>
            {
                characters.map((character) => {
                    // Se entrega character={character} para que le llegue la info a Card
                    // Se implementa la funcion handleOnClick
                    return <Card key={character.id} character={character} handleOnClick={handleOnClick}/>
                })
            }
        </>
    );
}

export default AppUseEffect;

