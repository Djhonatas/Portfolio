import React from 'react'
import './portifolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'



const data = [
  {
    id: 1,
    image: IMG1,
    title: 'titulo',
    github: 'https://github.com/Djhonatas',
    demo: 'https://dribbble.com/OliveiraDjhonatas'
  },
  {
    id: 2,
    image: IMG2,
    title: 'titulo',
    github: 'https://github.com/Djhonatas',
    demo: 'https://dribbble.com/OliveiraDjhonatas'
  },
  {
    id: 3,
    image: IMG3,
    title: 'titulo',
    github: 'https://github.com/Djhonatas',
    demo: 'https://dribbble.com/OliveiraDjhonatas'
  },
  {
    id: 4,
    image: IMG4,
    title: 'titulo',
    github: 'https://github.com/Djhonatas',
    demo: 'https://dribbble.com/OliveiraDjhonatas'
  },
  {
    id: 5,
    image: IMG5,
    title: 'titulo',
    github: 'https://github.com/Djhonatas',
    demo: 'https://dribbble.com/OliveiraDjhonatas'
  },
  {
    id: 6,
    image: IMG6,
    title: 'titulo',
    github: 'https://github.com/Djhonatas',
    demo: 'https://dribbble.com/OliveiraDjhonatas'
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
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
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