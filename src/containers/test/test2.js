import React, { Component } from "react"

import { getLocation } from '../../service/index.api'

export default class Test2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locationInfo: ''
        }
    }

    async getLocation() {
        let params = {
            key: 'QWMBZ-QXHKX-QVY4L-TIOZ2-CTUWE-GSFE6',
            output: 'json'
        }
        try {
            let Result = await getLocation(params)
            this.setState({
                locationInfo: JSON.stringify(Result.data.result.ad_info)
            })

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
                <p>NoNeedToLogin</p>
                <p>{this.state.locationInfo}</p>
            </div>
        )
    }
}