"use client"; // This directive marks the component as a client component

import React, { useState } from 'react';
import styles from './whoCardA.module.css'
import WhoCardA from './whoCardA.jsx';
import WhoCardB from './whoCardB.jsx';

const CardFlip1 = () => {
  const [isCardA, setIsCardA] = useState(true);

  const handleSwitch = () => {
    setIsCardA(!isCardA);
  };

  return (
    <div>
        {isCardA ? 
        <WhoCardA 
            onSwitch={handleSwitch}
            title="S.T.A.R."
            content="arrow"
            imageUrl="/STAR_PIC.jpg"
        /> : 
        <WhoCardB 
            onSwitch={handleSwitch}
            content= 
            {<div>
              STAR focuses on <b>students teaching students</b>! STAR focuses
              on students building themseves up both academcially and personally!
              <br></br><br></br>
              STAR notably hosts:
              <ul className={styles.listAdjust}>
                <b><li>Peer Counserlors (PCs)</li></b>
                <b><li>Kuya/Ate/Ading (KAA)</li></b>
              </ul>
            </div>}
        />}
    </div>
  );
};

export default CardFlip1;