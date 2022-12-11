import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h2>Sobre mim</h2>

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
              <small>1+ Anos de experiência</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clientes</h5>
              <small>Em breve</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projetos</h5>
              <small>5+ Completed</small>
            </article>
          </div>
          <div className='info'>
            <p>
              Formado em Análise e desenvolvimen de Sistemas, pela Universidade Estácio de Sá.
            </p>
            <p>
              Desenvolvedor FullStack em busca de recolocação profissional, com ênfase em desenvolvimento back-end
            </p>
          </div>


          <a href="#contact" className='btn btn-primary'>Vamos Conversar</a>

        </div>
      </div>
    </section>
  )
}

export default About