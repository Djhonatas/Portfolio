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
            <p>Caro(a) recrutador,</p>
            <p style={{ textAlign: 'justify' }}>

              Sou Djhonatas Santos de Oliveira, Analista de Sistemas Jr. Atuo na administração dos sistemas acadêmicos Universus e Perseus nas Faculdades Oswaldo Cruz, com destaque para a migração de dados do Universus para o Perseus.<br />

              Tenho experiência em suporte técnico e DBA, além de habilidades em desenvolvimento de APIs e análise de dados. Sou empático, colaborativo e comprometido com o crescimento profissional.<br />

              Fora do trabalho, sou apaixonado por música e encontro inspiração em diversos gêneros e artistas para abordar desafios de forma criativa.<br />

              Busco contribuir para o sucesso da empresa e aprimorar minhas habilidades como backend. Entusiasmado com novos desafios, estou pronto para expandir meus conhecimentos nesta área em constante evolução.<br />

              Grato pela atenção,

              Djhonatas Santos de Oliveira
            </p>
          </div>


          <a href="#contact" className='btn btn-primary'>Vamos Conversar</a>

        </div>
      </div>
    </section>
  )
}

export default About