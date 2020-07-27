import React from 'react';
import Logo from '../../assets/logo.png';
import './Menu.css';
import Button from '../Button';

function Menu(){

    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="My flix logo"></img>
            </a>
        
            <Button className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;