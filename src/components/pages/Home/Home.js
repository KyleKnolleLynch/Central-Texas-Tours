import React, { Fragment } from 'react';
import TopTours from '../../layout/TopTours/TopTours';

const Home = () => {
  return (
    <Fragment>
      <div className='hero'>
        <h1 className='container text-primary'>
          Central Texas <span className='text-dark'>Tours</span>
        </h1>
      </div>

      <div className='banner bg-primary'>
        <div className='list text-center'>
          <i className='fas fa-map-marked-alt'></i>
          <h4>Location Variety</h4>
          <h6 className='list-li'>Customized Tour Packages</h6>
        </div>
        <div className='list text-center'>
          <i className='fas fa-mobile-alt'></i>
          <h4>24 Hour Support</h4>
          <h6 className='list-li'>Local Agents On Call</h6>
        </div>
        <div className='list text-center'>
          <i className='fas fa-hand-holding-usd'></i>
          <h4>Affordable Rates</h4>
          <h6 className='list-li'>Industry Leading Pricing</h6>
        </div>
      </div>

      <TopTours />

      <div className='banner-secondary text-white'>
        <i className='far fa-clock fa-2x'></i>
        <h2>Cost Free Cancellation</h2>
        <p>Cancel within 24 hours and pay nothing.</p>
      </div>

      <div className='hero-secondary text-white'>
        <div>
          <i className='far fa-star'></i> <i className='far fa-star'></i>{' '}
          <i className='far fa-star'></i> <i className='far fa-star'></i>{' '}
          <i className='far fa-star'></i>
          <h3>Rated Five Stars</h3>
          <h6>by customer census</h6>
        </div>
      </div>

      <div className='footer grid-3'>
        <div className='foot-icons fa-2x'>
          <a href='#!'>
            <i className='fab fa-pinterest-square box-shadow'></i>
          </a>
          <a href='#!'>
            <i className='fab fa-twitter-square box-shadow'></i>
          </a>
          <a href='#!'>
            <i className='fab fa-facebook-square box-shadow'></i>
          </a>
          <a href='#!'>
            <i className='fab fa-instagram box-shadow'></i>
          </a>
          <a href='#!'>
            <i className='fab fa-youtube-square box-shadow'></i>
          </a>
        </div>

        <div className='foot-info grid-2'>
          <div>
            <h5 className='my-2'>
              <a href='#!'>Help Center</a>
            </h5>
            <h5 className='my-2'>
              <a href='#!'>Group Services</a>
            </h5>
            <h5 className='my-2'>
              <a href='#!'>Privacy Policy</a>
            </h5>
            <h5 className='my-2'>
              <a href='#!'>About Us</a>
            </h5>
          </div>
          <div>
            <h5 className='my-2'>
              <a href='#!'>Site Map</a>
            </h5>
            <h5 className='my-2'>
              <a href='#!'>Tour Agents</a>
            </h5>
            <h5 className='my-2'>
              <a href='#!'>Account Status</a>
            </h5>
            <h5 className='my-2'>
              <a href='#!'>Distibution Programs</a>
            </h5>
          </div>
        </div>
        <div>
          <h2 className='text-primary'>
            Central Texas <span className='text-white'>Tours</span>
          </h2>
          <p>&copy; Kyle Lynch 2020</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
