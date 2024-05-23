import React from 'react'
import './Hero.css'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div className='hero'>
      <div><h1>WELCOME!</h1>
      <p>Find book's to read</p>
      <button><Link to='book' smooth={true} offset={-80}>Let's Go</Link></button></div>
    </div>
  )
}

export default Hero
