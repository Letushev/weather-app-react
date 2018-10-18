import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Weather from './containers/Weather';
import Favorites from './containers/Favorites';
import Header from './components/Header';
import styles from './App.module.scss';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main className={styles.main}>
          <Switch>
            <Route exact path='/' component={Weather} />
            <Route exact path='/favorites' component={Favorites} />
            <Redirect to='/' />
          </Switch>
        </main>
      </>
    );
  }
}

export default App;
