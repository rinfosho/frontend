import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import BackNav from '../BackNav';


export default class AllCustomer extends Component {
    render() {
        return <div>
            <h3 className="title">Here are your customers</h3>
            <hr/>
            <Link to = "/customer-summary" className="navbar-item">Customer summary</Link>
            <hr/>
            <BackNav/>
        </div>
    }
}