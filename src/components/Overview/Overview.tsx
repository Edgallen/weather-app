import React from 'react';
import styles from './Overview.module.scss';

const RainChance = () => {
  return (
    <>
      <div className={styles.hourly__card}>
        <p className={styles.hourly__time}>7 PM</p>
        <div className={styles.hourly__bar}>
          <div 
            className={styles.hourly__progress}
            style={{
              width: '180px'
            }}
          ></div>
        </div>
        <p className={styles.hourly__chance}>44%</p>
      </div>

      <div className={styles.hourly__card}>
        <p className={styles.hourly__time}>7 PM</p>
        <div className={styles.hourly__bar}>
          <div 
            className={styles.hourly__progress}
            style={{
              width: '40px'
            }}
          ></div>
        </div>
        <p className={styles.hourly__chance}>44%</p>
      </div>

      <div className={styles.hourly__card}>
        <p className={styles.hourly__time}>7 PM</p>
        <div className={styles.hourly__bar}>
          <div 
            className={styles.hourly__progress}
            style={{
              width: '200px'
            }}
          ></div>
        </div>
        <p className={styles.hourly__chance}>44%</p>
      </div>

      <div className={styles.hourly__card}>
        <p className={styles.hourly__time}>7 PM</p>
        <div className={styles.hourly__bar}>
          <div 
            className={styles.hourly__progress}
            style={{
              width: '140px'
            }}
          ></div>
        </div>
        <p className={styles.hourly__chance}>44%</p>
      </div>
    </>
  )
}

const SunStatus = () => {
  return (
    <>
      <div className={styles.sun__card}>

        <div className={styles.sun__bio}>
          <i className={`ri-sun-fill ${styles.sunrise__icon}`}></i>

          <div className={styles.sun__description}>
            <p className={styles.sun__text}>Sunrise</p>
            <h2 className={styles.sun__time}>4:20 AM</h2>
          </div>
        </div>

        <p className={styles.sun__count}>4 hours ago</p>
      </div>
      
      <div className={styles.sun__card}>

        <div className={styles.sun__bio}>
          <i className={`ri-haze-line ${styles.sunrise__icon}`}></i>

          <div className={styles.sun__description}>
            <p className={styles.sun__text}>Sunset</p>
            <h2 className={styles.sun__time}>4:20 AM</h2>
          </div>
        </div>

        <p className={styles.sun__count}>4 hours ago</p>
      </div>
    </>
  )
}

const Overview = () => {
  return (
    <section className={styles.overview}>
      <div className={styles.location}>
        <div className={styles.location__container}>
          <h2 className={styles.location__title}>Mejasem Barat</h2>
          <p className={styles.location__subtitle}>Tegal, Indonesia</p>
        </div>

        <h3 className={styles.location__time}>08:54 AM</h3>
      </div>

      <div className={styles.weather}>
        <i className={`ri-sun-cloudy-fill ${styles.weather__icon}`}></i>

        <div className={styles.weather__container}>
          <h1 className={styles.weather__temp}>20° C</h1>
          <h2 className={styles.weather__status}>Dramatic Cloudy</h2>
        </div>
      </div>

      <div className={styles.hourly}>
        <h2 className={styles.overview__title}>Chance of rain</h2>

        <div className={styles.hourly__container}>
          <RainChance />
        </div>
      </div>

      <div className={styles.sun}>
        <h2 className={styles.overview__title}>Sunrise & Sunset</h2>

        <div className={styles.sun__container}>
          <SunStatus />
        </div>
      </div>
    </section>
  )
}

export default Overview