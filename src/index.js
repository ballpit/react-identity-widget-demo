import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import netlifyIdentity from 'netlify-identity-widget'

var buttons = document.createElement('div')

netlifyIdentity.init()

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
