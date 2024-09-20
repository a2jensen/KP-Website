'use client';

import React from 'react'
import styles from './membership.module.css'
import Image from 'next/image'

export default function membership() {
  return (
    <div className={styles.group}>
      <div className={styles.container}>
        <h3 className={styles.member}>Membership</h3>
        <p className={styles.info}>
        KP Membership offers perks, including 
        <strong className={styles.bold}> priority access </strong> to intramural sports teams, 
        <strong> discounted admission </strong> at events with fees, and the 
        <strong> ability to vote </strong> for General Board elections.
        <span> </span><u className={styles.underline}>You don’t have to be a member to come to our events!</u><span> </span>
        Once you step foot into our space, you are already part of our community😎.
        
        <br />
        <br />Links:
        <br />Video
        <br />Quiz 1 (not active)
        <br />Quiz 2
        <br />*Please note, the Quiz #1 is not active. You currently DO NOT need to submit this to achieve membership. Please fulfill the other steps.
        <br />
        <br />
        </p>
      </div>
      <Image className={styles.image}
        src='/membership.svg'
        width={1000}
        height={1200}
        style={styles.responsiveImage}
      />
    </div>
  )
}