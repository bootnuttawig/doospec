import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import { Route } from 'react-router-dom'

class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentTime : 0,
            todoItems: ["hello", "world"]
        }

        this.handlerFooterClicked = this.handlerFooterClicked.bind(this)
        this.handlerAddButtonClicked = this.handlerAddButtonClicked.bind(this)
    }

    handlerFooterClicked(time) {
        this.setState({
            currentTime: time
        }) 
    }

    handlerAddButtonClicked(newTodo) {
        this.setState({
            todoItems: this.state.todoItems.concat([newTodo])
        })
    }

    render() {
        let { currentTime, todoItems } = this.state
        
        return (
            <div>                
                <h1>Main Page</h1>

                <Header currentUser="Nuttawut" isLoggedIn={true}/>

                <div>currentTime = {currentTime}</div>

                <br/>

                <TodoInput onAddTodo={this.handlerAddButtonClicked} />

                <TodoList items={todoItems}/>

                <TodoInput onAddTodo={this.handlerAddButtonClicked} />

                <br/>

                <table class="table">
                    <tbody>
                        <tr>
                            <td>Test</td>
                            <td>Test</td>
                        </tr>
                        <tr>
                            <td>Test</td>
                            <td>Test</td>
                        </tr>
                    </tbody>
                </table>
                <Footer onTimerClick={this.handlerFooterClicked}/>
            </div>
        );
  }
}

export default Main;
