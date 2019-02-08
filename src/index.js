import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'

import App from './App';


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
