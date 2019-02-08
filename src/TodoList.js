import React, { Component } from "react"
import TodoItem from "./TodoItem"

class TodoList extends Component {

    render() 
    {
        let { items } = this.props
        return (
            <div>
                <ul>
                    {
                        items.map(
                            (todo, i) => 
                            <li key={i}>
                                <TodoItem text={todo}/>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default TodoList