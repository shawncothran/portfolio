import React from 'react';

class Bio extends React.Component {
  render() {
    return (
      <section className="section">
        <img className='imgFullColor' src='/assets/shawn.jpg' />
        <img className='imgFourColor' src='/assets/shawnPallete.gif' />
        <h1>B I O</h1>
        <p>Web design has been a hobby of mine since the late Nineties. As a volunteer, band member, friend, or extra hat at work, I have frequently been in roles where I got nitty gritty with code. It wasn't until 2015 that I finally decided to do it full-time. I enrolled in The Iron Yard Academy and spent 3 months honing my skills as a web designer, and immersively learning JavaScript so that I may now continue on as a front end web DEVELOPER.</p>
        <p>I'm a champ at teamwork; and I excel at clean, semantic code and eating large meals!</p>
      </section>
    )
  }
}

export default Bio;
