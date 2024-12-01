'use client'
import React, {useState, useEffect} from 'react';
import styles from "./eventsList.module.css";
import {Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import EventsCard from '../../eventscard/eventscard.jsx';

export default function EventsList() {
    // Declare a state variable 'data' with an initial empty array and a function 'setData' to update it
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState('ALL')

    const handleChange = (event) => {
        setFilter(event.target.value)
    }

        // useEffect hook runs the fetchData function when the component mounts
    useEffect(() => {
        // Define an asynchronous function to fetch data from the API
        const fetchData = async () => {
            try {
                // Fetch data from the API with cache-busting parameter
                const res = await fetch(`/api/eventsAPI?_=${new Date().getTime()}`, { // we can either fetch directly from google spreadsheet API route and that may fix
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
            }
        };

        // Call the fetchData function
        fetchData();
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts


    // Function that filters the events based on user preference/click
    const filteredEvents = data.filter(event => {
        if(filter === 'ALL'){
            return new Date(event.date) > new Date();
        } else if(filter === 'GEN' || filter === 'STAR' || filter === 'CORE'){
            return event.board === filter;
        }
        return true;
    }).slice(0,9); // grabs the first three filtered events max


    return (
        <div className={styles.pageContainer}>
            <div className={styles.filterContainer}>
                <FormControl fullWidth className={styles.filterDropdown}>
                    <InputLabel id="filter-label">Filter</InputLabel>
                    <Select
                        labelId="filter-label"
                        id="filter-select"
                        value={filter}
                        label="Filter"
                        onChange={handleChange}
                    >
                        <MenuItem value="ALL">ALL</MenuItem>
                        <MenuItem value="GEN">GEN</MenuItem>
                        <MenuItem value="STAR">STAR</MenuItem>
                        <MenuItem value="CORE">CORE</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className={styles.eventsContainer}>
                {filteredEvents.length === 0 ? (
                    <div className={styles.loader}></div>
                ) : (
                    <div className={styles.eventGrid}>
                        {filteredEvents.map((event, index) => (
                            <EventsCard key={index} event={event} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
    
}