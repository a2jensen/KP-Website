import React from 'react';
import styles from './title.module.css';
import Image from "next/image";




export default function Title() {
    return (
        <div className={styles.group}>            
            <div className={styles.picture}>
                <Image
                    src="/home_pic.png"
                    width={400}
                    height={340}
                    className={styles.responsiveImage}
                />
            </div>
            <div className={styles.header}>
                <h1> <strong>we believe everyone has a place<br>
                        </br>in Kaibigang Pilipino (KP)</strong> !
                </h1>
                <p>KP promotes acess to <strong>culture, connection,</strong>
                    and <strong>academic retention.</strong></p>
            </div>
        </div>
    )
}