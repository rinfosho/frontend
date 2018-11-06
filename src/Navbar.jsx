import React, {Component} from 'react'
import {Link} from 'react-router-dom'


export default class Navbar extends Component{
    render() {
        return <nav className="navbar">
            <div className="navbar-menu">
                <Link to = "/create-order" className="navbar-item">Create order</Link>
                <Link to = "/promotions" className="navbar-item">Promotions</Link>
                <Link to = "/price-list" className="navbar-item">Price list</Link>
                <Link to = "/customers" className="navbar-item">Customer info</Link>
                <Link to = "/admin-add-product" className="navbar-item">Add product</Link>
                <Link to = "/admin-add-customer" className="navbar-item">Add customer</Link>
                <Link to = "/admin-add-salesman" className="navbar-item">Add salesman</Link>
                <Link to = "/admin-add-promotion" className="navbar-item">Add promotion</Link>
                <Link to = "/owner" className="navbar-item">Owner</Link>
                <Link to = "/managers" className="navbar-item">Manager</Link>


            </div>
        </nav>

    }
}