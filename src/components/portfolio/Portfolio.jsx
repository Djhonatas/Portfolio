import React, { useState } from 'react';
import './portfolio.css';
import IMG1 from '../../assets/mario.jpg';
import IMG2 from '../../assets/game.png';
import IMG3 from '../../assets/dash.png';
import IMG4 from '../../assets/coffee.png';
import IMG5 from '../../assets/controle-financeiro.png';
import IMG6 from '../../assets/login.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Jogo Super Mário',
    github: 'https://github.com/Djhonatas/super-mario.git',
    demo: 'https://super-mario-five.vercel.app/',
    languages: ['JavaScript', 'HTML', 'CSS']
  },
  {
    id: 2,
    image: IMG2,
    title: 'Blog Game News',
    github: 'https://github.com/Djhonatas/Blog.git',
    demo: 'https://morning-ravine-54740.herokuapp.com/',
    languages: ['JavaScript', 'HTML', 'CSS', 'NodeJS', 'ejs', 'Docker', 'MySQL', 'MongoDB']
  },
  {
    id: 3,
    image: IMG3,
    title: 'Dashboard',
    github: 'https://github.com/Djhonatas/DashBorad-responsive',
    demo: 'https://dash-borad-responsive.vercel.app/',
    languages: ['JavaScript', 'HTML', 'CSS']
  },
  {
    id: 4,
    image: IMG4,
    title: 'Coffee Shop',
    github: 'https://github.com/Djhonatas/coffee-shop',
    demo: 'https://coffee-shop-six-psi.vercel.app/',
    languages: ['JavaScript', 'HTML', 'CSS']
  },
  {
    id: 5,
    image: IMG5,
    title: 'Controle Financeiro',
    github: 'https://github.com/Djhonatas/controle-financeiro',
    demo: 'https://controle-financeiro-two-alpha.vercel.app/',
    languages: ['JavaScript', 'HTML', 'CSS']
  },
  {
    id: 6,
    image: IMG6,
    title: 'Tela de Login',
    github: 'https://github.com/Djhonatas/Login-Page',
    demo: 'https://login-page-three-topaz.vercel.app/',
    languages: ['JavaScript', 'HTML', 'CSS']
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (id) => {
    setSelectedProject(id);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const handleBackdropClick = () => {
    closeModal();
  };

  const handleButtonClick = (id) => {
    openModal(id);
  };

  return (
    <section id='portfolio'>
      <h2 style={{ color: 'white' }}>Portfolio</h2>
      <div className='container portfolio__container'>
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a href={github} className='btn' target='_blank' rel='noreferrer'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Demo</a>
                <button className='btn btn-info' onClick={() => handleButtonClick(id)}>Descrição</button>
              </div>
            </article>
          );
        })}
      </div>
      {selectedProject !== null && (
        <>
          <div className='modal-backdrop' onClick={handleBackdropClick}>
            <div className='modal'>
              <div className='modal-content'>
                <span className='close' onClick={closeModal}>&times;</span>
                <h2>O que foi usado?</h2>
                <ul>
                  {data.find(project => project.id === selectedProject)?.languages.map((language, index) => (
                    <li key={index}>{language}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Portfolio;
