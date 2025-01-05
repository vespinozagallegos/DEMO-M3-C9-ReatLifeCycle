//* Este componente mostrará el detalle de un personaje como un MODAL
import styles from './Detail.module.css'

//recibe una función para cerrar el Modal
const Detail = ({ handleOnClose }) => {
    return(
        // div con el estilo que tendra el modal
        <div className={styles.modalContainer}>
            <button className={styles.buttonDetail} onClick={handleOnClose}>Cerrar</button>
        </div>

    );
}

export default Detail;