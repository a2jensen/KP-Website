'use client';

import React, { useState } from 'react'
import styles from './nav.module.css'

export default function Nav() {
    // state to manage menu visibility
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // function to toggle menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <main className={styles.container}>
            <h1 className={styles.title}>kaibgang pilipino</h1>
            <div className={styles.hamburger} onClick={toggleMenu}>
                &#9776;
            </div>
            <ul className={`${styles.list} ${isMenuOpen ? styles.showMenu : ''}`}>
                <li className = {styles.listElement}><a href="">home</a></li>
                <li className = {styles.listElement}><a href="">about</a></li>
                <li className = {styles.listElement}><a href="">events</a></li>
                <li className = {styles.listElement}><a href="">join</a></li>
            </ul>
        </main>
    )
}