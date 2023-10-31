import React from 'react'
import './experience.css'
import { RiHtml5Line } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
import { DiCss3 } from 'react-icons/di'
import { TbBrandJavascript, TbBrandReact } from 'react-icons/tb'
import { BsFillBootstrapFill } from 'react-icons/bs'
import { DiMsqlServer } from 'react-icons/di'
import { DiNodejsSmall } from 'react-icons/di'


const Experience = () => {
  return (
    <section id='experience'>
      <h2 style={{ color: 'white' }}>Minha Experiência</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3 style={{ color: 'white' }}>Front-end Development</h3>
          <div className='experience__content'>

            <article className='experience__details'>
              <RiHtml5Line className='experience__details-icon' />
              <div>
                <h4>HTML5</h4>
                <small className='text-ligth'></small>
              </div>
            </article>

            <article className='experience__details'>
              <DiCss3 className='experience__details-icon' />
              <div>
                <h4>CSS3</h4>
                <small className='text-ligth'></small>
              </div>
            </article>

            <article className='experience__details'>
              <TbBrandJavascript className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-ligth'></small>
              </div>
            </article>
            <article className='experience__details'>
              <TbBrandReact className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-ligth'></small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillBootstrapFill className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-ligth'></small>
              </div>
            </article>

          </div>
        </div>
        <div className='experience__backend'>
          {/*END OF FRONTEND*/}

          <h3 style={{ color: 'white' }}>Back-end Development</h3>
          <div className='experience__content'>


            <article className='experience__details'>
              <DiMsqlServer className='experience__details-icon' />
              <div>
                <h4>SQL Server</h4>
                <small className='text-ligth'></small>
              </div>
            </article>

            <article className='experience__details'>
              <DiNodejsSmall className='experience__details-icon' />
              <div>
                <h4>Node.JS</h4>
                <small className='text-ligth'></small>
              </div>
            </article>

            <article className='experience__details'>
              <SiMongodb className='experience__details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-ligth'></small>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience