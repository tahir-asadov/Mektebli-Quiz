import React from 'react';

import styles from './answer.module.scss';

export default function Answer( { answer, updateUserAnswers } ) {

  return <div className={styles.answer}>

    <label htmlFor={`answer-${answer.id}`}>
      <input onClick={() => { updateUserAnswers( answer.question_id, answer.id ) }} id={`answer-${answer.id}`} type="radio" name={`question-${answer.question_id}`} />
      <div dangerouslySetInnerHTML={{__html: answer.title}}></div>
    </label>
    
  </div>;
}
