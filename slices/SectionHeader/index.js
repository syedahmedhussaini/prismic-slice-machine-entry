import React from 'react';
import { array, shape } from 'prop-types';
import { RichText } from 'prismic-reactjs';

const section = {
  maxWidth: '600px',
  margin: '4em auto',
  textAlign: 'center',
};

const h2 = {
  color: '#8592e0',
};

const MySlice = ({ slice }) => (
  <section style={section}>
    <header className="w-full py-9 text-center">
      {
        slice.primary.eyebrow ?
        <h6 className={`block my-3 mx-auto uppercase text-base tracking-widest font-display font-bold text-${slice.primary.color}-900`}>{RichText.asText(slice.primary.eyebrow)}</h6>
        : null
      }
      <h2 className={`block lg:mx-auto uppercase text-4xl lg:text-5xl tracking-tight font-display font-bold text-${slice.primary.color}-600`}>{RichText.asText(slice.primary.title)}</h2>

      <hr className={`w-4/5 block h-2 bg-${slice.primary.color}-500 mx-auto my-3`} />
    </header>
  </section>
);

MySlice.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MySlice;
