import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Tour = ({ tour: { id, img, city, tour, info }, hideTour }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleInfo = () => {
    setShowMore(!showMore);
  };

  return (
    <div className='tour box-shadow'>
      <div className='img-div'>
        <img src={img} alt='tour' />
        <span
          onClick={() => {
            hideTour(id);
          }}
        >
          <i className='fas fa-window-close fa-2x'></i>
        </span>
      </div>
      <div className='tour-info p-1 bg-light'>
        <h2 className='list-li text-primary'>{city}</h2>
        <h3 className='list-li'>{tour}</h3>
        <h5 className='list-li'>
          More Info{' '}
          <span onClick={toggleInfo}>
            <i className='fas fa-caret-square-down m'></i>
          </span>
        </h5>
        {showMore && <p>{info}</p>}
      </div>
    </div>
  );
};

Tour.propTypes = {
  hideTour: PropTypes.func.isRequired,
  tour: PropTypes.object.isRequired
};

export default Tour;
