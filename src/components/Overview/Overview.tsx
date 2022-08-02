import React from 'react';
import './Overview.scss';

const Overview = () => {
  return (
    <section className='overview'>
      <div className='location'>
        <div className='location__container'>
          <h2 className='location__title'>Mejasem Barat</h2>
          <p className='location__subtitle'>Tegal, Indonesia</p>
        </div>

        <h3 className='location__time'>08:54 AM</h3>
      </div>

      <div className='weather'>
        <i className="ri-sun-cloudy-fill weather__icon"></i>

        <div className='weather__container'>
          <h1 className='weather__temp'>20° C</h1>
          <h2 className='weather__status'>Dramatic Cloudy</h2>
        </div>
      </div>

      <div className='hourly'>
        <h2 className='overview__title'>Chance of rain</h2>

        <div className='hourly__container'>
          
          <div className='hourly__card'>
            <p className='hourly__time'>7 PM</p>
            <div className='hourly__bar'>
              <div className='hourly__progress'></div>
            </div>
            <p className='hourly__chance'>44%</p>
          </div>

          <div className='hourly__card'>
            <p className='hourly__time'>7 PM</p>
            <div className='hourly__bar'>
              <div className='hourly__progress'></div>
            </div>
            <p className='hourly__chance'>44%</p>
          </div>

          <div className='hourly__card'>
            <p className='hourly__time'>7 PM</p>
            <div className='hourly__bar'>
              <div className='hourly__progress'></div>
            </div>
            <p className='hourly__chance'>44%</p>
          </div>

          <div className='hourly__card'>
            <p className='hourly__time'>7 PM</p>
            <div className='hourly__bar'>
              <div className='hourly__progress'></div>
            </div>
            <p className='hourly__chance'>44%</p>
          </div>
        </div>
      </div>

      <div className='sun'>
        <h2 className='overview__title'>Sunrise & Sunset</h2>

        <div className='sun__container'>
          <div className='sun__card'>

            <div className='sun__bio'>
              <i className="ri-sun-fill sunrise__icon"></i>

              <div className='sun__description'>
                <p className='sun__text'>Sunrise</p>
                <h2 className='sun__title'>4:20 AM</h2>
              </div>
            </div>

            <p className='sun__count'>4 hours ago</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Overview