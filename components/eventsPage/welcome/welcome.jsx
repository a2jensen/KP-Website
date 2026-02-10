'use client'
import React, { useState, useEffect } from 'react';
import styles from "./welcome.module.scss"
import EventsCard from "../../eventscard/eventscard"

export default function Welcome({ eventsData }) {
    const filteredEvents = eventsData.filter(event => new Date(event.date) >= new Date()).slice(0, 3);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.infoContainer}>
                <h3 className={styles.title}>welcome to our events page!</h3>
                <p className={styles.summary}>Throughout the year KP hosts events to build community and connection! From Friendship Games to Pilipino Awareness Week to KAAmping, 
                KP cultivates growth in every space we walk through. Stay up to date with everything KP has on our calendar.
                </p>
                <p className={styles.upcoming}> <strong>upcoming....</strong></p>
            </div>
            <div className={styles.eventsContainer}>
                {filteredEvents.length === 0 ? (
                    <div className={styles.notFound}>no upcoming events.</div>
                ) : (
                    <div className={styles.eventCards}>
                        {filteredEvents.map((event, index) => (
                            <EventsCard key={index} event={event}/>
                        ))}
                    </div>
                    )}
            </div>
        </div>
    )
}