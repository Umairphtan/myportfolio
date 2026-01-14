import React from 'react'
import Hero from './components/hero'
import Skill from './components/skills'
import Experience from './components/expiernce'
import AboutPage from './components/about'

function page() {
  return (
    <div>
      <Hero></Hero>
      <AboutPage></AboutPage>
    <Skill></Skill>
    <Experience></Experience>
      

    </div>
  )
}

export default page