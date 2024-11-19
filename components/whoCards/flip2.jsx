"use client"; // This directive marks the component as a client component

import React, { useState } from 'react';
import styles from './whoCardA.module.css'
import WhoCardA from './whoCardA.jsx';
import WhoCardB from './whoCardB.jsx';

const CardFlip2 = () => {
  const [isCardA, setIsCardA] = useState(true);

  const handleSwitch = () => {
    setIsCardA(!isCardA);
  };

  return (
    <div>
        {isCardA ? 
        <WhoCardA 
            onSwitch={handleSwitch}
            title="GENERAL"
            content="arrow"
            imageUrl="/GENERAL_PIC.jpg"
        /> : 
        <WhoCardB 
            onSwitch={handleSwitch}
            content=
            {<div>
              GEN board covers different areas of KP, most notably the 
              <b> cultural, political, and social</b> components.
              <br></br><br></br>
              GEN hosts larger events like:
              <ul className={styles.listAdjust}>
                <b><li>Friendship Games,</li></b>
                <b><li>Pilipino Cultural Celebration (PCC),</li></b>
                <b><li>Sayawan,</li></b>
                <b><li>Pilipino Awareness Week (PAW).</li></b>
              </ul>
            </div>}
        />}
    </div>
  );
};

export default CardFlip2;