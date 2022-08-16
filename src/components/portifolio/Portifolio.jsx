import React from 'react'
import './portifolio.css'
import IMG1 from '../../assets/port.jpg'
import IMG2 from '../../assets/game.png'
import IMG3 from '../../assets/portfolio3.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Embroidery (Em breve)',
    github: 'https://github.com/Djhonatas/Bordados',
    // demo: 'https://dribbble.com/OliveiraDjhonatas'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Blog Game News',
    github: 'https://github.com/Djhonatas',
    // demo: 'https://dribbble.com/OliveiraDjhonatas'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Em breve',
    github: 'https://github.com/Djhonatas',
    // demo: 'https://dribbble.com/OliveiraDjhonatas'
  },

]

const Portifolio = () =>{
  return (
    <section id='portifolio'>
      <h5>Trabalhos Recentes</h5>
      <h2>Portifólio</h2>

      <div className='container portifolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portifolio__item'>
                <div className='portifolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portifolio__item-cta'>
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                  {/* <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a> */}
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