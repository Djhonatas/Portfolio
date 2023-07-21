import React from 'react'
import './portifolio.css'
import IMG1 from '../../assets/mario.jpg'
import IMG2 from '../../assets/game.png'
import IMG3 from '../../assets/dash.png'
import IMG4 from '../../assets/tech.jpg'


const data = [

  {
    id: 1,
    image: IMG1,
    title: 'Jogo Super Mário',
    github: 'https://github.com/Djhonatas/super-mario.git',
    demo: 'https://super-mario-five.vercel.app/'
  },

  {
    id: 2,
    image: IMG2,
    title: 'Blog Game News',
    github: 'https://github.com/Djhonatas/Blog.git',
    demo: 'https://morning-ravine-54740.herokuapp.com/'
  },


  {
    id: 3,
    image: IMG3,
    title: 'Dashboard',
    github: 'https://github.com/Djhonatas/DashBorad-responsive',
    demo: 'https://dash-borad-responsive.vercel.app/'
  },

  {
    id: 4,
    image: IMG4,
    title: 'API E-commerce',
    github: 'https://github.com/Djhonatas/Rest-API-eCommerce',
    // demo: 'https://dribbble.com/OliveiraDjhonatas'
  },

]

const Portifolio = () => {
  return (
    <section id='portifolio'>

      <h2 style={{ color: 'white' }}>Portfolio</h2>

      <div className='container portifolio__container'>
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portifolio__item'>
                <div className='portifolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portifolio__item-cta'>
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portifolio