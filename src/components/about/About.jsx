import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
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
            Analista de Sistemas com um pouco mais de 1 ano de experiência, estou em busca de realocação profissional.         
          </p>

          <p>
          Busco por uma empresa que me proporcione desafios constantes, pois creio que dessa forma, estará me ajudando no meu crescimento profissional e pessoal.   
          </p>

          <a href="#contact" className='btn btn-primary'>Vamos Conversar</a>

        </div>
      </div>
    </section>
  )
}

export default About