import React from 'react';
import { array, shape } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import Carousel from 'nuka-carousel';

const MySlice = ({ slice }) => {

  const renderTestimonial = (item, index) => {
    const source = item?.source
    const image = item?.photo
    const quote = item?.quote
    return (
      <div
        className="bg-blue-100 border-2 border-blue-800 p-6"
        key={index}>
        <div className="flex space-x-6 items-center">
          <img className="w-1/3 rounded object-cover" src={image.url} />
          <h2 className="block w-1/2 text-left text-4xl lg:text-5xl tracking-tight font-display font-bold text-blue-600">{RichText.asText(quote)}</h2>

        </div>
      </div>
    )
  }

  return(
    <section className="bg-gray-100 p-6">
    <div className="max-w-7xl mx-auto">
        <header className="w-full py-9 text-center">

          <h6 className="block my-6 mx-auto uppercase text-base tracking-widest font-display font-bold text-blue-900">{RichText.asText(slice.primary.title)}</h6>

        </header>

        <Carousel
          wrapAround
          getControlsContainerStyles={(key) => {
             switch (key) {
                case 'BottomCenter':
                  return {
                    bottom: "-32px"

                  };
                  default:
                    return {};
              }
          }}
          renderBottomCenterControls={null}
          renderCenterLeftControls={({ previousSlide }) =>
            <button aria-label="Previous slide" onClick={previousSlide} className="bg-blue-900 text-white uppercase text-sm font-bold hover:bg-blue-800 p-3">Previous</button>
          }
          renderCenterRightControls={({ nextSlide }) =>
            <button aria-label="Next slide" onClick={nextSlide} className="bg-blue-900 text-white uppercase text-sm font-bold hover:bg-blue-800 p-3">Next</button>
          }
        >
          { slice.items.map((item, index) => renderTestimonial(item, index)) }
        </Carousel>
      </div>
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
