import React, {Component} from 'react';

let WorkElement = function statelessFunctionComponentClass(props) {
  let workElementLink = '/' + props.name;

  return (
    <a className="work-element-link" href={workElementLink}>
    work element!
    </a>
  );
};

module.exports = WorkElement;
