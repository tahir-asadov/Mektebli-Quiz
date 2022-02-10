import React from 'react';

import { Link } from "react-router-dom";

import { AiOutlineLogout } from "react-icons/ai";

import logo from '../../logo.png';
import styles from './header.module.scss';

export default function Header( { user, setToken, setUser } ) {

  const logOut = () => {
    setToken( null);
    setUser( null);
    sessionStorage.setItem('token', '');
  }

  return <div className={styles.header}>
    <div className={styles.logo}>
      <Link to="/">
        <img src={logo} alt="Mektebli logo" />
      </Link>
    </div>
    <div className={styles["user-info"]}>
      Welcome, <b>&nbsp;{user ? user.displayName : ''} </b>
      <span title="Log out" onClick={logOut} className={styles.logout}><AiOutlineLogout /></span>
    </div>
  </div>;
}
