import React, { Component } from "react";

class Page1 extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        const { fromNotifications, value2, value3 } = this.props.location.state

        return (        
            <div >
                <h1>Page 1 {value2} {value3} </h1>
            </div>
        )
    }
}

export default Page1;