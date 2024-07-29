import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import HomeCards from './components/HomeCards.jsx'
import JobListings from './components/JobListings.jsx'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />
      <JobListings />
    </>
  )
}

export default App