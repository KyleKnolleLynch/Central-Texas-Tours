import React, { useState } from 'react';
import Tour from '../Tour/Tour';
import { TourData } from '../../TourData';

import './TourList.scss';

const TourList = () => {
  const [tours, setTours] = useState(TourData);

  const hideTour = id => {
    const filteredTours = tours.filter(tour => tour.id !== id);
    setTours(filteredTours);
  };

  return (
    <div className='container'>
      <div className='tour-list grid-4'>
        {tours.map(tour => (
          <Tour key={tour.id} tour={tour} hideTour={hideTour} />
        ))}
      </div>
    </div>
  );
};

export default TourList;
