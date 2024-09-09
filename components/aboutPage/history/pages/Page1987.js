import React from 'react';
import styles from './Page1987.module.css'
// import setPage from '../components/aboutPage/history/history.jsx'

const Page1987 = ({page, setPage}) => {
  return (
    
    <div className={styles.page}>
      <div className={styles.content}>
        <h2 className={styles.heading}>Our humble beginnings...</h2>
        <div className={styles.year}></div>
        <p className={styles.paragraph}>Kaibigang Pilipino first registered as a student organization</p>

      </div>
      <img className={styles.image} src="public/1987.svg" alt="Two stick figures wearing caps with the Philippine flag holding a sign that says 'KP'." />
    </div>
  );
};

export default Page1987;