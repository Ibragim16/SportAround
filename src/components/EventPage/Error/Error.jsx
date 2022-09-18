import React from 'react';
import styles from "./error.module.css"

const Error = ({error}) => {
    return (
        <div>
             <div className={styles.errorMain}>
        <div className={styles.errorBox}>
          <h5 className={styles.errorText}>{error}</h5>
        </div>
      </div>
        </div>
    );
};

export default React.memo(Error);