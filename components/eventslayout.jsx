import React from 'react';
import styles from "./eventslayout.module.css";

export default function Events() {
    return (
        <div className={styles.events}>
            <div className={styles.splitleft}> 
                <div className={styles.centered}>
                <h1> This Week's GBM</h1>
                </div>   
                
            </div>

            <div className={styles.splitright}>
                <div className={styles.centered}>
                    <h1>More Events:</h1>
                    <button type={styles.button}>Upcoming</button>
                    <button type={styles.button}>General</button>
                    <button type={styles.button}>Star</button>
                    <button type={styles.button}>Core</button>
                </div>
                <div className={styles.container}>
                    <div className={styles.square}>
                        <p>Box 1</p>
                    </div>
                    <div className={styles.square}>
                        <p>Box 2</p>
                    </div>
                    <div className={styles.square}>
                        <p>Box 3</p>
                    </div>
                </div>
            </div>
        </div>

    );
}