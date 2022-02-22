import React from 'react';

import styles from './answer.module.scss';

export default function Answer( { type, answer, updateUserAnswers } ) {
  
  return <div className={ styles.answer }>

    <label htmlFor={`answer-${answer.id}`}>
      { type == 1 && (
        <>
          <input onClick={ ( e ) => { updateUserAnswers( answer.question_id, answer.id, e ) }} id={`answer-${answer.id}`} type="radio" name={`question-${answer.question_id}` } />
          <div dangerouslySetInnerHTML={ { __html: answer.title } }></div>
        </>
      ) }
      { type == 2 && (
        <>
          <input onClick={ ( e ) => { updateUserAnswers( answer.question_id, answer.id, e ) }} id={`answer-${answer.id}`} type="checkbox" name={`question-${answer.question_id}` } />
          <div dangerouslySetInnerHTML={ { __html: answer.title } }></div>
        </>
      ) }

      
    </label>
    
  </div>;
}