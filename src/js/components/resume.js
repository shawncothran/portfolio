import React from 'react';
import SkyLight from 'react-skylight';
import { Link } from 'react-router';

class Resume extends React.Component {
  render() {

    var modalStyles = {
     background: 'none',
     color: 'rgba(255,243,  7,1)',
     width: '74.8vmin',
     height: '96.8vmin',
     marginTop: '-48.4vmin',
     marginLeft: '-37.4vmin',
     padding: '0vmin',
   };

    return (
      <section className="section">
        <h1>R É S U M É</h1>
        <button onClick={() => this.refs.modal.show()}>View Résumé</button>
        <SkyLight className="modal" dialogStyles={modalStyles} hideOnOverlayClicked ref="modal">
          <a target="_blank" href='http://shawncothran.com/assets/rez.pdf'>
            <h1>Shawn Cothran</h1>
            <iframe className="pdf" src="http://docs.google.com/gview?url=http://shawncothran.com/assets/rez.pdf&embedded=true" frameBorder="0">
            </iframe>
          </a>
        </SkyLight>
      </section>
    )
  }
}

export default Resume;
