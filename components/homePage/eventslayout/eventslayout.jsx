'use client';
import React, { useState, useEffect } from 'react';
import styles from "./eventslayout.module.css";
import EventsCard from '../../eventscard/eventscard.jsx';

export default function Events() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch data from the API
                const res = await fetch('/api/eventsAPI');

                // Check if the response is ok (status code 200-299)
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }

                // Parse the JSON response
                const result = await res.json();

                // Log the result to check the structure
                console.log('API response:', result);

                // Ensure that the data is an array before setting it
                if (Array.isArray(result.data.data)) {
                    setData(result.data.data);
                } else {
                    throw new Error("Expected an array but got something else");
                }
            } catch (err) {
                // Handle and log the error
                console.error('Fetch error:', err);
                setError(err.message);
            }
        };

        fetchData();
    }, []);

    // Slice the array to get the first 3 events, handle cases where data might be undefined or not an array
    const upcomingEvents = Array.isArray(data) ? data.slice(0, 3) : []; // CAN BE CHANGED

    return (
        <div className={styles.events}>
            <h1 className={styles.title}>UPCOMING EVENTS</h1>

            <div className={styles.maincontainer}>
                {error ? (
                    <p>{`Error: ${error}`}</p>
                ) : data.length === 0 ? (
                    <p>Loading or no events found, please refresh.</p>
                ) : (
                    <div className={styles.eventCards}>
                        {upcomingEvents.map((event, index) => (
                            <EventsCard key={index} event={event} />
                        ))}
                    </div>
                )}
            </div>
            <p className={styles.more}><a>see more events ARROW</a></p>
        </div>
    );
}
