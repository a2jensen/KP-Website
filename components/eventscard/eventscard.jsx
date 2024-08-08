"use client"; // This directive marks the component as a client component

import styles from './eventscard.module.css'; // Import styles

// takes in data as a param to fill in the
export default function EventsCard({event}) {
  // CHECKPOINT HERE
  return (
    <div className={styles.container}>
        <h1 className={styles.host}>{event.board}</h1>
        <h1 className={styles.title}>{event.title}</h1>
        <p className={styles.date}>date: {event.date}</p>
        <p className={styles.location}>location: {event.location}</p>
        <p className={styles.description}>{event.description}</p>
    </div>
  )
}