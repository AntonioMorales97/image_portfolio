import React from 'react';
import { Container } from 'reactstrap';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

import './dessert-presentation.scss';

function DessertPresentation({ scrollPosition, dessert }) {
  return (
    <Container className='dessert-container col-12 col-lg-5'>
      <LazyLoadComponent scrollPosition={scrollPosition}>
        <div className='dessert-presentation'>
          <div className='dessert-presentation-image'>
            <img src={dessert.img_small_src} alt={dessert.text} />
          </div>
          <div className='dessert-info'>
            <h1>{dessert.name}</h1>
            <p>
              <strong>Price:</strong> {dessert.price}
            </p>
            <p>
              <strong>Quantity:</strong> {dessert.quantity}
            </p>
          </div>
        </div>
      </LazyLoadComponent>
    </Container>
  );
}

export default DessertPresentation;
