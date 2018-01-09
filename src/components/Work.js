import React, {Component} from 'react';
import WorkElement from './WorkElement';
import './../styles/App.css';
import data from '../data.json';

class Work extends Component {
  createWorkElement(workElement) {
    return <WorkElement name={workElement.name} />;
  }

  createWorkElements(workElements) {
    return workElements.map(this.createWorkElement);
  }

  render() {
    return (
      <div class='does-this-work'>
        {this.createWorkElements(data.work)}
      </div>
    );
  }

}

module.exports = Work;
