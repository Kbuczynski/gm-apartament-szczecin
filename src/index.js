import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./style/index.scss";
import "./fontello/css/fontello.css";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
