import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/djhonatas-oliveira-478b1b1b1/' target='_blank'><BsLinkedin /></a>
      <a href='https://github.com/Djhonatas' target='_blank'><FaGithub /></a>
      <a href='https://www.instagram.com/djhonatas.0liveira/' target='_blank'><FaInstagramSquare /></a>

    </div>
  )
}

export default HeaderSocials