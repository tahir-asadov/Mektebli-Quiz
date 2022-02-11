import React from 'react'

import styles from './app_crashed.module.scss';

export default function AppCrashed( { message } ) {

  return (

    <div className={ styles.crashed }>
      
      <h1>App Crashed</h1>

      <div>

        <code>{ message }</code>

      </div>

    </div>

  )

}