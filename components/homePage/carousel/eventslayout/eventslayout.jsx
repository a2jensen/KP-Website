import React from 'react';
import styles from "./eventslayout.module.css";
import EventsCard from '../../../eventscard/eventscard.jsx';


export default function Events() {
    return (
        <div className={styles.events}>
            <h1 className={styles.uEvents}>UPCOMING EVENTS</h1>
            <h1 className={styles.eventsCard}><EventsCard /></h1>
            <div className={styles.seeMoreArrow}>
            <p className={styles.seemore}><a href="">see more events</a></p>
            <p className={styles.arrow}><a href="">arrow</a></p>
            </div>
        </div>
    );
}