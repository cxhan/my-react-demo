import React, { Component } from "react";

export default class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        console.log(this.props)
    }

    render() {
        return (
            <div className="Test">
                testPage
            </div>
        )
    }
}