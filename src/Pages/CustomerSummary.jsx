import React, {Component} from 'react'
import BackNav from '../BackNav';

export default class CustomerSummary extends Component {
    render() {
        return <div>
            <h3 className="title">Here is customer summary</h3>
            <hr/>
            <BackNav/>
        </div>
    }
}