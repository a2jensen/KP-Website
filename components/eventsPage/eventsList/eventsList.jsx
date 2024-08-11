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
    
    // NOTES ON THE EVENT PAGE:
    // little quarter div: can be done with a hashmap

    // current date: get the current date with function

    // toggle week: i think for now lets have it just show ALL events, and users can scroll through it page by page
    // we may need a backend for a toggle week button. we need to make a script that parses data from https://blink.ucsd.edu/instructors/resources/academic/calendars/2024.html
    // collect dates of instruction begins and quarter ending. from there take the interval between those two dates and divide all dates between them into weeks 1/2/3/etc.
    // we can then work with that data to properly create a toggle button. new API has to be made to make calls to the backend. we can use cockroach DB with prisma as ORM
    // fall quarter has a week 0 quarter but we can omit that.
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