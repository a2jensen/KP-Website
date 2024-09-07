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
        <div className={styles.nav}>
            <main className={styles.container}>
                <h1 className={styles.title}>kaibigang pilipino</h1>
                <div className={styles.hamburger} onClick={toggleMenu}>
                    &#9776;
                </div>
                <ul className={`${styles.list} ${isMenuOpen ? styles.showMenu : ''}`}>
                    <li className = {styles.listElement}><a href="/">home</a></li>
                    <li className = {styles.listElement}><a href="/about">about</a></li>
                    <li className = {styles.listElement}><a href="/events">events</a></li>
                    <li className = {`${styles.listElement} ${styles.specialButton}`}><a href="/about">join</a></li>
                </ul>
            </main>
        </div>
    )
}