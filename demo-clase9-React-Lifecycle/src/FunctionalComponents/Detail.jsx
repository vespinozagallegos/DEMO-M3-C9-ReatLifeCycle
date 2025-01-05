//* Este componente mostrará el detalle de un personaje como un MODAL
import styles from './Detail.module.css'
import { useState, useEffect } from 'react';

//recibe una función para cerrar el Modal
//* se le da un id que viene del estado [id, setId] cargado en AppUseEffect,
// donde se le da tb al componente Detail (en el renderizado condicional)
const Detail = ({ id, handleOnClose }) => {
    //* Crear Estado que tiene un objeto vacío. MAS ABAJO (en useEffect) SE CUMPLE LA COHERENCIA AL setear la data[0]
    const [character, setCharacter] = useState({});

    // 2 params, callback y array de dependencias
    useEffect(() => {
        //* se llama a la API utilizando el ID de detail OJO QUE CHARACTER debe ser SIN "S" para pedir la info de un pers. especif.
        fetch(`https://hp-api.onrender.com/api/character/${id}`)
        // transforma la resp para poder trabajarla
        .then(Response => Response.json())
        // recibe la data formateada y se le da al estado character en posición 0 pq charac. es un objeto dentro de un array de objs
        .then((data) => setCharacter(data[0]))


    }, []);

    return(
        // div con el estilo que tendra el modal
        <div className={styles.modalContainer}>
            {/* Se eligen las props a renderizar, serán solo 2 */}
            <h2 className={styles.title}>{character.name}</h2>   {/*si se llegase a romper se le agrega un ? entre character y el punto*/}
            <img src={character.image} className={styles.img} /> {/*se le puede agregar el alt pero nose pa que es alt={character.name}*/}

            <button className={styles.buttonDetail} onClick={handleOnClose}>Cerrar</button>
        </div>

    );
}

export default Detail;