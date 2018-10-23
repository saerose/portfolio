import React, { Component } from 'react';
import './styles.sass';

// Import icons 🐒
import { GitHub, LinkedIn } from '../../icons/icons';


class Social extends Component {
  render() {
    return (
      <div className='social__wrapper'>
        <GitHub /> <LinkedIn />
      </div>
    );
  }
}

export default Social;