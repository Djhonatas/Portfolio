import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>O que eu ofereço</h5>
      <h2>Serviços</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Comprometimento</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Entregar o melhor de mim nos projetos que eu assumir.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Clean Code.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Está sempre em busca da melhor solução para o problema</p>
            </li>
          </ul>
        </article>
        {/*END OF EM BREVE*/}

        <article className='service'>
          <div className='service__head'>
            <h3>Em Breve 2</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/*END OF EM BREVE 2*/}

        <article className='service'>
          <div className='service__head'>
            <h3>Em Breve 3</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/*END OF EM BREVE 3*/}
      </div>changin
    </section>
  )
}

export default Services