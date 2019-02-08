import React, { Component } from "react";
import { timingSafeEqual } from "crypto";

class Header extends Component {

    constructor(props) {
        super(props)

        this.handerHeaderClicked = this.handerHeaderClicked.bind(this);
    }

    handerHeaderClicked() {
        alert("user : " + this.props.currentUser)
    }

    render() {

        let { currentUser, isLoggedIn } = this.props

        currentUser = isLoggedIn && "Logged in as " + currentUser

        return (        
            <div onClick={this.handerHeaderClicked}>Header {currentUser}</div>
        )
    }
}

export default Header;