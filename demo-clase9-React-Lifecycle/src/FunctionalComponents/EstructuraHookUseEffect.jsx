import { useEffect } from "react";

//Montaje
useEffect(() =>{
    //Código
});

//Desmontaje
useEffect(() => {
    return => {/* Código*/}
});

//Arreglo de Dependencias
useEffect(() => {
    // ...
}, [/*Dependencias*/]);



//!DEFINICIONES 

//? Montaje:
// El hook useEffect recibe un primer parámetro que es una función callback.
// Aquí podrás definir aquel código que quieres que se ejecute cuando el componente se monta.
// Puede ser uno o más métodos.

//? Desmontaje:
// Para poder ejecutar código cuando un componente se desmonta
// tendremos que retornar un callback dentro del primer callback 
// que vimos en el punto de arriba.
// Es este código retornado que se ejecutará cuando el componente se desmonte.

//? Arreglo de Dependencias:
// El hook useEffect puede recibir un segundo parámetro: el arreglo de dependencias. 
// Dentro de este arreglo especificamos las variables que, cuando cambian, 
// activan la ejecución del efecto asociado. 
// Al declarar este arreglo vacío, indicamos al useEffect que dicho efecto solo ocurrirá luego del montaje.
// Es decir, se ejecutarán las acciones cuando queramos actualizar el montaje.

//! CASOS DE USO
//? Montaje
//-Solicitud de datos desde una API o base de datos.
//-Realizar suscripciones a eventos del navegador.
//-Inicializar recursos externos como, por ejemplo, un reproductor de video.

//? Actualización
//-Realizar acciones cada vez que una prop específica cambie.
//-Actualizar el título de la página cada vez que el estado del componente se modifique.
//-Gestionar acciones cada vez que una sección específica del estado cambia, 
// por ejemplo, cuando un usuario inicia sesión.

//? Desmontaje
//-Limpiar suscripciones a eventos del navegador.
//-Limpiar el almacenamiento local del navegador.
//-Cancelar peticiones de red o APIs.