"use client"; // This directive marks the component as a client component

import React, { useState }  from 'react'
import styles from './who.module.css'
import Image from 'next/image'
import CardFlip1 from '../../whoCards/flip1.jsx';
import CardFlip2 from '../../whoCards/flip2.jsx';
import CardFlip3 from '../../whoCards/flip3.jsx';

export default function who() {
  return (
    <div className={styles.group}>  
      {/* include stickers within .group nest */}
      <Image src={"/star.svg"} alt={"star sticker"} width={0} height={0} className={styles.star1}/>
      <Image src={"/star.svg"} alt={"star sticker"} width={0} height={0} className={styles.star2}/>
      <Image src={"/star.svg"} alt={"star sticker"} width={0} height={0} className={styles.star3}/>
      <Image src={"/star.svg"} alt={"star sticker"} width={0} height={0} className={styles.star4}/>
      <Image src={"/world1.svg"} alt={"world sticker"} width={0} height={0} className={styles.world1}/>
      <Image src={"/jeepney1.svg"} alt={"jeep sticker"} width={0} height={0} className={styles.jeep1}/>

      

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