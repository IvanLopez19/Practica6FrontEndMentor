import React from 'react';
import Image from './Image';
import Information from './Information';
import Social from './Social';
import '../Estilos/Styles.css'
import SocialActive from './SocialActive';

function Card(){
    
    return(
        <div className='card'>
        <Image/>
        <Information/>
        <Social />
        <SocialActive />
        </div>
    )
}

export default Card;