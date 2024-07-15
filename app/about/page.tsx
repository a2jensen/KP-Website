import React from 'react'
import Who from '../../components/aboutPage/who/who'
import History from '../../components/aboutPage/history/history'
import Membership from '../../components/aboutPage/membership/membership' 

export default function about() {
  return (
    <main>
      <Who />
      <History />
      <Membership/>
    </main>
  )
}

