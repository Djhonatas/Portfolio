import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/photo2.jpeg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <div className='desc__me'>
          <h1 style={{ color: "white" }}>Olá! </h1><br />
          <h2>Me chamo <b>Djhonatas Oliveira,</b></h2>
          <h2>desenvolvedor fullstack</h2>
          <CTA />
          <HeaderSocials />
        </div>

        <div className='me'>
          <img src={ME} alt="me" />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header