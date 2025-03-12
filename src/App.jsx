import { useState } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Client from './components/Client'
import Community from './components/Community'
import Unseen from './components/Unseen'
import HowtoDesign from './components/HowtoDesign'
import Business from './components/Business'

function App() {

  return (
    <>
      <Navbar/>
      <Banner/>
      <Client/>
      <Community/>
      <Unseen/>
      <Business/>
      <HowtoDesign/>
    </>
  )
}

export default App
