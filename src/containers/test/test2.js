import React, { Component } from "react"

import { getLocation } from '../../service/index.api'

export default class Test2 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    async getLocation() {
        let params = {
            key: 'QWMBZ-QXHKX-QVY4L-TIOZ2-CTUWE-GSFE6',
            output: 'json'
        }
        try {
            let Result = await getLocation(params)
            console.log(Result)
        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount() {
        this.getLocation()
    }

    render() {
        return (
            <div className="Test2">
                <p>testPage2</p>
            </div>
        )
    }
}