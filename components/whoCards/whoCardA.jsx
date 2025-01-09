import React from 'react'
import styles from './whoCardA.module.scss'

const WhoCardA = ({ onSwitch, title, content, imageUrl }) => {
  return (
    <div className={styles.card} onClick={onSwitch}>
      {"/tape.svg" && <img src={"/tape.svg"} alt={title} className={styles.tape} />}
      {imageUrl && <img src={imageUrl} alt={title} className={styles.cardImage} />}
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <div className={styles.arrow}> 
          {"/flip.png" && <img src={"/flip.png"} alt={content} className={styles.flip} />}
        </div>
      </div>
    </div>
  );
};

export default WhoCardA;