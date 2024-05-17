// import { useState } from 'react'
import React from 'react'
import './App.css'
import Head from './compoents/Head'
import Nav from './compoents/Nav'
import History from './compoents/History'
import AR from './compoents/AR'
import Team from './compoents/Team'
import Footer from './compoents/Footer'


function App() {

  return (
   <div className="">
      <Nav/>
      <Head/>
      <History/>
      <hr/>
      <AR/>
      <Team/>
      <Footer/>
      
   </div>
  )
}

export default App
