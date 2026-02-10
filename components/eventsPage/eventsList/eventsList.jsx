'use client'
import React, {useState } from 'react';
// import styles from "./eventsList.module.css";
import styles from "./eventsList.module.scss";
import {Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import EventsCard from '../../eventscard/eventscard.jsx';

export default function EventsList({ eventsData }) {
    const [filter, setFilter] = useState("UPCOMING");
    const handleChange = (event) => {
        setFilter(event.target.value)
    }

    eventsData.forEach((event) => {
        if(event.board === ''){
            event.board = 'EVENT';
        }
    }); 

    const filteredEvents = eventsData.filter(event => {
        if(filter === 'UPCOMING'){
            return new Date(event.date) >= new Date();
        }
        else if(filter === 'PAST') {
            return new Date(event.date) < new Date();
        } else if(filter === 'GEN' || filter === 'STAR' || filter === 'CORE'){
            return event.board === filter;
        }
        return true;
    });


    return (
        <div className={styles.pageContainer}>
            <div className={styles.filterContainer}>
                <FormControl className={styles.filterDropdown}>
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
                {filteredEvents.length === 0 ? (
                    <p className={styles.upcoming}>no {filter.toLowerCase()} events.</p>
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