import React from 'react';
import { array, shape } from 'prop-types';
import { RichText } from 'prismic-reactjs';


const MySlice = ({ slice }) => {
  const renderMenuItem = (item, index) => {
    const title = item?.itemName
    const image = item?.itemImage
    const price = item?.itemPrice
    const description = item?.itemDescription
    return (
      <div
        className="w-1/2 flex flex-col lg:flex-row lg:space-x-3 items-center border-b pb-6"
        key={index}>
        <img className="w-full lg:w-1/4" src={image.url} alt={title} />
        <div className="content w-4/5 lg:w-3/4 px-3 text-left my-3 lg:my-0">
          <header className="flex justify-between items-center mb-3">
            <h1 className="uppercase text-2xl font-display tracking-tighter font-extrabold text-gray-700">{ RichText.asText(title)}</h1>
            <small className="text-sm font-light mr-6 font-bold bg-gray-200 text-purple-600 w-10 h-10 rounded-full py-3 text-center">${price}</small>
          </header>
          <p className="text-gray-500 leading-normal">{ RichText.asText(description)} </p>
        </div>
      </div>
    )
  }
  return (
    <section className="bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">

        <header className="w-full py-9">
          <h2 className="block lg:w-2/5 uppercase text-4xl lg:text-6xl tracking-tight font-display font-bold text-purple-900">{RichText.asText(slice.primary.title)}</h2>
        </header>
        <div class="flex flex-row flex-wrap lg:space-y-6">
          { slice.items.map((item, index) => renderMenuItem(item, index)) }
        </div>
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
