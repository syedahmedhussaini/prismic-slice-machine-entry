import React from 'react';
import { array, shape } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import Carousel from 'nuka-carousel';

const section = {
  maxWidth: '600px',
  margin: '4em auto',
  textAlign: 'center',
};

const h2 = {
  color: '#8592e0',
};

const MySlice = ({ slice }) => {
  return(
    <section style={section}>
      {
        slice.primary.title ?
        <RichText render={slice.primary.title}/>
        : <h2 style={h2}>Template slice, update me!</h2>
      }
      {
        slice.primary.description ?
        <RichText render={slice.primary.description}/>
        : <p>start by editing this slice from inside the SliceMachine builder!</p>
      }

      <Carousel>
        <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide1" />
        <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide2" />
        <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide3" />
        <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide4" />
        <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide5" />
        <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide6" />
      </Carousel>
    </section>
  );

}

MySlice.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MySlice;
