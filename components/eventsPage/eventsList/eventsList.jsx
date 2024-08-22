'use client';
import React, { useState, useEffect } from 'react';
import styles from "./eventsList.module.css";
import EventsCard from '../../eventscard/eventscard.jsx';

export default function EventsList() {
    // Declare a state variable 'data' with an initial empty array and a function 'setData' to update it
    const [data, setData] = useState([]);

    // useEffect hook runs the fetchData function when the component mounts
    useEffect(() => {
        // Define an asynchronous function to fetch data from the API
        const fetchData = async () => {
            try {
                // Fetch data from the API
                const res = await fetch("/api/eventsAPI");
                // Parse the JSON response
                const result = await res.json();
                // Update the 'data' state with the fetched data
                setData(result.data.data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        // Call the fetchData function
        fetchData();
    }, []);

    const listEvents = Array.isArray(data)
        ? data
            .filter(event => event.board && event.title && event.date && event.time && event.location && event.description)
            .slice(0, 99)
        : [];

    return (
        <main className={styles.container}>
            <div className={styles.maincontainer}>
                {data.length === 0 ? (
                    <p>Error or it’s loading info. Please refresh this page.</p>
                ) : (
                    <div className={styles.eventCards}>
                        {listEvents.map((event, index) => (
                            <EventsCard key={index} event={event} />
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
