import React from 'react';

import styles from './home.module.scss';

import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleUp }   from "react-icons/fa";

export default function Home() {

return <div className={ styles.home }>

    <h1>

      <FaArrowCircleUp className={ styles.mobile } />

      <FaArrowCircleLeft className={ styles.desktop } />

      Выберите тест для запуска</h1>

  </div>;

}