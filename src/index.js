import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import 'flexboxgrid2';
import './index.css';
import './master.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

