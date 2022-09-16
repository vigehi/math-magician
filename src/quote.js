import React from 'react';
import Header from './header';
import './quote.css';
import image from './components/in.png';
import im from './components/mao.png';

const Quotes = () => (
  <div>
    <Header />
    <img className="img" src={image} alt="img" />

    <h4>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim,
      dolor id sagittis tincidunt, mauris mauris consequat leo, et commodo purus
      est vitae ex. Duis nisi lacus, facilisis in varius ac, pulvinar nec libero.
      Pellentesque feugiat elementum bibendum. Ut convallis libero sit amet tortor
      egestas, nec laoreet eros ullamcorper. Nullam laoreet semper rutrum. Mauris
      leo enim, vestibulum ut lacus sed, blandit imperdiet nibh. Donec eget velit
    </h4>
    <img src={im} alt="img" />
  </div>

);

export default Quotes;
