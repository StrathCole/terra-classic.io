import React from 'react';

export default function Nav({ className, toggleMenu }) {
    return (
        <nav className={className}>
            <ul>
                <li><a href="#home" onClick={toggleMenu}>Home</a></li>
                <li><a href="#about" onClick={toggleMenu}>About</a></li>
                <li><a href="#roadmap" onClick={toggleMenu}>Roadmap</a></li>
                <li><a href="https://github.com/classic-terra" target="_blank" rel="noopener noreferrer">Contribute</a></li>
            </ul>
        </nav>
    );
}
