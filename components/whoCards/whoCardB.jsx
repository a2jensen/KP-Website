import React from 'react'
import styles from './whoCardB.module.css'

const WhoCardB = ({ onSwitch, content }) => {
  return (
    <div className={styles.card} onClick={onSwitch} >
      {"/tape.svg" && <img src={"/tape.svg"} alt={content} className={styles.tape} />}
        <div className={styles.overlaycard}>
          <div className={styles.box}> {onSwitch} </div>
          <div className={styles.overlaytext}> {content} </div>
        </div>
      <div className={styles.arrow}> 
      {"/flip.png" && <img src={"/flip.png"} alt={content} className={styles.flip} />}
       </div>
    </div>
  );
};

export default WhoCardB;
