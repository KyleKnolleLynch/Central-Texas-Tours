import React, { useState } from 'react';
import Tour from '../Tour/Tour';
import { TourData } from '../../data/TourData';

const TourList = () => {
  const [tours, setTours] = useState(TourData);

  const hideTour = id => {
    const filteredTours = tours.filter(tour => tour.id !== id);
    setTours(filteredTours);
  };

  return (
    <div className='tour-list'>
      {tours.map(tour => (
        <Tour key={tour.id} tour={tour} hideTour={hideTour} />
      ))}
    </div>
  );
};

export default TourList;
