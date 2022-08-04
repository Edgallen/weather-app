import React from 'react';
import styles from './AppHeader.module.scss';

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.date}>
        <h1 className={styles.title}>January 2022</h1>
        <p className={styles.subtitle}>Thursday, Jan 4, 2022</p>
      </div>

      <form className={styles.searchForm}>
        <i className={`ri-search-line ${styles.searchForm__icon}`}></i>
        <input
          className={styles.input}
          type="text" 
          placeholder='Seacrh location here'
        />
      </form>
    </header>
    

  )
}

export default AppHeader