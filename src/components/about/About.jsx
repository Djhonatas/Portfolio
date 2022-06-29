import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Me conheça</h5>
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
              <FaAward className='about__icon'/>
              <h5>Experiência</h5>
              <small>1+ Anos de experiência</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clientes</h5>
              <small>Em breve</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projetos</h5>
              <small>5+ Completed</small>
            </article>
          </div>

          <p>
            Analista de Sistemas a pouco mais de 1 ano, formado pela Estácio, buscando desafios que possam me ajudar
            a aprimorar meus conhecimentos e me tire da zona de conforto!


            
          </p>

          <a href="#contact" className='btn btn-primary'>Vamos Conversar</a>

        </div>
      </div>
    </section>
  )
}

export default About