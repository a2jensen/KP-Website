"use client"; // This directive marks the component as a client component

import React, { useState, useEffect } from 'react'; // Import React and necessary hooks
import styles from './eventscard.module.css'; // Import styles

const EventCard = ({ event }) => (
    <div className={styles.container}>
        <h1 className={styles.host}>{event.board}</h1>
        <h1 className={styles.title}>{event.title}</h1>
        <p className={styles.date}>{event.date}</p>
        <p className={styles.location}>{event.location}</p>
        <p className={styles.description}>{event.description}</p>
    </div>
);

export default function EventsCard() {
  // Declare a state variable 'data' with an initial empty array and a function 'setData' to update it
  const [data, setData] = useState([]);

  // useEffect hook runs the fetchData function when the component mounts
  useEffect(() => {
    // Define an asynchronous function to fetch data from the API
    const fetchData = async () => {
      // Fetch data from the API
      const res = await fetch("https://script.google.com/macros/s/AKfycbybJzWie6j2SwEV4zDIF8U-nT6AHzwghAfMOatsFDkQ7tSF8VBE_EvSaY5kdNLwuMqj/exec"); // Truncated URL for readability
      // Parse the JSON response
      const result = await res.json();
      // Update the 'data' state with the fetched data
      setData(result.data);
    };

    // Call the fetchData function
    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div className={styles.maincontainer}>
        {data.length === 0 ? (
            <p>Error or its loading info and refresh this</p>
        ) : (
            <div className={styles.cards}>
                {data.map((event, index) => (
                    <EventCard key={index} event={event}/>
                ))}
            </div>
        )}
    </div>
  )
}