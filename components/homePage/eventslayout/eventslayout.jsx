import React from 'react';
import styles from "./eventslayout.module.scss"
import EventsCard from "../../eventscard/eventscard"

export default function EventsLayout({ eventsData }) {
    const filteredEvents = eventsData.filter(event => {
        return new Date(event.date) > new Date();
    }).slice(0, 3);

    return (
        <div className={styles.mainContainer}>
            <p className={styles.title}>UPCOMING EVENTS:</p>
            <div className={styles.eventsContainer}>
                {filteredEvents.length === 0 ? (
                    <p className={styles.upcoming}>no upcoming events.</p>
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
