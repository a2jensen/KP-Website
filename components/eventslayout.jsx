import React from 'react';
import styles from "./eventslayout.module.css";

export default function Events() {
    return (
        <div className={styles.splitScreen}>
            <div className={styles.leftPanel}> 
                <div className={styles.centered}>
                <h1 className={styles.header}> This Week's GBM:</h1>
                <img></img>
                </div>   
            </div>

            <div className={styles.rightPanel}>
                <div className={styles.buttons}>
                    <h1 className={styles.header}>More Events:</h1>
                    <button className={styles.Button}>UPCOMING</button>
                    <button className={styles.Button}>GENERAL</button>
                    <button className={styles.Button}>STAR</button>
                    <button className={styles.Button}>CORE</button>
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
                <p className={styles.more}>See More Events</p>
            </div>
        </div>

    );
}