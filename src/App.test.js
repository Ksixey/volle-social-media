import React from 'react';
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react';
import AppNetwork from './App';

test('renders learn react link', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppNetwork/>, div)
  ReactDOM.unmountComponentAtNode(div)
});
