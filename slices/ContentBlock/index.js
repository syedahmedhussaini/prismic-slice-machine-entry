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
  <section className="bg-gray-100 p-6">
    <div className="max-w-7xl mx-auto">

      <header className="w-full py-9 text-center">

        {
          slice.primary.eyebrow ?
          <h6 className="block lg:w-2/5 my-6 mx-auto uppercase text-base tracking-widest font-display font-bold text-blue-900">{RichText.asText(slice.primary.eyebrow)}</h6>
          : null
        }
        <h2 className="block lg:w-4/5 lg:mx-auto uppercase text-4xl lg:text-6xl tracking-tight font-display font-bold text-blue-600">{RichText.asText(slice.primary.title)}</h2>

        <hr className="w-4/5 block h-2 bg-blue-500 mx-auto my-3" />
      </header>

      {
        slice.primary.content ?
        <main class="mx-auto max-w-5xl text-2xl leading-normal text-gray-800 py-3">
          <RichText render={slice.primary.content}/>
        </main>
        : null
      }
    </div>

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
