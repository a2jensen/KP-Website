import React from 'react';
import styles from './footer.module.css';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerNav}>
                    <ul>
                        <li><a href="">return home</a></li>
                        <li><a href="">newsletter</a></li>
                        <li><a href="">events</a></li>
                        <li><a href="">community</a></li>
                        <li><a href="">contact</a></li>
                    </ul>
                </div>
                <h2>kaibigan pilipino</h2>
                <div className={styles.footerBottom}>
                    <p>est. 1987</p>
                    <div className={styles.footerSocials}>
                        <a href="https://www.instagram.com/ucsdkp/">
                            <img src="_next/static/media/instagram.svg" alt="Instagram"></img>
                        </a>
                        <a href="">
                            <img src="_next/static/media/tiktok.svg" alt="tiktok"></img>
                        </a>
                        <a href="https://www.facebook.com/groups/ucsdkp">
                            <img src="_next/static/media/instagram.svg" alt="fb"></img>
                        </a>
                        <a href="">
                            <img src="_next/static/media/tiktok.svg" alt="social"></img>
                        </a>
                    </div>
                    <p><img className={styles.star} src="_next/static/media/pilipinostar.svg" alt="pilipino star"></img></p>
                </div>
            </div>
        </div>
    )
}