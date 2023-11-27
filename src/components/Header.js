import React, { useState } from 'react';
import Nav from './Nav';

export default function Header() {
    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleMenu = () => {
        setIsNavVisible(!isNavVisible);
    };

    return (
        <header>
            <div className="logo-header">
                <div className="brand-name" id="navBrand">Terra <strong>Classic</strong></div>
                <div className="burger-menu" onClick={toggleMenu}>☰</div>
                <Nav className={isNavVisible ? 'nav-visible' : ''} toggleMenu={toggleMenu} />
            </div>
        </header>
    );
}
