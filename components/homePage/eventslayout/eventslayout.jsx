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
                // Fetch data from the API with cache-busting parameter
                const res = await fetch(`/api/eventsAPI?_=${new Date().getTime()}`, {
                    method: 'GET',
                    headers: {
                        'Cache-Control': 'no-cache', // Prevent caching on the client side
                        'Pragma': 'no-cache'
                    },
                    cache: 'no-cache' // Ensures the fetch request bypasses the cache
                });

                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }

                // Parse the JSON response
                const result = await res.json();
                
                // Update the 'data' state with the fetched data
                setData(result.data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
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
