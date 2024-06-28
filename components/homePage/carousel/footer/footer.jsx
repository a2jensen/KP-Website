import React from 'react';
import styles from './footer.module.css';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <ul className={styles.toplist}>    
                <li className={styles.titles}><a href="">Return Home</a></li>
                <li className={styles.titles}><a href="">Newsletter</a></li>
                <li className={styles.titles}><a href="">Events</a></li>
                <li className={styles.titles}><a href="">Community</a></li>
                <li className={styles.titles}><a href="">Contact</a></li>
            </ul>
            <h2 className={styles.kp}>kaibigang pilipino</h2>
            <ul className={styles.bottomlist}>
                <li className={styles.bottomTitles}><a href="">est. 1987</a></li>
                <li className={styles.bottomTitles}><a href="">IG TIKTOK LOGOS</a></li>
                <li className={styles.bottomTitles}><a href="">KP LOGO</a></li>
            </ul>
        </div>
    )
}