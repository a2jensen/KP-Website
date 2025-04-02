'use client'
import React, {useState, useEffect} from 'react';
// import styles from "./eventsList.module.css";
import styles from "./eventsList.module.scss";
import {Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import EventsCard from '../../eventscard/eventscard.jsx';

export default function EventsList({ eventsData }) {
    // Declare a state variable 'data' with an initial empty array and a function 'setData' to update it
    // Initialize with the passed data, not wrapped in an array
        const [data, setData] = useState(eventsData || []);
        const [filter, setFilter] = useState('UPCOMING') 
        const [isLoading, setIsLoading] = useState(!eventsData || eventsData.length === 0);
        
        // Update loading state when eventsData changes
        useEffect(() => {
            if (eventsData && eventsData.length > 0) {
                setData(eventsData);
                setIsLoading(false);
            }
        }, [eventsData]);
    
    console.log(data);

    const handleChange = (event) => {
        setFilter(event.target.value)
    }

    data.forEach((event) => {
        if(event.board === ''){
            event.board = 'EVENT';
        }
    }); // should i set this to "ANY"?

    // Function that filters the events based on user preference/click
    const filteredEvents = data.filter(event => {
        if(filter === 'UPCOMING'){
            return new Date(event.date) >= new Date();
        }
        else if(filter === 'PAST') {
            return new Date(event.date) < new Date();
        } else if(filter === 'GEN' || filter === 'STAR' || filter === 'CORE'){
            return event.board === filter;
        }
        return true;
    }); // grabs all


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
                        <MenuItem value="UPCOMING">UPCOMING</MenuItem>
                        <MenuItem value="PAST">PAST</MenuItem>
                        <MenuItem value="GEN">GEN</MenuItem>
                        <MenuItem value="STAR">STAR</MenuItem>
                        <MenuItem value="CORE">CORE</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className={styles.eventsContainer}>
                {isLoading ? (
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