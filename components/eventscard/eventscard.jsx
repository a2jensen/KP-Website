"use client"; // This directive marks the component as a client component

import React from 'react';
import styles from './eventscard.module.scss'; // Import styles
import Image from 'next/image';
import Popup from '../popup/popup'

// takes in data as a param to fill in the
export default function EventsCard({event}) {
  // CHECKPOINT HERE
  // have a hashmap -> keys = boards, values = link to SVGs
  // gen = blue, star = red, star, core = yellow
  // board mixes and all are subject to change in color
  const boardVariants = {
    'GEN': '/eventsCardBlue.svg',
    'STAR': '/eventsCardRed.svg',
    'CORE': '/eventsCardYellow.svg',
    'GEN + STAR': '/eventsCardBlue.svg',
    'GEN + CORE': '/eventsCardRed.svg',
    'STAR + CORE': '/eventsCardYellow.svg',
    'ALL BOARD': '/eventsCardBlue.svg',
    'EVENT': '/grey_circles.svg'
  };

  // setting the boardVariant
  let setVariant = boardVariants[event.board]

  return (
    <div className={styles.container}>
        <h1 className={styles.host}>{event.board}</h1>
        <h1 className={styles.title}>{event.title}</h1>
        <Image 
          src={setVariant}
          alt="Board variant icon" 
          className={styles.ellipse}
          width={300}
          height={150} />
        <p className={styles.date}>date: {event.date} @ {event.time}</p>
        <p className={styles.location}>location: {event.location}</p>
        <div className={styles.description}>
          <Popup
            description={event.description}
            googleForm={event.google_form}
          />
        </div>
    </div>
  )
}