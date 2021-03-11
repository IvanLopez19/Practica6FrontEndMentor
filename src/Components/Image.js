import React from 'react';
import Imagen from '../Assets/drawers.jpg';
import '../Estilos/Styles.css';

function Image(){
    return(
        <header>
            <img src={Imagen} className='image'></img>
        </header>
    )
}

export default Image