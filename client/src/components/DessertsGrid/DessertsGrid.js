import React from 'react';
import { trackWindowScroll } from 'react-lazy-load-image-component';
import Dessert from '../Dessert/Dessert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './desserts-grid.scss';

function DessertsGrid({ scrollPosition, dessert }) {
  const { desserts } = dessert;
  return (
    <div className='desserts-grid row'>
      {desserts.map(dessert => (
        <Dessert
          key={dessert.id}
          scrollPosition={scrollPosition}
          dessert={dessert}
        />
      ))}
    </div>
  );
}

DessertsGrid.propTypes = {
  dessert: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  dessert: state.dessert
});

export default connect(
  mapStateToProps,
  {}
)(trackWindowScroll(DessertsGrid));
