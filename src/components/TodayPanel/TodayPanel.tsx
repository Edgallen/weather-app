import React from 'react';
import styles from './TodayPanel.module.scss';

const TodayPanel = () => {
  return (
    <section className={styles.todayPanel}>
      <h2 className={styles.todayPanel__title}>Today overview</h2>

      <div className={styles.cards__container}>
        {/* Карточка */}
        <div className={styles.card}>
          <div className={styles.status__container}>
            <i className={`ri-windy-line ${styles.status__icon}`}></i>

            <div className={styles.status__description}>
              <h3 className={styles.status__title}>Wind Speed</h3>
              <h1 className={styles.status__info}>12km/h</h1>
            </div>
          </div>

          <div className={styles.changes__container}>
            <i className={`ri-arrow-up-s-fill ${styles.changes__icon} ${styles.icon__increase}`}></i>
            <p className={styles.changes__text}>2km/h</p>
          </div>
        </div>
        {/* Карточка */}
        <div className={styles.card}>
          <div className={styles.status__container}>
            <i className={`ri-windy-line ${styles.status__icon}`}></i>

            <div className={styles.status__description}>
              <h3 className={styles.status__title}>Wind Speed</h3>
              <h1 className={styles.status__info}>12km/h</h1>
            </div>
          </div>

          <div className={styles.changes__container}>
            <i className={`ri-arrow-up-s-fill ${styles.changes__icon} ${styles.icon__decrease}`}></i>
            <p className={styles.changes__text}>2km/h</p>
          </div>
        </div>
        {/* Карточка */}
        <div className={styles.card}>
          <div className={styles.status__container}>
            <i className={`ri-windy-line ${styles.status__icon}`}></i>

            <div className={styles.status__description}>
              <h3 className={styles.status__title}>Wind Speed</h3>
              <h1 className={styles.status__info}>12km/h</h1>
            </div>
          </div>

          <div className={styles.changes__container}>
            <i className={`ri-arrow-up-s-fill ${styles.changes__icon} ${styles.icon__decrease}`}></i>
            <p className={styles.changes__text}>2km/h</p>
          </div>
        </div>
          {/* Карточка */}
          <div className={styles.card}>
            <div className={styles.status__container}>
              <i className={`ri-windy-line ${styles.status__icon}`}></i>

              <div className={styles.status__description}>
                <h3 className={styles.status__title}>Wind Speed</h3>
                <h1 className={styles.status__info}>12km/h</h1>
              </div>
            </div>

            <div className={styles.changes__container}>
              <i className={`ri-arrow-up-s-fill ${styles.changes__icon} ${styles.icon__increase}`}></i>
              <p className={styles.changes__text}>2km/h</p>
            </div>
          </div>

      </div>
    </section>
  )
}

export default TodayPanel