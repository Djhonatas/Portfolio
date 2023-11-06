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

              Me chamo <strong>Djhonatas Oliveira, </strong>Analista de Sistemas com experiência em administração dos sistemas
              acadêmicos Universus e Perseus, adquirido nas Faculdades Oswaldo Cruz,
              destacando-se na migração de dados do sistema Universus para o Perseus.
              Experiente em suporte técnico e administração de banco de dados (MSSQL).<br></br>
              Nas horas vagas, gosto de fazer freelancer e projetos pessoais.
            </p>
          </div>
          <a href="#contact" className='btn btn-primary'>Vamos Conversar</a>

        </div>
      </div>
    </section>
  )
}

export default About