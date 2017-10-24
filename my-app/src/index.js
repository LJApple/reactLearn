import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MyTest from '../src/components/onchange';
import Avatar from '../src/components/ProfilePic';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Avatar />, document.getElementById('root'));
registerServiceWorker();
