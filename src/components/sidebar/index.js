import React from 'react';

import Quizzes from '../quizzes';

import styles from './sidebar.module.scss';

export default function Sidebar( { token } ) {

  return <div className={styles.sidebar}>

    <Quizzes token={ token } />

  </div>;
  
}