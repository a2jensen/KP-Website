import React from "react";
import styles from "./carousel.module.scss"
// import './carousel.scss';


export default function Carousel() {
    return (
        <div className={styles.carousel}>

            <div className={styles.values}>
                <div className={styles.valueText}>EMPOWERMENT</div>
                <div className={styles.valueText}>❊</div>
                <div className={styles.valueText}>SOCIAL</div>
                <div className={styles.valueText}>❊</div>
                <div className={styles.valueText}>POLITICAL</div>
                <div className={styles.valueText}>❊</div>
                <div className={styles.valueText}>ACADEMIC</div>
                <div className={styles.valueText}>❊</div>
                <div className={styles.valueText}>CULTURAL</div>
                <div className={styles.valueText}>❊</div>
            </div>

            <div className={styles.values}>
                <div className={styles.valueText}>EMPOWERMENT</div>
                <div className={styles.valueText}>❊</div>
                <div className={styles.valueText}>SOCIAL</div>
                <div className={styles.valueText}>❊</div>
                <div className={styles.valueText}>POLITICAL</div>
                <div className={styles.valueText}>❊</div>
                <div className={styles.valueText}>ACADEMIC</div>
                <div className={styles.valueText}>❊</div>
                <div className={styles.valueText}>CULTURAL</div>
                <div className={styles.valueText}>❊</div>
            </div>
        
        </div>
    )
}
