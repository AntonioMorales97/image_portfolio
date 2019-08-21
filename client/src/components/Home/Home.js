import React, { Fragment } from 'react';
import { Container } from 'reactstrap';
import DessertsGrid from '../DessertsGrid/DessertsGrid';

import './home.scss';

function Home() {
  return (
    <Fragment>
      <header id='home'>
        <div className='darkoverlay'>
          <Container className='intro-text'>
            <h1>Desserts for ordering</h1>
            <h2>Scroll down to see desserts</h2>
          </Container>
        </div>
      </header>
      <DessertsGrid />
    </Fragment>
  );
}

export default Home;
