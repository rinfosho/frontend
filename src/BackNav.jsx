import React, {Component} from 'react'
import {Link} from 'react-router-dom'


export default class BackNav extends Component{
    render() {
        return <nav className="navbar">
            <div className="navbar-menu">
                <Link to = "/" className="navbar-item">Back to dashboard</Link>
                </div>
        </nav>

    }
}