import { useState } from 'react';
import styles from './AppUseEffect.module.css'

console.log(styles);

function AppUseEffect() {
    //Creación de Estado
    const [characters, setCharacters] = useState([]);

    return (
        <>
            {
                characters.map((character) => {
                    return <Card />
                })
            }
        </>
    );
}

export default AppUseEffect;

