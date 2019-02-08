import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

import  Main  from './Main'
import  Page1  from './Page1'

import Select from './Select'
import Compare from './Compare'

class App extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                {/* <div>
                    <Link to="/">Link 1</Link>
                    <Link to={{
                        pathname: '/page1',
                        state: {
                            fromNotifications: true,
                            value2: "Hello",
                            value3: ["aaa1", "nnn2"]
                        }
                    }}>Link 2</Link>
                </div> */}
                <div>
                    <Route exact path="/" component={Select} />                    
                    <Route path="/compare" component={Compare} />
                </div>
            </div>
        );
  }
}

export default App;
