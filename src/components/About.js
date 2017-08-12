import React, {Component} from 'react';
import './../styles/App.css';

class About extends Component {

  render() {
    return (
      <section id="about-section">
        <div className="container">
          <h2>Hello, my name is Tracey.</h2>
          <h3>I am a developer & designer pursuing a degree in Computer Science & Interactive Media at Northeastern University, originally from New York City. I like making <span><a href=''>cool things,</a></span> learning about neat technology, and having fun.</h3>
          <h3>When I'm not working I enjoy reading, biking, ultimate frisbee, and half-finishing caffeinated beverages.</h3>
          <div id="contact">
            <ul className="inline-list">
              <li><a href='/tracey_lum_resume.pdf'>resume</a></li>
              <li><a href='mailto:lum.tracey@gmail.com'>email</a></li>
              <li><a href='https://github.com/trac3y' target='_blank'>github</a></li>
              <li><a href='https://www.linkedin.com/in/trac3y' target='_blank'>linkedin</a></li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

module.exports = About;
