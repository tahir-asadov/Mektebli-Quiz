import React from 'react';

import Answer from '../answer';

import styles from './question.module.scss';

export default function Question( { question, answers, index, shuffle_answers, updateUserAnswers } ) {

  const shuffle = ( a, b ) => {
    return Math.random() - 0.5;
  }

  if( shuffle_answers ) {
   
    answers.sort( shuffle );

  }

  return <div className={ styles.question }>
    <h3>{ index + 1 }) {

    <div dangerouslySetInnerHTML={ { __html: question.description } }></div>
    
    }</h3>
    
    <div className="answers">
    
      {
        answers.map( (answer, key) => <Answer key={ key } updateUserAnswers={ updateUserAnswers } answer={ answer } /> )
      }
    
    </div>

  </div>;

}