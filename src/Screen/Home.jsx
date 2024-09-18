import React from 'react'
import Navbar from './Navbar'
import Landing from '../components/Home/Landing'
import History from '../components/Home/History'
import Story from '../components/Home/Story'
import Contact from '../components/Home/Contact'
import About from '../components/Home/About'
import Aboutlast from '../components/Home/Aboutlast'

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Landing></Landing>
      <History></History>
      <Story></Story>
      <About></About>
      <Aboutlast/>

     
    </div>
  )
}

export default Home
