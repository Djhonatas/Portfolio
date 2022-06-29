import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Quais skills eu possuo</h5>
      <h2>Minha Experiência</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
               <h4>HTML</h4>
               <small className='text-ligth'>Intermediário</small>
              </div>
            </article>
           
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-ligth'>Intermediário</small>
              </div>
            </article>
            
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-ligth'>Básico</small>
              </div>
            </article>
            
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-ligth'>Intermediário</small>
              </div>
            </article>
            
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-ligth'>Básico</small>
              </div>
            </article>

          </div>
        </div>
        <div className='experience__backend'>
        {/*END OF FRONTEND*/}

        <h3>Backend Development</h3>
          <div className='experience__content'>
            
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-ligth'>Básico</small>
              </div>
            </article>
           
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>SQL Server</h4>
                <small className='text-ligth'>Intermediário</small>
              </div>
            </article>
            
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Node JS</h4>
                <small className='text-ligth'>Básico</small>
              </div>
            </article>
          
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience