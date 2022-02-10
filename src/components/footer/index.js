import React from 'react';

import styles from './footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p>Copyright © {(new Date().getFullYear())}. Designed by <a target="_blank" href="https://tahirasadov.com">Tahir Asadov</a>. All Rights Reserved.</p>
    </div>
  );
}
