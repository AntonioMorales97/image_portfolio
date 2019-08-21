import React from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import './dessert.scss';

function Dessert({ dessert, scrollPosition }) {
  return (
    <div className='dessert col-12 col-xl-6'>
      <LazyLoadComponent scrollPosition={scrollPosition}>
        <h1>{dessert.name}</h1>
        <img
          alt={dessert.dessertText}
          className='dessert-image'
          srcSet={`${dessert.img_src} 768w, ${dessert.img_small_src} 400w`}
          src={dessert.img_src}
        />
      </LazyLoadComponent>
    </div>
  );
}

export default Dessert;
