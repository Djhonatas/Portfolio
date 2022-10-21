import React from 'react'
import './portifolio.css'
import IMG1 from '../../assets/tech.jpg'
import IMG2 from '../../assets/game.png'
import IMG3 from '../../assets/dash.png'


const data = [

  {
    id: 1,
    image: IMG2,
    title: 'Blog Game News',
    github: 'https://github.com/Djhonatas/Blog.git',
    demo: 'https://morning-ravine-54740.herokuapp.com/'
  },


  {
    id: 2,
    image: IMG3,
    title: 'Dashboard',
    github: 'https://github.com/Djhonatas/DashBorad-responsive',
    demo: 'https://dash-borad-responsive.vercel.app/'
  },

  {
    id: 3,
    image: IMG1,
    title: 'A.P.I (Em breve)',
    github: 'https://github.com/Djhonatas/Rest-API-eCommerce',
    // demo: 'https://dribbble.com/OliveiraDjhonatas'
  },

]

const Portifolio = () => {
  return (
    <section id='portifolio'>

      <h2>Portifólio</h2>

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