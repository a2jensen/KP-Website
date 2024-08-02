"use client"; // This directive marks the component as a client component

import React, { useState } from 'react';
import styles from './whoCardA.module.css'
import WhoCardA from './whoCardA.jsx';
import WhoCardB from './whoCardB.jsx';

const CardFlip3 = () => {
  const [isCardA, setIsCardA] = useState(true);

  const handleSwitch = () => {
    setIsCardA(!isCardA);
  };

  return (
    <div>
        {isCardA ? 
        <WhoCardA 
            onSwitch={handleSwitch}
            title="C.O.R.E."
            content="arrow"
            imageUrl="/CORE_PIC.jpg"
        /> : 
        <WhoCardB 
            onSwitch={handleSwitch}
            content=
            {<div>
              CORE embodies KP's <b>outreach to students attending UCSD, high school
                students,</b> and <b>community college students.</b>
              <br></br><br></br>
              CORE notably hosts: <br></br>
              <b>COREcon</b>, which focses on bringing the outer communities
              together to engage in educational and engaging workshops.
             
            </div>}
        />}
    </div>
  );
};

export default CardFlip3;