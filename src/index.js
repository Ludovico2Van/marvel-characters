import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import './index.scss';
import store from './store/store';

render(<App store={store} />, document.getElementById('root'));
