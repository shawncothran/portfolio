import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <section className="contact">
        <nav>
          <a className="connect" target="_blank" href='https://www.linkedin.com/in/shawncothran'>
            <span className="fa fa-linkedin-square"></span>
            <span className="linkContent">LinkedIn</span>
          </a>
          <a className="connect" target="_blank" href='http://github.com/shawncothran'>
            <span className="fa fa-github-square"></span>
            <span className="linkContent">GitHub</span>
          </a>
          <a className="connect" href='mailto:hey@shawncothran.com'>
            <span className="fa fa-envelope-square"></span>
            <span className="linkContent">hey@shawncothran.com</span>
          </a>
          <a className="connect" href='tel://+1-805-218-9301'>
            <span className="fa fa-phone-square"></span>
            <span className="linkContent">+1-805-218-9301</span>
          </a>
        </nav>
      </section>
    )
  }
}

export default Contact;
