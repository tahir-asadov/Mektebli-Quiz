import React               from 'react';
import { Link }            from "react-router-dom";

import {
  RiLogoutCircleRLine,
  RiUser3Line,
  RiNumbersFill,
  RiSurveyLine
} from "react-icons/ri";

import logo          from '../../logo.png';
import mobile_logo   from '../../mobile_logo.png';
import styles        from './header.module.scss';

export default function Header( { setToken, setUser } ) {

  const logOut = () => {

    setToken( null );
    setUser( null );
  }

  return <div className={ styles.header }>

    <div className={ styles.logo }>

      <Link to="/">

        <img src={ logo } className={ styles.desktop } alt="Mektebli logo" />
        <img src={ mobile_logo } className={ styles.mobile } alt="Mektebli logo" />

      </Link>

    </div>

    <div className={ styles.menu }>
      <Link title="Профиль" to="/profile"><RiUser3Line /></Link>
      <Link title="Тесты" to="/"><RiSurveyLine /></Link>
      <Link title="Результаты" to="/results"><RiNumbersFill /></Link>
      <span title="Выйти" onClick={ logOut } className={ styles.logout }><RiLogoutCircleRLine /></span>
    </div>

    {/* <div className={ styles["user-info"] }>
      
      Добро пожаловать, <b>&nbsp;<Link to="/results">{ user ? user.displayName : '' }</Link> </b>
      <span title="Выйти" onClick={ logOut } className={ styles.logout }><AiOutlineLogout /></span>
    </div> */}

  </div>;

}
