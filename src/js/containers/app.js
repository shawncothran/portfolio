import React from 'react';
import ReactDOM from 'react-dom';
import Scroll from 'react-scroll';
import {Link} from 'react-router';

import Header from '../components/header'
import Contact from '../components/contact'
import Bio from '../components/bio'
import Work from '../components/work'
import Resume from '../components/resume'

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Contact />
        <main>
          <Bio />
          <Work />
          <Resume />
        </main>
      </div>
    )
  }
}

export default App;
