import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import { Router, Route, Link } from 'react-router'
import App from './App';
import Page1 from './Page1'

const AppWithRouter = () => (
    <BrowserRouter>
        <div>
            <App/>
        </div>
    </BrowserRouter>
)

ReactDOM.render(
    <AppWithRouter/>, 
    document.getElementById('root')
);

serviceWorker.unregister();
