import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Crousel from './Crousel'
import Cr from './Cr'
import Aboutus from './Aboutus'
import Faclity from './Faclity'
import Contactus from './Contactus'
import Footer from './Footer'
function App() {
  

  return (
    <>
  <Header/>
 <Crousel/>
<Cr/>
<Aboutus/>
<Faclity/>
<Contactus/>

<Footer/> 
    </>
  )
}

export default App
