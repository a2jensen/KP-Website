import React from 'react'
import styles from './summary.module.css'


export default function Summary() {
    return (
        <div className={styles.quotePage}>
            <div className={styles.quoteContainer}>
                

                
                <div className={styles.quoteText}>
                    KP meets <strong>weekly</strong> for General Body Meetings (GBM) alongside events hosted by the three boards <strong>(STAR, GEN, CORE)</strong> throughout the school year. 
                    <br />
                    <br />
                    Come to KP the way you want, whenever you want!

                </div>
                <div className={styles.quoteStar}></div>
                
               
            </div>
        </div>
    )
}