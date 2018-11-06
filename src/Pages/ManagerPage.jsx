import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import BackNav from '../BackNav'


export default class ManagerPage extends Component {
    render() {
        return <div>
            <h3 className="title"> Manager page </h3>
            <Link to = "/salesman-page" className="navbar-item">Specific salesman</Link>
            <hr/>
            <BackNav/>
        </div>
    }
}