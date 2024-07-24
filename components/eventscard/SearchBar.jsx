// import React from 'react';
// import styles from './searchbar.module.css';

// export default function SearchBar({ setSearchTerm }) {
//   const handleInputChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <div className={styles.searchbar}>
//       <input
//         type="text"
//         placeholder="Search events..."
//         onChange={handleInputChange}
//       />
//     </div>
//   );
// }


import React from 'react';
import styles from './searchbar.module.css';

export default function SearchBar({ setSearchTerm, setFilter }) {
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSelectChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className={styles.searchbar}>
      <input
        type="text"
        placeholder="Search events..."
        onChange={handleInputChange}
      />
      <select onChange={handleSelectChange} className={styles.dropdown}>
        <option value="ALL">All</option>
        <option value="UPCOMING">UPCOMING</option>
        <option value="GEN">GEN</option>
        <option value="STAR">STAR</option>
        <option value="CORE">CORE</option>
      </select>
    </div>
  );
}
