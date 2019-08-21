import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Routes from './components/Routing/Routes';
import AppNavbar from './components/AppNavbar/AppNavbar';
import Footer from './components/Footer/Footer';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadDesserts } from './actions/dessertsActions';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadDesserts());
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className='App'>
            <AppNavbar />
            <Switch>
              <Route component={Routes} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
