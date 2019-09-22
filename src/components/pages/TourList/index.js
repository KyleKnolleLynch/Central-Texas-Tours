import React, { Component } from 'react';
import Tour from '../Tour/Tour';
import { TourData } from '../../TourData';

import './TourList.scss';

class TourList extends Component {
  state = {
    tours: TourData
  };

  render() {
    console.log(this.state.tours);
    return (
      <div className='tour-list grid-4'>
        {this.state.tours.map(tour => (
          <Tour key={tour.id} city={tour.city} img={tour.img} tour={tour.tour} info={tour.info} />
        ))}
        
      </div>
    );
  }
}

export default TourList;
