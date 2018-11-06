import React, {Component} from 'react'
import {Link} from 'react-router-dom'


export default class OrderConfirm extends Component {
    render() {
        return <div>
            <h3 className="title">OrderConfirm</h3>
            <hr/>
            <Link to = "/customer-summary" className="navbar-item">To customer summary</Link>
        </div>
    }
}