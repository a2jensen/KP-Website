'use client'
import React, {useState, useEffect} from 'react';
import styles from "./eventslayout.module.scss"
import EventsCard from "../../eventscard/eventscard"

export default function Welcome() {
    // Declare a state variable 'data' with an initial empty array and a function 'setData' to update it
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState('UPCOMING') // state variable to track current filter, upcoming is default
    const [isLoading, setIsLoading] = useState(true); // state variable to track loading state

    // useEffect hook runs the fetchData function when the component mounts
    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true); // Set loading state to true
                // Fetch data from the API with cache-busting parameter
                const res = await fetch(`/api/eventsAPI?_=${new Date().getTime()}`, {
                    method: 'GET',
                    headers: {
                        'Cache-Control': 'no-cache', // Prevent caching on the client side
                        'Pragma': 'no-cache'
                    },
                    cache: 'no-store' // Ensures the fetch request bypasses the cache
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
            } finally {
                setIsLoading(false); // Set loading state to false
            }
        };

        // Call the fetchData function
        fetchData();
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts

    // Function that filters the events based on user preference/click
    const filteredEvents = data.filter(event => {
        if(filter === 'UPCOMING'){
            return new Date(event.date) > new Date();
        } else if(filter === 'GEN' || filter === 'STAR' || filter === 'CORE'){
            return event.board === filter;
        }
        return true;
    }).slice(0,3); // grabs the first three filtered events max


    return (
        <div className={styles.mainContainer}>
            <p className={styles.title}>UPCOMING EVENTS:</p>
            <div className={styles.eventsContainer}>
                {isLoading ? (
                    <div className={styles.loader}></div>
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