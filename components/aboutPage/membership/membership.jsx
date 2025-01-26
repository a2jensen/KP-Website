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
        <br />&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://drive.google.com/file/d/1PP2XXKVIs1sqAz1HARKY3keDzCqZOSVX/view" target="_blank">Video</a>
        <br />&nbsp;&nbsp;&nbsp;&nbsp;<a target="https://docs.google.com/forms/d/e/1FAIpQLSc1GqQ7it7ACOf_hZ9gwOQ9knzFe86d_6qbGPmQ5x6U2VP0Tw/viewform">Quiz 1</a>
        <br />&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://docs.google.com/forms/d/e/1FAIpQLSeecIfxc63lB5mEIwzzUpVhMsov0tumTU3BDvU8-ZCBY0uDCw/viewform" target="_blank">Quiz 2</a>
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