import React from 'react';
import ReactDOM from 'react-dom';

const Items = () => "Hello World";

ReactDOM.render(
    <div className='container'>
      <Items />
    </div>,
  document.querySelector('#scaffolding-root')
);
