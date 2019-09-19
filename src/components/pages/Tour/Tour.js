import React, { Component } from 'react';

import './Tour.scss';

class Tour extends Component {
  render() {
    return (
      <div className='tour'>
        <div className='img-div'>
          <img src='./images/newYork.jpg' alt='tour' />
          <span>
            <i className='fas fa-window-close fa-2x'></i>
          </span>
        </div>
        <div className='tour-info p-1 bg-light'>
          <h2 className='list-li text-primary'>City Name</h2>
          <h3 className='list-li'>Tour Name Here</h3>
          <h5 className='list-li'>
            More Info{' '}
            <span>
              <i className='fas fa-caret-square-down m'></i>
            </span>
          </h5>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At saepe
            doloremque sapiente vel tempore est!
          </p>
        </div>
      </div>
    );
  }
}

export default Tour;
