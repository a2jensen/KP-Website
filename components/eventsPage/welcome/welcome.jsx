'use client'
import React, {useState, useEffect} from 'react';
import styles from "./welcome.module.css"
import EventsCard from "../../eventscard/eventscard"

export default function Welcome() {
    // Declare a state variable 'data' with an initial empty array and a function 'setData' to update it
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState('UPCOMING') // state variable to track current filter, upcoming is default

    // useEffect hook runs the fetchData function when the component mounts
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

        // Call the fetchData function
        fetchData();
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts

    const upcomingEvents = Array.isArray(data) ? data.slice(0, 3) : [];

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
            <div className={styles.infoContainer}>
                <h3 className={styles.title}>welcome to our events page!</h3>
                <p className={styles.summary}>Throughout the year KP hosts events to build community and connection! <br/>
                From Friendship Games to Pilipino Awareness Week to KAAmping. KP cultivates growth <br/>
                in every space we walk through. Stay up to date with everthing KP has on our calendar
                </p>
                <p className={styles.upcoming}> <strong>upcoming...</strong></p>
            </div>
            <div className={styles.eventsContainer}>
                {filteredEvents.length === 0 ? (
                    <p>Error or its loading info and refresh this</p>
                ) : (
                    <div className={styles.eventCards}>
                        {upcomingEvents.map((event, index) => (
                            <EventsCard key={index} event={event}/>
                        ))}
                    </div>
                    )}
            </div>
        </div>
    )
}