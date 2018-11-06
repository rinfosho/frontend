import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import BackNav from '../BackNav'


export default class OwnerPage extends Component {
    render() {
        return <div>
            <h3 className="title"> Owner page </h3>
            <Link to = "/managers" className="navbar-item"> Specific Managers</Link>
            <hr/>
            <BackNav/>
        </div>
    }
}