import React from 'react';
import { TopTourData } from './TopToursData';

import './TopTours.scss';

const TopTours = () => {
  return (
    <div className='top-tours-wrapper'>
      <h2>
        <span className='text-primary'>Popular</span>
        <span className='light'> Tours</span>
      </h2>
      <div className='top-tours'>
        {TopTourData.map(tour => (
          <div key={tour.id}>
            <img src={tour.img} alt='topTour' />
            <h2>{tour.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopTours;
