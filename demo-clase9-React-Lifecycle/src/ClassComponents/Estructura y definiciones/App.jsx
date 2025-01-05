// import { useState } from 'react'
import styles from '../App.module.css'
import Saludo from './ComponenteDeClase'
import SaludoPersonalizado from './ComponenteDeClase2';

console.log(styles);

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <h1>HOLA</h1>
      <Saludo/>
      <SaludoPersonalizado/>
    </div>
    
  );
}

export default App;