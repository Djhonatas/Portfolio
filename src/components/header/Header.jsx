import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/dev.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello! My name is</h5>
        <h1>Oliveira Djhonatas</h1>
        <h4 className='text-light'>Developer Back-end</h4>
        <CTA />
        <HeaderSocials />
        
        <div className='me'>
          <img src={ME} alt="me" />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header