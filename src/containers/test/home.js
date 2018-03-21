import React, { Component } from "react";

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        console.log(this.props)
    }

    render() {
        return (
            <div className="Home">
                HomePage
            </div>
        )
    }
}