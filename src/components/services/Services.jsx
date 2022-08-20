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
            <h3>Desenvolvimento</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Desenvolvimento de sites, portifólios, landing pages, e-commerce, etc.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Automação de rotinas através de implementação de A.P.Is.</p>
            </li>
          </ul>
        </article>
        {/*END OF EM BREVE*/}

        <article className='service'>
          <div className='service__head'>
            <h3>Desing Responsivo</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Design de páginas da web que renderizarem bem em uma variedade de dispositivos e tamanhos de janela ou tela do mínimo ao máximo. </p>
            </li>

          </ul>
        </article>
        {/*END OF EM BREVE 2*/}

        <article className='service'>
          <div className='service__head'>
            <h3>Layout Desing</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Aplicaão de técnicas de design gráfico como tipografia, psicologia das cores, alinhament e escala .</p>
            </li>
          </ul>
        </article>
        {/*END OF EM BREVE 3*/}
      </div>
    </section>
  )
}

export default Services