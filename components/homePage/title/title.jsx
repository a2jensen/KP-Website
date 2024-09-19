import React from 'react';
import styles from './title.module.css';
import Image from "next/image";


export default function Title() {
    return (
        <div className={styles.group}>            
            <div className={styles.picture}>
                <img src="/homePhoto.svg" className={styles.responsiveImage} alt="Home Photo" />
            </div>
            <div className={styles.header}>
                <h1> <strong>we believe <span className={styles.everyone}>everyone</span> has a place<br>
                        </br>in <span className={styles.clubName}>Kaibigang Pilipino</span> (<span className={styles.clubAbbriviated}>KP</span>) !</strong>
                </h1>
                <p>KP promotes access to <strong>culture, connection, </strong>
                     and <strong>academic retention.</strong></p>
            </div>
        </div>
    )
}