import React from 'react';
import styles from './title.module.css';
import Image from "next/image";




export default function Title() {
    return (
        <div className={styles.group}>            
            <div className={styles.picture}>
                <Image
                    src="/homePhoto.svg"
                    alt="KP Home"
                    width={400}
                    height={340}
                    className={styles.responsiveImage}
                />
            </div>
            <div className={styles.header}>
                <h1> <strong>we believe everyone has a place<br>
                        </br>in Kaibigang Pilipino (KP) !</strong>
                </h1>
                <p>KP promotes access to <strong>culture, connection, </strong>
                     and <strong>academic retention.</strong></p>
            </div>
        </div>
    )
}