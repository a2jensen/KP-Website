import React from 'react';
import styles from './footer.module.scss';
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <ul className={styles.toplist}>    
                <li className={styles.titles}><Link href="/">home</Link></li>
                <li className={styles.titles}><Link href="/about">about</Link></li>
                <li className={styles.titles}><Link href="/events">events</Link></li>
                <li className={styles.titles}><a href="mailto:ucsdkp.chair@gmail.com">contact</a></li>
            </ul>
            <h2 className={styles.kp}>kaibigang pilipino</h2>
            <ul className={styles.bottomlist}>
                <li className={styles.est}><a>est. 1987</a></li>
                <li className={styles.logos}>
                    <a href="https://www.instagram.com/ucsdkp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                        <Image
                            src="/instagram 2.png"
                            alt="Instagram"
                            width={35}
                            height={35}
                        />
                    </a>
                   
                </li>
                <li className={styles.sun}><a><Image
                    src="/Layer_1.svg"
                    alt="KP Sun Logo"
                    width={50}
                    height={50}
                /></a></li>
            </ul>
        </div>
    )
}