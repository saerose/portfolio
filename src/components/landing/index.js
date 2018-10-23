import React, { Component } from 'react';
import './styles.sass';

// Modules imports 💗
import {SpeechBubble} from 'react-kawaii';

import Social from '../social'

class Landing extends Component {
  render() {
    return (
      <div className='landing__wrapper'>
        <div className='landing__intro__wrapper'>
          <SpeechBubble size={220} mood='lovestruck' color='#7FB3D5' />
          <div className='landing__intro__name'>Hello, I'm Sae!</div>
          <div className='landing__intro__description'>Front End Dev | Part-Time Doodler | Historic Costumaholic | Full Time Nerd</div>
          <Social />
          go down
          </div>
      </div>
    );
  }
}

export default Landing;
