import { useState, useEffect } from 'react';
import styles from './AppUseEffect.module.css'
import Card from './Card'

console.log(styles);

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

function AppUseEffect() {
    //Creación de Estado
    const [characters, setCharacters] = useState([]);

    return (
        <>
            {
                characters.map((character) => {
                    // Se entrega character={character} para que le llegue la info a Card
                    return <Card key={character.id} character={character}/>
                })
            }
        </>
    );
}

export default AppUseEffect;

