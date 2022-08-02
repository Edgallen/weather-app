import React from 'react';
import './AppHeader.scss';

const AppHeader = () => {
  return (
    <header className='header'>
      <div className='date'>
        <h1 className='title'>January 2022</h1>
        <p className='subtitle'>Thursday, Jan 4, 2022</p>
      </div>

      <form className='searchForm'>
        <i className="ri-search-line searchForm__icon"></i>
        <input
          className='input'
          type="text" 
          placeholder='Seacrh location here'
        />
      </form>
    </header>
    

  )
}

export default AppHeader