import React from 'react';
import styles from "./eventslayout.module.css";
import EventsCard from '../../../eventscard/eventscard.jsx';
import Image from "next/image";

export default function Events() {
    return (
        <div className={styles.events}>
            <div className={styles.star1}>★</div>
            <h1 className={styles.uEvents}>UPCOMING EVENTS:</h1>
            <div className={styles.star2}>★</div>
            <div className={styles.eventsCard}><EventsCard /></div>
            <div className={styles.star3}>★</div>
            <div className={styles.seeMoreArrowContainer}>
            <div className={styles.seeMoreArrow}>
            <div className={styles.star4}>★</div>
            <li className={styles.seemore}><a href="/events">see more events</a></li>
            <li className={styles.arrow}><a href="/events"><Image
                    src="/Vector.svg"
                    width={20.7}
                    height={29.53}
                /></a></li>
                </div>
            </div>
        </div>
    );
}