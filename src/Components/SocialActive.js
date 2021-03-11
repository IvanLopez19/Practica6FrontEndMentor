import React from 'react';
import Facebook from '../Assets/icon-facebook.svg';
import Twitter from '../Assets/icon-twitter.svg';
import Pinterest from '../Assets/icon-pinterest.svg';
import Icon from '../Assets/icon-share.svg';
import '../Estilos/Styles.css';

function SocialActive(props){
    
    return(
        <div className='SocialActive'>
            <p>S H A R E</p>
            <div>
                <img src={Facebook}></img>
                <img src={Twitter}></img>
                <img src={Pinterest}></img>
            </div>
            <div><img src={Icon} className='icon'></img></div>
        </div>
    )
}

export default SocialActive;