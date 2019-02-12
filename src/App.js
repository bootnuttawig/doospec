import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Select from './Select'
import Compare from './Compare'

class App extends Component {

    constructor(props) {
        super(props)
    }

    render() {        
        return (
            <div>
                <Route exact path="/" component={Select} />                    
                <Route path="/compare" component={Compare} />
            </div>
        );
  }
}



export default App;
