import React from 'react';
import { array, shape } from 'prop-types';
import { RichText } from 'prismic-reactjs';


const MySlice = ({ slice }) => (
  <section className="relative bg-gray-900 overflow-hidden">

    <div className="max-w-7xl mx-auto">
        <div class="relative z-10 bg-gray-900 lg:max-w-2xl lg:w-full">

          <svg className="hidden xl:block absolute right-0 inset-y-0 h-full w-48 text-gray-900 transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <polygon points="50,0 100,0 50,100 0,100"></polygon>
          </svg>

          <main className="px-4 lg:px-8 py-12 lg:py-24 text-center lg:text-left">
            <h1 className="text-5xl tracking-tight font-display font-bold text-white md:text-6xl lg:text-8xl">{RichText.asText(slice.primary.title)}</h1>

            <p className="my-6 text-base text-gray-300 md:mt-5 md:text-2xl leading-loose">{RichText.asText(slice.primary.description)}</p>
            <h3>{slice.primary.layout}</h3>

            <div className="cta-links flex space-x-3 justify-center lg:justify-start">
              <a className="mt-4 w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-semibold rounded-md text-gray-900 bg-white shadow-sm hover:text-gray-600 focus:outline-none focus:text-gray-600 transition ease-in-out duration-150" href={slice.primary.ctaLink.url}>{slice.primary.ctaLabel}</a>

              <a className="mt-4 w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 border border-gray-100 hover:border-white text-base font-semibold rounded-md text-gray-100 hover:text-white focus:outline-none focus:text-gray-600 transition ease-in-out duration-150" href={slice.primary.secondaryCtaLink.url}>{slice.primary.secondaryCtaLabel}</a>
            </div>

          </main>
        </div>
    </div>


    <aside className="lg:absolute lg:top-0 lg:right-0 lg:w-1/2">
      <picture className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full">
        <source
          srcSet={slice.primary.image.mobile.url}
          alt={slice.primary.image.mobile.alt || ''}
          media="(max-width: 500px)"
        />
        <img className="w-full" src={slice.primary.image.url} alt={slice.primary.image.alt || ''} />
      </picture>
    </aside>

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
