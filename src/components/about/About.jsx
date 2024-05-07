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
              <small>2+ Anos </small>
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
            <p>Caro(a) recrutador,</p>
            <p style={{ textAlign: 'justify' }}>

              Me chamo <strong>Djhonatas Oliveira, </strong> sou analista de sistemas nas Faculdades Oswaldo Cruz,
              onde fui responsável pela migração de dados entre sistemas educacionais ERP, desenvolvimento da API para gerar os certificados dos alunos da Pós-Graduação e da API onde restaurantes parceiros validam os funcionários da instituição, entre outras coisas.
              <br></br>Aguardo ansiosamente o seu contato para que eu possa detalhar as experiências adquiridas nesse período.
            </p>
          </div>
          <a href="#contact" className='btn btn-primary'>Vamos Conversar</a>

        </div>
      </div>
    </section>
  )
}

export default About