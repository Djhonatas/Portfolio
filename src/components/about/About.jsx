import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { BsJustify } from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h2 style={{ color: 'white' }}>Sobre mim</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experiência</h5>
              <small>1+ Anos </small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clientes</h5>
              <small>Em breve</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projetos</h5>
              <small>5+ </small>
            </article>
          </div>
          <div className='info'>
            <p style={{ textAlign: 'justify' }}>
              Formado em análise e desenvolvimento de sistemas, pela Universidade Estácio de Sá, busco novos desafios na minha carreira profissional como desenvolvedor back-end, não descartando a possibilidade de atuar como front.
            </p>
            <p style={{ textAlign: 'justify' }}>
              Procuro por uma empresa que possa me proporcionar desafios constantes, inovação e oportunidades de crescimento pessoal e profissional.
            </p>
          </div>


          <a href="#contact" className='btn btn-primary'>Vamos Conversar</a>

        </div>
      </div>
    </section>
  )
}

export default About