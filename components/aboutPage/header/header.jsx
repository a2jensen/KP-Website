import React from 'react'
import styles from './header.module.css';
import TypingEffect from './typing.jsx';


export default function who() {
  return (
      <div className = {styles.KPis}>
      <br/>
      {/*
       <div className = {styles.pinoyStarOne}>★</div>
      <div className = {styles.pinoyStarTwo}>★</div>
      <div className = {styles.pinoyStarThree}>★</div>
       */
      }
      <strong>kp is</strong> <h1 className = {styles.typeWriter}><TypingEffect/>
      </h1>
      </div>
  )
}







