import React from 'react';
import '../styles/Slider.scss';
import img1 from '../assets/img/pexels-moose-photos-1037992small.jpg';
const Slider = () => {
  return (
    <div>

      <section className='contenedorImagenes'>
          <img className='imagenSlider' src= {img1} />
      </section>


    </div>
  )
}

export default Slider