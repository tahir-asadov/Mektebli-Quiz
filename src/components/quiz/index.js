import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import Question from '../question';
import Loading  from '../loading';
import Error    from '../error';
import Timer    from '../timer';

import styles from './quiz.module.scss';

export default function Quiz( { quiz, token } ) {
  
  const getMs = () => {

    const d = new Date();

    return Math.floor( d.getTime() / 1000 );
    
  }

  const updateUserAnswers = ( question_id, answer_id ) => {
    
    let currentAnswer = { [ question_id ]: answer_id }

    userAnswers = { ...userAnswers, ...currentAnswer }

  }
  
  const validateQuiz = () => {

    setLoading( true );

    let endedAt = getMs();

    fetch( `${process.env.REACT_APP_API_URL}/wp-json/symplequiz/v1/quiz/${quiz.quiz.id}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify( {
        quiz_id: quiz.quiz.id,
        answers: userAnswers,
        seconds: ( endedAt - startedAt )
      } )
    } )

    .then( resp => resp.json() )

    .then( resp => {

      if( resp.data?.status && resp.data.status != 200 ) {

        setError( resp.message );
        setLoading( false );

      }else {

        if( resp.status == 'ok' ) {

          navigate( `/result/${resp.result_id}` );

        }else {

          setError( resp.message );
          setLoading( false );

        }

      }
      
    } )

    .catch( ( error ) => {

      setError( error );
      console.log( 'error', error );

    });

  }

  let userAnswers = {}
  let startedAt = getMs();

  const [ loading, setLoading ] = useState( false );
  const [ error,   setError ]   = useState( false );

  const navigate = useNavigate();
  
  const questions = Object.keys( quiz.questions );

  const shuffle_questions = parseInt( quiz.quiz.shuffle_questions ) > 0 ? true : false;
  const shuffle_answers   = parseInt( quiz.quiz.shuffle_answers ) > 0 ? true : false;

  const shuffle = ( a, b ) => {

    return Math.random() - 0.5;

  }

  if( shuffle_questions ) {

    questions.sort( shuffle );

  }

  return <div className={ styles.quiz }>
    
    <h1>{ quiz.quiz.title }</h1>
    
    { loading && <Loading /> }
    
    { error && <Error error={ error } /> }

    { ( ! loading && ! error ) && <Timer /> }
    
    <div className={ `questions ${ ( loading || error ) ? 'hidden' : ''}` }>

      <p dangerouslySetInnerHTML={ { __html: quiz.quiz.description } }></p>
      
      { questions.map( ( question, key ) => {
        
        return <Question updateUserAnswers={ updateUserAnswers } question={ quiz.questions[ question ] } shuffle_answers={ shuffle_answers } index={ key } answers={ quiz.questions[ question ].answers ? quiz.questions[ question ].answers : [] } key={ key }/>

      } ) }
      
      <div className="flex-center">
      
        <div onClick={ validateQuiz } className={ `button ${styles.button}` }>Проверить</div>
      
      </div>

    </div>

  </div>;
  
}