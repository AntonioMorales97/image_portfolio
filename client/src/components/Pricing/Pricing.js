import React from 'react';
import { trackWindowScroll } from 'react-lazy-load-image-component';
import DessertPresentation from '../DessertPresentation/DessertPresentation';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './pricing.scss';

function Pricing({ scrollPosition, dessert }) {
  const { desserts } = dessert;
  return (
    <div className='pricing-container'>
      <div className='pricing-outer row'>
        {desserts.map(dessert => (
          <DessertPresentation
            key={dessert.id}
            scrollPosition={scrollPosition}
            dessert={dessert}
          />
        ))}
      </div>
    </div>
  );
}

Pricing.propTypes = {
  dessert: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  dessert: state.dessert
});

export default connect(
  mapStateToProps,
  {}
)(trackWindowScroll(Pricing));
