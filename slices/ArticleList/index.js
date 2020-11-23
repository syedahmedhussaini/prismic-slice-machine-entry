import React from 'react';
import { array, shape } from 'prop-types';
import { RichText } from 'prismic-reactjs';


const MySlice = ({ slice }) => {
  const renderArticle = (item, index) => {
    const title = item?.articleTitle
    const image = item?.articleImage
    const description = item?.articleDescription
    const link = item?.articleLink
    return (
      <article
        className="py-3 flex flex-row space-x-3 lg:space-x-0 lg:flex-col"
        key={index}>
        <img className="w-64 lg:w-full lg:h-64 rounded" src={image.url} alt={title} />
        <div className="content text-left my-4">
          <h3 className="tracking-tight leading-tight font-display font-bold text-xl lg:text-2xl pb-3 text-pink-100">{ RichText.asText(title)}</h3>
          <p className="hidden lg:block text-base leading-normal text-pink-200">{ RichText.asText(description)} </p>
          <a className="mt-4 w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-semibold rounded-md text-pink-600 bg-white shadow-sm hover:bg-pink-100 hover:text-pink-900 focus:outline-none focus:text-gray-600 transition ease-in-out duration-150" href={link.url}>Read More</a>
        </div>


      </article>
    )
  }

  return(
    <section className="bg-pink-800 p-6">
      <div className="max-w-7xl mx-auto">

        <header className="w-full py-9">
          <h2 className="block lg:w-2/5 uppercase text-4xl lg:text-6xl tracking-tight font-display font-bold text-white">{RichText.asText(slice.primary.sectionTitle)}</h2>
        </header>

        <div class="flex flex-col md:flex-row flex-wrap lg:flex-nowrap lg:space-x-12">
          { slice.items.map((item, index) => renderArticle(item, index)) }
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
