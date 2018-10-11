import React, { Component } from 'react';
import styles from './App.module.scss';

class App extends Component {
  render() {
    return (
      <>
        <h1>Hello, World!</h1>
        <p className={styles.test}>Are SCSS and CSS modules working?</p>
      </>
    );
  }
}

export default App;
