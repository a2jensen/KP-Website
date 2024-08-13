'use client';

import React from 'react'
import styles from './membership.module.css'
import Image from 'next/image'

export default function membership() {
  return (
    <div>
      <div>
        <h3>Membership</h3>
        <p>KP Membership offers perks, including priority access to intramural sports teams, discounted admission at events with fees, and ​the ability to vote for General Board elections. You don’t have to be a member to come to our events! Once you step foot into our space, you are already part of our community 😎.</p>
      </div>
      <Image 
        src='/membership.svg'
        width={1000}
        height={1200}
        style={styles.responsiveImage}
      />
    </div>
  )
}
