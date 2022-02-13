import React from 'react';

import styles from './footer.module.scss';

export default function Footer() {
  
  return (

    <div className={ styles.footer }>

      <p>Copyright © { ( new Date().getFullYear() ) }. Создано <a target="_blank" href="https://tahir-asadov.github.io">Таиром Асадовым</a>. Все права защищены.</p>

    </div>

  );

}
