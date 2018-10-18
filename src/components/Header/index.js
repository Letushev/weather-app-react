import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';
import logo from '../../images/drop.svg';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logoContainer}>
      <img className={styles.logoImg} src={logo} alt="logo sunset" />
      <h1 className={styles.logoName}>FWE</h1>
    </div>
    <nav className={styles.nav}>
      <NavLink 
        exact
        to='/'
        className={styles.navItem}
        activeClassName={styles.navItemActive}
      >
        Погода
      </NavLink>
      <NavLink 
        exact
        to='/favorites'
        className={styles.navItem}
        activeClassName={styles.navItemActive}
      >
        Улюблені
      </NavLink>
    </nav>
  </header>
);

export default Header;
