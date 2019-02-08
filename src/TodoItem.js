import React, { Component } from "react"

class TodoItem extends Component {

    constructor(props) {
        super(props)

        this.state = {
            done: false
        }

        this.toggle = this.toggle.bind(this)
    }

    toggle() {
        this.setState({
            done: !this.state.done
        })
    }

    render() 
    {
        let { text } = this.props
        let { done } = this.state

        return (
            <div>
                <input 
                    type="checkbox" 
                    value={done}
                    onClick={this.toggle}/>
                {done ? "DONE " + text : text }
            </div>
        )
    }
}

export default TodoItem