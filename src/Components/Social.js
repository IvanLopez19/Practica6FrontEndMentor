import React, {useState} from 'react';
import Imagen from '../Assets/avatar-michelle.jpg';
import '../Estilos/Styles.css';
import Icon from '../Assets/icon-share.svg';

function Social(props){

    const [active,setActive] = useState(' ');

    function handleClick(){
        setActive( active === ' '?'Active':' ');
    }

    const style= active===' '?{zIndex:-10, opacity:100} :{};

    return(
        <footer className='social' style={style}>
        <img src={Imagen}></img>
        <div>
            <p>Michelle Appleton</p>
            <p>28 Jun 2020</p>
        </div>
        <div onClick={handleClick}><img src={Icon} className='icon'></img></div>
        </footer>
    )
}

export default Social;