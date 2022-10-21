import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/img.jpeg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <div className='desc__me'>
          <h1 style={{ color: "#55afd3" }}>Hello! </h1><br />
          <h1>I'm Oliveira Djhonatas</h1>
          <h1>A Developer FullStack
            based in Brazil</h1>
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