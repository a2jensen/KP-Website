'use client'
import React, {useState, useEffect} from 'react';
import styles from "./eventsList.module.css";
import EventsCard from '../../eventscard/eventscard.jsx';

export default function EventsList() {
    // Declare a state variable 'data' with an initial empty array and a function 'setData' to update it
    const [data, setData] = useState([]);

    // useEffect hook runs the fetchData function when the component mounts
    useEffect(() => {
        // Define an asynchronous function to fetch data from the API
        const fetchData = async () => {
        // Fetch data from the API
        const res = await fetch("/api/eventsAPI"); // Truncated URL for readability
        // Parse the JSON response
        const result = await res.json();
        // Update the 'data' state with the fetched data
        setData(result.data.data);
        };

        // Call the fetchData function
        fetchData();
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts

    const listEvents = Array.isArray(data) 
        ? data
            .filter(event => {
                return event.board && event.title && event.date && event.time && event.location && event.description
            }).slice(0,99) : [];

    return (
        <main class={styles.container}>
            Events list
            <div className={styles.maincontainer}>
                {data.length === 0 ? (
                    <p>Error or its loading info and refresh this</p>
                ) : (
                    <div className={styles.eventCards}>
                        {listEvents.map((event, index) => (
                            <EventsCard key={index} event={event}/>
                        ))}
                    </div>
                    )}
            </div>
        </main>
        
    )
}