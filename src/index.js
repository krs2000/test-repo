import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'; 
import './styles/index.css';
import './styles/App.css';
import './styles/openSans.css';
import './styles/Montserrat-Regular.css';
import './styles/wickedcss.min.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './bootstrap.min.css';



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
