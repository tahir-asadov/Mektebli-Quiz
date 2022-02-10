import React from 'react';

import styles from './error.module.scss';

export default function Error( { error } ) {
  return <div className={ styles.Error }>
    { error }
  </div>;
}
