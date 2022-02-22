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

  return <div question-type={ question.type } media-type={ question.media_type } className={ styles.question }>
    <h3>{ index + 1 }) {

    <div class="question-description" dangerouslySetInnerHTML={ { __html: question.description } }></div>
    
    }</h3>
    
    <div className="answers">
    
      {
        question.type == 3 ? (
          <input type="text" onChange={ ( e ) => { updateUserAnswers( question.id, e.target.value, e ) } }/>
        ) : (
          answers.map( (answer, key) => <Answer type={ question.type } key={ key } updateUserAnswers={ updateUserAnswers } answer={ answer } /> )
        )

      }
    
    </div>

  </div>;

}