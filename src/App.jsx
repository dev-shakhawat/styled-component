import { useState } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Client from './components/Client'
import Community from './components/Community'
import Unseen from './components/Unseen'
import HowtoDesign from './components/HowtoDesign'
import Business from './components/Business'
import Association from './components/Association'
import Merketing from './components/Merketing'
import Demo from './components/Demo'
import Footer from './components/Footer'

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
      <Association/>
      <Merketing/>
      <Demo/>
      <Footer/>
    </>
  )
}

export default App
