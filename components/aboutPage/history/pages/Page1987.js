import React from 'react';
import styles from './Page1987.module.css'
// import setPage from '../components/aboutPage/history/history.jsx'

const Page1987 = ({page, setPage}) => {
  return (
    
    <div className={styles.page}>

      <nav className={styles.timeline}>
        <div className={styles.line}></div>
        <div className={styles.stars}>
          <span onClick={() => setPage(1987)} className={page === 1987 ? styles.active : ''}>&#9733;</span>
          <span onClick={() => setPage(1992)} className={page === 1992 ? styles.active : ''}>&#9733;</span>
          <span onClick={() => setPage(1995)} className={page === 1995 ? styles.active : ''}>&#9733;</span>
          <span onClick={() => setPage(2010)} className={page === 2010 ? styles.active : ''}>&#9733;</span>
          <span onClick={() => setPage(2017)} className={page === 2017 ? styles.active : ''}>&#9733;</span>
          <span onClick={() => setPage(2020)} className={page === 2020 ? styles.active : ''}>&#9733;</span>
          <span onClick={() => setPage(2023)} className={page === 2023 ? styles.active : ''}>&#9733;</span>
        </div>
      </nav>
      <div className={styles.content}>
        <h2 className={styles.heading}>Our humble beginnings...</h2>
        <div className={styles.year}></div>
        
        
        <div className={styles.content}>
          
          {/* <img className={styles.arrow} src="../photoArrow.svg" alt="1987 event" /> */}
          {/* <div className={styles.arrow}></div> */}
          <p className={styles.paragraph}>First PCC 600 A.D</p>
        </div>
      </div>
      
    </div>
  );
};

export default Page1987;