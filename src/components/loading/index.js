import React from 'react';

import styles from './loading.module.scss';

export default function Loading( { message } ) {

  return <div className={ styles.loading }>

    { message ? message : "Загружается..." }

  </div>;

}
