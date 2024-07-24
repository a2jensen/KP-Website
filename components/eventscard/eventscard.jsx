"use client"; // This directive marks the component as a client component

import React, { useState, useEffect } from 'react'; // Import React and necessary hooks
import styles from './eventscard.module.css'; // Import styles
import SearchBar from './searchbar'; // Ensure the correct path to the searchbar component

const EventCard = ({ event }) => (
    <div className={styles.container}>
        <h1 className={styles.host}>{event.board}</h1>
        <h1 className={styles.title}>{event.title}</h1>
        <p className={styles.date}>{event.date}</p>
        <p className={styles.location}>{event.location}</p>
        <p className={styles.description}>{event.description}</p>
    </div>
);

export default function EventsCard() {
  const [data, setData] = useState([]); // Declare a state variable 'data' with an initial empty array and a function 'setData' to update it
  const [searchTerm, setSearchTerm] = useState(""); // State to store the search term
  const [filter, setFilter] = useState("ALL"); // State to store the selected filter

  useEffect(() => {
    // useEffect hook runs the fetchData function when the component mounts
    const fetchData = async () => {
      // Define an asynchronous function to fetch data from the API
      const res = await fetch("https://script.google.com/macros/s/AKfycbybJzWie6j2SwEV4zDIF8U-nT6AHzwghAfMOatsFDkQ7tSF8VBE_EvSaY5kdNLwuMqj/exec"); // Truncated URL for readability
      const result = await res.json(); // Parse the JSON response
      setData(result.data); // Update the 'data' state with the fetched data
    };

    fetchData(); // Call the fetchData function
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  const filteredData = data.filter(event => {
    const matchesSearchTerm = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              event.board.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              event.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              event.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filter === "ALL" || event.board.toLowerCase() === filter.toLowerCase();
    
    return matchesSearchTerm && matchesFilter;
  });

  return (
    <div className={styles.maincontainer}>
      <SearchBar setSearchTerm={setSearchTerm} setFilter={setFilter} />
      {filteredData.length === 0 ? (
        <p>No events found. Please try a different search term.</p>
      ) : (
        <div className={styles.cards}>
          {filteredData.map((event, index) => (
            <EventCard key={index} event={event}/>
          ))}
        </div>
      )}
    </div>
  )
}


// "use client"; // This directive marks the component as a client component

// import React, { useState, useEffect } from 'react'; // Import React and necessary hooks
// import styles from './eventscard.module.css'; // Import styles
// import SearchBar from './SearchBar'; // Import the new SearchBar component

// const EventCard = ({ event }) => (
//     <div className={styles.container}>
//         <h1 className={styles.host}>{event.board}</h1>
//         <h1 className={styles.title}>{event.title}</h1>
//         <p className={styles.date}>{event.date}</p>
//         <p className={styles.location}>{event.location}</p>
//         <p className={styles.description}>{event.description}</p>
//     </div>
// );

// export default function EventsCard() {
//   const [data, setData] = useState([]); // Declare a state variable 'data' with an initial empty array and a function 'setData' to update it
//   const [searchTerm, setSearchTerm] = useState(""); // State to store the search term

//   useEffect(() => {
//     // useEffect hook runs the fetchData function when the component mounts
//     const fetchData = async () => {
//       // Define an asynchronous function to fetch data from the API
//       const res = await fetch("https://script.google.com/macros/s/AKfycbybJzWie6j2SwEV4zDIF8U-nT6AHzwghAfMOatsFDkQ7tSF8VBE_EvSaY5kdNLwuMqj/exec"); // Truncated URL for readability
//       const result = await res.json(); // Parse the JSON response
//       setData(result.data); // Update the 'data' state with the fetched data
//     };

//     fetchData(); // Call the fetchData function
//   }, []); // Empty dependency array ensures this effect runs only once when the component mounts


// //SEARCH BAR LOGIC
//   const filteredData = data.filter(event =>
//     event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     event.board.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     event.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     event.description.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className={styles.maincontainer}>
//       <SearchBar setSearchTerm={setSearchTerm} />
//       {filteredData.length === 0 ? (
//         <p>No events found. Please try a different search term.</p>
//       ) : (
//         <div className={styles.cards}>
//           {filteredData.map((event, index) => (
//             <EventCard key={index} event={event}/>
//           ))}
//         </div>
//       )}
//     </div>
//   )
// }
// //END OF SEARCH BAR LOGIC
//2.0


// //   return (
// //     <div className={styles.maincontainer}>
// //         {data.length === 0 ? (
// //             <p>Error or its loading info and refresh this</p>
// //         ) : (
// //             <div className={styles.cards}>
// //                 {data.map((event, index) => (
// //                     <EventCard key={index} event={event}/>
// //                 ))}
// //             </div>
// //         )}
// //     </div>
// //   )
// // }
// 1.0