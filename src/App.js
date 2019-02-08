import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentTime : 0
        }

        this.handlerFooterClicked = this.handlerFooterClicked.bind(this)
    }

    handlerFooterClicked(time) {
        this.setState({
            currentTime: time
        }) 
    }

    render() {
        let { currentTime } = this.state
        
        return (
            <div>

                <Header
                    currentUser="Nuttawut"
                    isLoggedIn={true}
                />

                <div>currentTime = {currentTime}</div>
                <Footer onTimerClick={this.handlerFooterClicked}/>
            </div>
        );
  }
}

export default App;
