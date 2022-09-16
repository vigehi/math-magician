import React from 'react';
import Header from './header';
import './home.css';
import im from './components/mao.png';

const Home = () => (
  <div>
    <Header />
    <h1>Magic...... Lets go</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim,
      dolor id sagittis tincidunt, mauris mauris consequat leo, et commodo purus
      est vitae ex. Duis nisi lacus, facilisis in varius ac, pulvinar nec libero.
      Pellentesque feugiat elementum bibendum. Ut convallis libero sit amet tortor
      egestas, nec laoreet eros ullamcorper. Nullam laoreet semper rutrum. Mauris
      leo enim, vestibulum ut lacus sed, blandit imperdiet nibh. Donec eget velit
      nec ipsum auctor egestas. Nullam eget lacinia sapien. Vivamus faucibus ut nibh
      vel tristique. Aliquam rutrum eros a augue malesuada, a egestas tortor rhoncus
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim,
      dolor id sagittis tincidunt, mauris mauris consequat leo, et commodo purus
      est vitae ex. Duis nisi lacus, facilisis in varius ac, pulvinar nec libero.
      Pellentesque feugiat elementum bibendum. Ut convallis libero sit amet tortor
      egestas, nec laoreet eros ullamcorper. Nullam laoreet semper rutrum. Mauris
      leo enim, vestibulum ut lacus sed, blandit imperdiet nibh. Donec eget velit
      nec ipsum auctor egestas. Nullam eget lacinia sapien. Vivamus faucibus ut nibh
      vel tristique. Aliquam rutrum eros a augue malesuada, a egestas tortor rhoncus
    </p>
    <img src={im} alt="img" />
  </div>

);

export default Home;
