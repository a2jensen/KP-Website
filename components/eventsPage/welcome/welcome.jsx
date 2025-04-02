'use client'
import React, {useState, useEffect} from 'react';
// import styles from "./welcome.module.css"
import styles from "./welcome.module.scss"
import EventsCard from "../../eventscard/eventscard"

export default function Welcome({ eventsData }) {
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
                <p className={styles.summary}>Throughout the year KP hosts events to build community and connection! From Friendship Games to Pilipino Awareness Week to KAAmping, 
                KP cultivates growth in every space we walk through. Stay up to date with everything KP has on our calendar.
                </p>
                <p className={styles.upcoming}> <strong>upcoming...</strong></p>
            </div>
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