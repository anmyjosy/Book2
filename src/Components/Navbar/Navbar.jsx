import React from 'react'
import'./Navbar.css'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>renat.</h1>
      <div className='hom'>
      <a href='/'><p>home</p></a>
      <a href='aboutt'><p>About</p></a>
      <a href='login'><button>LOGIN</button></a>
      </div>
    </div>
  )
}

export default Navbar
