import React from 'react'

import {Navbar,CTA, Brand} from './components'
import {Header,Features,Possibility,WhatGPT3,Blog,Footer} from './container'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App