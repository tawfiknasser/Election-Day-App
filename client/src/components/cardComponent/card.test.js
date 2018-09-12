import React from 'react';
import ReactDOM from 'react-dom';
import card from './card';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<card />, div);
  ReactDOM.unmountComponentAtNode(div);
});

export default card;
