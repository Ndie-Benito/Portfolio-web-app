import React from 'react'
import './testimonials.css'
import Avt1 from '../../assets/avatar1.jpg'
import Avt2 from '../../assets/avatar2.jpg'
import Avt3 from '../../assets/avatar3.jpg'
import Avt4 from '../../assets/avatar4.jpg'
import {  Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: Avt1,
    name: 'Tina now',
    review:  'Thank you for this super inventive design....Our company thanks you very much for your professionalism.'
  }, 
  {
    avatar: Avt2,
    name: 'Will Smith',
    review: 'Thank you for this super inventive design....Our company thanks you very much for your professionalism'
  },
  {
    avatar: Avt3,
    name: 'Thank you for this super inventive design....Our company thanks you very much for your professionalism'
  },
  {
    avatar: Avt4,
    name: 'Thank you for this super inventive design....Our company thanks you very much for your professionalism'
  },
]

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
               
      <Swiper className="container testimonials_container"
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
       
        pagination={{ clickable: true }}
        
      >

        {
          data.map(({ avatar, name, review, index }) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client_avatar">
                  <img src={avatar} />
                </div>
                <h5 className="client_name">{name}</h5>
                <small className="client_review">
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      

        
        

       </Swiper>

    </section>
    
  )
}

export default testimonials

