import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";

import Loading from '../loading';
import Error   from '../error';

import styles from './quizzes.module.scss';

export default function Quizzes( { token } ) {

  const [ quizzes, setQuizzes ] = useState( null );
  const [ error,   setError ]   = useState( null );
  const [ loading, setLoading ] = useState( null );

  const { pathname } = useLocation()

  const quiz_id = pathname.replace( '/quiz/', '' );
  
  useEffect( () => {

    if( token !== null ) {

      fetch( `${process.env.REACT_APP_API_URL}/wp-json/symplequiz/v1/quizzes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      } )

      .then( resp => resp.json() )

      .then( resp => {

        if( resp.statusCode && resp.statusCode != 200 ) {

          setError( resp.message );

          setLoading( false );

        }else {

          setQuizzes( resp );

          setError( null );

        }

      } )

      .catch( ( error ) => {

        setError( error );

        setLoading( false );

        console.log( 'error', error );

      });
    }


  }, [] );
  
  return <div className={ styles.quizzes }>

    <h2>Тесты ({ quizzes ? quizzes.length : '' })</h2>

    { error && <Error error={ error } />}

    { loading && <Loading /> }

    { quizzes ? 

      <div className={`quiz-list custom-scroll ${ styles.list }`}>

      { quizzes.map( ( quiz, index ) => (

          <Link to={ `/quiz/${quiz.id}` } className={ quiz_id == quiz.id ? styles.active : '' } key={ index }>{ quiz.title }</Link>

        ) )
      }

      </div>

     : "Тест не найден" }

  </div>;
}