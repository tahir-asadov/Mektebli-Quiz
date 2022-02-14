import React from 'react'

import styles from './profile.module.scss';

export default function Profile( { user } ) {

  console.log(user);

  return (
  
    <div className={ styles.profile }>
      { user && <div>
        <div><b>Имя: </b>&nbsp;{ user.firstName } </div>
        <div><b>Фамилия: </b>&nbsp;{ user.lastName } </div>
        <div><b>Публичное имя: </b>&nbsp;{ user.displayName } </div>
        <div><b>Электронная почта: </b>&nbsp;{ user.email } </div>
      </div> }
    </div>
  
  )
  
}
