import React from 'react'
import Navbar from './Navbar'
import Landing from '../components/Landing'
import History from '../components/History'
import Story from '../components/Story'
import Contact from '../components/Contact'

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Landing></Landing>
      <History></History>
      <Story></Story>
      <Contact></Contact>
    </div>
  )
}

export default Home
