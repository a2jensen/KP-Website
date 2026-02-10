'use client';

import React, { useState } from 'react'
import Link from 'next/link'
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
            <main className={`${styles.container} ${isMenuOpen ? styles.noShadow : ''}`}>
                <h1 className={styles.title}>kaibigang pilipino</h1>
                
                
                <ul className={`${styles.list} ${isMenuOpen ? styles.showMenu : ''}`}>
                    <li className = {styles.listElement}><Link href="/">home</Link></li>
                    <li className = {styles.listElement}><Link href="/about">about</Link></li>
                    <li className = {styles.listElement}><Link href="/events">events</Link></li>
                    <div className={`${styles.listElement} ${styles.joinButtonDesktop}`}>
                    <a href="/about">join</a>
                </div>
                </ul>
                <div className={`${styles.listElement} ${styles.joinButtonMobile}`}>
                    <a href="/about">join</a>
                </div>
                <div className={styles.hamburger} onClick={toggleMenu}>
                    &#9776;
                </div>
                
            </main>
        </div>
    )
}