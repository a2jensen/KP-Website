import React from 'react'
import Header from '../../components/aboutPage/header/header'
import WhoAreWe from '../../components/aboutPage/who/who'
import History from '../../components/aboutPage/history/history'
import Membership from '../../components/aboutPage/membership/membership' 

export default function about() {
  return (
    <main>
      <Header/>
      <WhoAreWe/>
      <Membership/>
    </main>
  )
}

