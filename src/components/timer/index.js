import React, { useEffect, useState } from 'react'

import styles from './timer.module.scss';

import { FaRegClock } from "react-icons/fa";

export default function Timer() {

  const [ seconds, setSeconds ] = useState( 0 );
  const [ minutes, setMinutes ] = useState( 0 );

  const padNumber = ( number ) => {

    if( number.toString().length < 2 ){

      return `0${ number.toString() }`;

    }

    return number;
    
  }

  useEffect( () => {

    const interval = setInterval( function() {

      setSeconds( seconds + 1 );

      if( seconds == 59 ){

        setSeconds( 0 );

        setMinutes( minutes + 1 );

      }
      if( minutes == 60 ){

        setMinutes( 0 );

      }
      

    }, 1000 );

    return () => { clearInterval( interval ) }

  });

  return (

    <div className={ styles.timer }>

      <div className={ styles[ "quiz-timer" ] }>

        <FaRegClock />

        <div className={ styles[ "quiz-timer-dash" ] }>

          <div className={ styles[ "quiz-timer-minutes" ] }>{ padNumber( minutes ) }</div>

          <span>:</span>

          <div className={ styles[ "quiz-timer-seconds" ] }>{ padNumber( seconds ) }</div>

        </div>

      </div>

    </div>

  )

}