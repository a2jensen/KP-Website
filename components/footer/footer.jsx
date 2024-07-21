import React from 'react';
import styles from './footer.module.css';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <ul className={styles.toplist}>    
                <li className={styles.titles}><a href="">Home</a></li>
                <li className={styles.titles}><a href="">About</a></li>
                <li className={styles.titles}><a href="">Events</a></li>
                <li className={styles.titles}><a href="">Contact</a></li>
            </ul>
            <h2 className={styles.kp}>kaibigang pilipino</h2>
            <ul className={styles.bottomlist}>
                <li className={styles.est1987}><a href="">est. 1987</a></li>
                <li className={styles.igLogo}> <a href="">IG</a></li>
                <li className={styles.tiktokLogo}> <a href=""></a></li>
                <li className={styles.kpLogo}><a href="">KP LOGO</a></li>
            </ul>
        </div>
    )
}