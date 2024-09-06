"use client"; // This directive marks the component as a client component

import React, { useState }  from 'react'
import styles from './who.module.css'

import CardFlip1 from '../../whoCards/flip1.jsx';
import CardFlip2 from '../../whoCards/flip2.jsx';
import CardFlip3 from '../../whoCards/flip3.jsx';

export default function who() {
  return (
    <div className={styles.group}>  
      {/* include stickers within .group nest */}
      <img src={"/star.svg"} alt={"star sticker"} className={styles.star1} />
      <img src={"/star.svg"} alt={"star sticker"} className={styles.star2} />
      <img src={"/star.svg"} alt={"star sticker"} className={styles.star3} />
      <img src={"/star.svg"} alt={"star sticker"} className={styles.star4} />
      <img src={"/world1.svg"} alt={"world sticker"} className={styles.world1} />
      <img src={"/jeepney1.svg"} alt={"jeep sticker"} className={styles.jeep1} />

      <div className={styles.header}>
          <h1> <strong> <span className={styles.KPyellow}> who </span> are we? </strong> </h1>
      </div>
      <div className={styles.cardLayout}>
        <CardFlip2 />
        <CardFlip1 />
        <CardFlip3 />      
      </div>
  </div>
  );
}