import React from 'react'
import './footer.css'
import {FiFacebook} from 'react-icons/fi'
import {BsInstagram} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>DJ</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#experience">Experiência</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#portifolio">Portifolio</a></li>
        <li><a href="#testimonials">Depoimentos</a></li>
        <li><a href="#contact">Contatos</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/oliveira.djhonatas/"><FiFacebook /></a>
        <a href="https://www.instagram.com/0lliveira.djhonatas/"><BsInstagram /></a>
        <a href="https://twitter.com/djhonatasss"><FiTwitter /></a>
      </div>

      <div className="footer__copyrigth">
        <small>&copy; DJ</small>
      </div>
    </footer>
  )
}

export default Footer