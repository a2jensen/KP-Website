import React from 'react';
import styles from './title.module.css';

export default function Title() {
    return (
        <main className={styles.row}>
            
            <div className='col-5 col-s-4'>
                <div className={styles.picture}> PICTURE DIV </div>
            </div>
            <div className='col-7 col-s-9'>
                <div className={styles.header}>
                    <h1> we believe <strong>everyone</strong> <br>
                    </br> has a place in Kaibigang <br></br>
                    Pilipino (KP) !
                    </h1>
                    <p>KP promotes acess to <strong>culture, connection,</strong>
                    and <strong>academic retention.</strong></p>
                </div>
            </div>
        </main>
    )
}