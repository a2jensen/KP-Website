import React from 'react';
import styles from './Page1987.module.css'
// import setPage from '../components/aboutPage/history/history.jsx'

const Page1987 = ({page, setPage}) => {
  return (
    
    <div className={styles.page}>
      <div className={styles.content}>
        <h2 className={styles.heading}>Our humble beginnings...</h2>
        <div className={styles.year}></div>
        
        
        <div className={styles.content}>
          {/* <img className={styles.image} src="components/aboutPage/history/images/timelinePhotos/Image-1.svg" alt="1987 event" /> */}
          
          <img className={styles.arrow} src="../photoArrow.svg" alt="1987 event" />
          <div className={styles.arrow}></div>
          
          <p className={styles.paragraph}>First PCC 600 A.D</p>
        </div>
        
        <img className={styles.image} src="Image-1.svg" alt="Image 1" />
      </div>
      
    </div>
  );
};

export default Page1987;