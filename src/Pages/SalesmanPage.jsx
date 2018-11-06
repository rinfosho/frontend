import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import BackNav from '../BackNav'


export default class ManagerPage extends Component {
    render() {
        return <div>
            <h3 className="title"> Salesman page </h3>
            <Link to = "/customers" className="navbar-item">Salesman's customers</Link>
            <hr/>
            <BackNav/>
        </div>
    }
}