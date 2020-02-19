import React from 'react';

type QuoteData = {
  text: string;
  author: string;
};

const Quote = ({ text, author }: QuoteData) => (
  <div>
    {text} - {author}
  </div>
);

export default Quote;
