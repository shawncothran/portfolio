import React from 'react';
import {Link} from 'react-router';

class Work extends React.Component {
  render() {
    return (
      <section className="section work">
        <h1>W O R K</h1>
        <div className="projectDiv slide">
          <p className="projectParagraph">demo of skill, JS, animation, HTML5, SASS</p>
          <a className="aPrime" target="_blank" href='http://shawncothran.com/tabSlide/'>tabSlide<br/>See Demo</a>
          <a className="aSub" target="_blank" href='https://github.com/shawncothran/tabSlide'>See CODE</a>
        </div>
        <div className="projectDiv space">
          <p className="projectParagraph">Backbone.js app, JS game & animations on HTML5 Canvas, SASS</p>
          <a className="aPrime" target="_blank" href='http://shawncothran.com/spaceInvadersBackbone_TIY_w08d02/'>SpaceInvaders<br/>See Demo</a>
          <a className="aSub" target="_blank" href='https://github.com/shawncothran/spaceInvadersBackbone_TIY_w08d02'>See CODE</a>
        </div>
        <div className="projectDiv snail">
          <p className="projectParagraph">React app, WYSIWYG postcard creator/scheduler, actually mails physical cards, SASS</p>
          <a className="aPrime" target="_blank" href='http://snailephant.com'>Snailephant!<br/>See Demo</a>
          <a className="aSub" target="_blank" href='https://github.com/shawncothran/snailephant'>See CODE</a>
        </div>
        <div className="projectDiv calc">
          <p className="projectParagraph">Vanilla JavaScript calculator app. HTML, SASS, Bourbon/Neat</p>
          <a className="aPrime" target="_blank" href='http://shawncothran.com/calculator_js_TIY_w04d01/'>CalculatorJS<br/>See Demo</a>
          <a className="aSub" target="_blank" href='https://github.com/shawncothran/calculator_js_TIY_w04d01'>See CODE</a>
        </div>
        <div className="projectDiv skate">
          <p className="projectParagraph">Pixel perfect site replica. HTML, SASS, Bourbon/Neat</p>
          <a className="aPrime" target="_blank" href='http://shawncothran.com/Powell_Peralta_TIY_w02weekend/'>PowellSkate<br/>See Demo</a>
          <a className="aSub" target="_blank" href='https://github.com/shawncothran/Powell_Peralta_TIY_w02weekend'>See CODE</a>
        </div>
      </section>
    )
  }
}

export default Work;
