'use client'
import React, {useState, useEffect} from 'react';
import styles from "./eventslayout.module.css";
import EventsCard from '../../../eventscard/eventscard.jsx';


export default function Events() {
    // Declare a state variable 'data' with an initial empty array and a function 'setData' to update it
    const [data, setData] = useState([]);

    // useEffect hook runs the fetchData function when the component mounts
    useEffect(() => {
        // Define an asynchronous function to fetch data from the API
        const fetchData = async () => {
        // Fetch data from the API
        const res = await fetch("https://script.googleusercontent.com/macros/echo?user_content_key=ep7384Gd1DNmMyiw3sYfXSAaCljmJkBbW2bRSVdsGA9mCe4QUhKJgxhzu_wY9Ss2ViNtf_03LS7yN9FeOophFWyBSmp1e9QGm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnOX0nNis3yyEipsJvvBf2fD4NgHpAmDs_b7dsj8psk4MWBosyKEb9YX8WEDfrWfjcgiLCCLCT9bkhRTcYnRq_I2YvyyEYnx8Q9z9Jw9Md8uu&lib=MCNh0E4qRm-0bTPTw2U6zBk4oyDv52cB3"); // Truncated URL for readability
        // Parse the JSON response
        const result = await res.json();
        // Update the 'data' state with the fetched data
        setData(result.data);
        };

        // Call the fetchData function
        fetchData();
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts

    const upcomingEvents = data.slice(0,3);

    return (
        <div className={styles.events}>
            <h1 className={styles.title}>UPCOMING EVENTS</h1>

            <div className={styles.maincontainer}>
                {data.length === 0 ? (
                    <p>Error or its loading info and refresh this</p>
                ) : (
                    <div className={styles.eventCards}>
                        {upcomingEvents.map((event, index) => (
                            <EventsCard key={index} event={event}/>
                        ))}
                    </div>
                    )}
            </div>
            <p className={styles.more}><a>see more events ARROW</a></p>
        </div>
    );
}

// CHECKPOINT HERE