import React from 'react';
import { array, shape } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import '../../styles/accordion.css';




const MySlice = ({ slice }) => {
  const faqItem = (item, index) => {
    const question = item?.question
    const answer = item?.answer
    return (
      <AccordionItem key={index}>
        <AccordionItemHeading>
          <AccordionItemButton>
            { RichText.asText(question)}
          </AccordionItemButton>
        </AccordionItemHeading>

        <AccordionItemPanel>
          <RichText render={answer}/>
        </AccordionItemPanel>
      </AccordionItem>
    )
  }

  return(
    <section className="bg-gray-200 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex py-12">

          <header className="block lg:w-2/5">
            <h2 className="uppercase text-4xl lg:text-6xl tracking-tight font-display font-bold text-pink-800">{RichText.asText(slice.primary.title)}</h2>

            {
              slice.primary.description ?
              <h6 className="uppercase text-xl my-3 tracking-widest font-display font-bold text-pink-900">{RichText.asText(slice.primary.description)}</h6>
              : null
            }
          </header>

          <main className="lg:w-3/5">
          <Accordion>
            { slice.items.map((item, index) => faqItem(item, index)) }
          </Accordion>
          </main>
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
