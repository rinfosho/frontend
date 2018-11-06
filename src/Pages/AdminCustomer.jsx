import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import BackNav from '../BackNav';


export default class AdminCustomer extends Component {
    render() {
        return <div>
            <h3 className="title">Add customer</h3>
            <hr/>
            <BackNav/>
        </div>
    }
}