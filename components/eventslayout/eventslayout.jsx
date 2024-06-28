import React from 'react';
import styles from "./eventslayout.module.css";
import EventsCard from '../eventscard/eventscard';


export default function Events() {
    return (
        <div className={styles.events}>
            <h1 className={styles.title}>UPCOMING EVENTS</h1>
            <EventsCard />
            <p className={styles.more}><a>see more events ARROW</a></p>
        </div>
    );
}