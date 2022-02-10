import React from 'react';
import Quizzes from '../quizzes';

import styles from './sidebar.module.scss';

export default function Sidebar() {

  return <div className={styles.sidebar}>

    <Quizzes />

  </div>;
}
