import React, { Component } from 'react';

import './Tour.scss';

class Tour extends Component {
  render() {
    return (
      <div className='tour'>
        <div className='img-div'>
          <img src={this.props.img} alt='tour' />
          <span>
            <i className='fas fa-window-close fa-2x'></i>
          </span>
        </div>
        <div className='tour-info p-1 bg-light'>
          <h2 className='list-li text-primary'>{this.props.city}</h2>
          <h3 className='list-li'>{this.props.tour}</h3>
          <h5 className='list-li'>
          More Info{' '}
            <span>
              <i className='fas fa-caret-square-down m'></i>
            </span>
          </h5>
          <p>
            {this.props.info}
          </p>
        </div>
      </div>
    );
  }
}

export default Tour;
