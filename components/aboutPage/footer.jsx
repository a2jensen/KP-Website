import React from 'react';
import styles from './footer.module.css';
import Image from "next/image";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <ul className={styles.toplist}>    
                <li className={styles.titles}><a href="/">Home</a></li>
                <li className={styles.titles}><a href="/about">About</a></li>
                <li className={styles.titles}><a href="/events">Events</a></li>
                <li className={styles.titles}><a href="">Contact</a></li>
            </ul>
            <h2 className={styles.kp}>kaibigang pilipino</h2>
            <ul className={styles.bottomlist}>
                <li className={styles.outerlogo}><a>est. 1987</a></li>
                <li className={styles.iglogo}> <a href="https://www.instagram.com/ucsdkp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                <Image
                    src="/iglogo.png"
                    width={50}
                    height={50}
                />
                    </a></li>
                <li className={styles.tiktoklogo}> <a href="">
                <Image
                    src="/tiktoklogo.png"
                    width={50}
                    height={50}
                /></a></li>
                <li className={styles.outerlogo}><a><Image
                    src="/Layer_1.svg"
                    width={50}
                    height={50}
                /></a></li>
            </ul>
        </div>
    )
}