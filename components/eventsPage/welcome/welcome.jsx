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
        // Define an asynchronous function to fetch data from the API
        const fetchData = async () => {
        // Fetch data from the API
        const res = await fetch("/api/eventsAPI"); // Truncated URL for readability

        if(!res.ok){
            throw new Error(`HTTP error! status: ${res.status}`)
        }
        // Parse the JSON response
        const result = await res.json();
        
        console.log('API Response:', result)

        if (Array.isArray(result.data.data)) {
            setData(result.data.data);
        } else {
            throw new Error("Expected an array but we got something else")
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
    }).slice(0,3);


    return (
        <div className={styles.container}>
            <h3 className={styles.title}>welcome to our events page!</h3>
            <p>Throughout the year KP hosts events to build community and connection! <br/>
            From Friendship Games to Pilipino Awareness Week to KAAmping. KP cultivates growth <br/>
            in every space we walk through. Stay up to date with everthing KP has on our calendar
            </p>
            <ul>
                <li onClick={() => setFilter('UPCOMING')}>UPCOMING</li>
                <li onClick={() => setFilter('GEN')}>GEN</li>
                <li onClick={() => setFilter('STAR')}>STAR</li>
                <li onClick={() => setFilter('CORE')}>CORE</li>
            </ul>
            <div className={styles.maincontainer}>
                {filteredEvents.length === 0 ? (
                    <p>Error or its loading info and refresh this</p>
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