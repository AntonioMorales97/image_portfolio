import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../Home/Home';
import Pricing from '../Pricing/Pricing';
import Contact from '../Contact/Contact';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/pricing' component={Pricing} />
      <Route exact path='/contact' component={Contact} />
      <Route render={() => <Redirect to='/' />} />
    </Switch>
  );
};

export default Routes;
