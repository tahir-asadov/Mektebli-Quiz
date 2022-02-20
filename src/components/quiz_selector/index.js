import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation }  from "react-router-dom";

import styles from './quiz_selector.module.scss';

export default function QuizSelector( { token } ) {
  
  const [ quizzes, setQuizzes ] = useState( null );
  
  let navigate = useNavigate();

  const { pathname } = useLocation()

  const quiz_id = pathname.replace( '/quiz/', '' );

  const changeQuiz = ( e ) => {
  
    if( e.target.value > 0 ) {
      
      navigate( `/quiz/${e.target.value}` );
      
    }else {
  
      navigate( `/` );
  
    }
  
  }

  useEffect(() => {

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
      
          console.error( 'error', resp );
      
        }else {
      
          setQuizzes( resp );
      
        }
      
      } )
      
      .catch( ( error ) => {
      
        console.error( 'error', error );
      
      });
      
    }

  }, []);

  return (

    <div>

      <select className={ styles.selector } onChange={ changeQuiz }>

        <option value="0">Выберите тест</option>

        { quizzes && quizzes.map( ( quiz, index ) => (

          <option value={ quiz.id } selected={ quiz_id == quiz.id ? 'selected' : '' } key={ index }>{ quiz.title }</option>

        ) ) }

      </select>

    </div>

  )

}