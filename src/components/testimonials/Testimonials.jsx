import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.png'
import AVTR2 from '../../assets/avatar2.png'
import AVTR3 from '../../assets/avatar3.png'
import AVTR4 from '../../assets/avatar4.png'


// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'João Oliver',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, corporis? Porro ratione non nesciunt optio illum ducimus. Voluptates debitis at similique excepturi voluptate laborum, rem dicta qui cumque necessitatibus omnis!'
  },
  {  avatar: AVTR2,
    name: 'Mario Santos',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, corporis? Porro ratione non nesciunt optio illum ducimus. Voluptates debitis at similique excepturi voluptate laborum, rem dicta qui cumque necessitatibus omnis!'
  },
  {  avatar: AVTR3,
    name: 'Marcelo Silva',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, corporis? Porro ratione non nesciunt optio illum ducimus. Voluptates debitis at similique excepturi voluptate laborum, rem dicta qui cumque necessitatibus omnis!'
  },
  {  avatar: AVTR4,
    name: 'Clodoaldo De Assis',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, corporis? Porro ratione non nesciunt optio illum ducimus. Voluptates debitis at similique excepturi voluptate laborum, rem dicta qui cumque necessitatibus omnis!'
  }
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review de Clientes</h5>
      <h2>Depoimentos</h2>

      <Swiper className='container testimonials__container'
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index)=>{
            return(
              <SwiperSlide key={index} className='testimonial'>
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
