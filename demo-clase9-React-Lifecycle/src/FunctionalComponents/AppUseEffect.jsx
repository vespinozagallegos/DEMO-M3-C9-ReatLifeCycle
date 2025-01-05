import { useState } from 'react';
import styles from './AppUseEffect.module.css'
import Card from './Card'

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

