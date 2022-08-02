import React from 'react';
import './Overview.scss';

const Overview = () => {
  return (
    <section className='overview'>
      <div className=''>
        <div>
          <h2>Mejasem Barat</h2>
          <p>Tegal, Indonesia</p>
        </div>

        <h3>08:54 AM</h3>
      </div>

      <div>
        <div>
          <i className="ri-sun-cloudy-fill"></i>
          <h1>20° C</h1>
        </div>
      </div>

      <div>
        <h2>Chance of rain</h2>

        <div>
          <p>7 PM</p>
          <div>
            <div></div>
          </div>
          <p>44%</p>
        </div>
      </div>

      <div>
        <h2>Sunrise & Sunset</h2>

        <div>
          <div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Overview