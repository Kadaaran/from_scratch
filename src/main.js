import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './app';
 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(App),
    document.getElementById('container')
  );
});
