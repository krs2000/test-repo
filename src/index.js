import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import './styles/openSans.css';
import './styles/wickedcss.min.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';




ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
